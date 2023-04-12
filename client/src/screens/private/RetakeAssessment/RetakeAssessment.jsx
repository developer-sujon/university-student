//External lib imports
import { useState } from 'react';
import { Row, Col, Container, Button, Card, ListGroup, Badge, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiOutlineEdit, AiOutlineFolderView } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

//Internal lib imports
import Layout from '../../../layout/Layout';
import {
  useRetakeAssessmentDeleteMutation,
  useRetakeAssessmentListQuery,
} from '../../../redux/services/retakeAssessmentService';
import Table from '../../../components/Table/Table';
import AleartMessage from '../../../helpers/AleartMessage';
import { useProfileDetailsQuery } from '../../../redux/services/profileService';

const RetakeAssessment = () => {
  const [singleRetakeAssessment, setSingleRetakeAssessment] = useState({});
  const { data: profileDetails } = useProfileDetailsQuery();

  const { t } = useTranslation();
  const { data: RetakeAssessments, isLoading } = useRetakeAssessmentListQuery();
  const [RetakeAssessmentDelete] = useRetakeAssessmentDeleteMutation();
  const data = RetakeAssessments?.data || [];

  const deleteItem = (id) => {
    AleartMessage.Delete(id, RetakeAssessmentDelete);
  };

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('subject'),
      accessor: (d) => <span className="ms-1"> {d.subject}</span>,
      sort: true,
    },
    {
      Header: t('instructor'),
      accessor: (d) => d.instructor,
      sort: true,
    },
    {
      Header: t('assessment type'),
      accessor: (d) => <span className="ms-1"> {d.assessmentType}</span>,
      sort: true,
    },
    {
      Header: t('status'),
      accessor: (d) => (
        <div className="bodySmall">
          {d?.status === 'PENDING' ? (
            <Badge bg="primary" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          ) : d?.status === 'REJECTED' ? (
            <Badge bg="danger" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          ) : d?.status === 'APPROVED' ? (
            <Badge bg="success" pill>
              <span className="ms-1">{t(d?.status)}</span>
            </Badge>
          ) : (
            ''
          )}
        </div>
      ),
      sort: true,
    },
    {
      Header: t('action'),
      accessor: (d) => (
        <div className="bodySmall">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('edit')}</Tooltip>}
          >
            <Link
              to={`/retake-assessment-create-update?id=${d?.id}`}
              onClick={(e) => e.d?.status !== 'PENDING' && profileDetails?.data?.role === 'STUDENT' && e.preventDefault()}
            >
              <Button
                variant="primary"
                style={{ padding: '5px 10px' }}
                className="me-1"
                disabled={d?.status !== 'PENDING' && profileDetails?.data?.role === 'STUDENT'}
              >
                <AiOutlineEdit />
              </Button>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('delete')}</Tooltip>}
          >
            <Button
              variant="danger"
              style={{ padding: '5px 10px' }}
              onClick={() => deleteItem(d.id)}
              disabled={d?.status !== 'PENDING' && profileDetails?.data?.role === 'STUDENT'}
            >
              <BsTrash />
            </Button>
          </OverlayTrigger>
        </div>
      ),
    },
  ];

  const sizePerPageList = [
    {
      text: t('5'),
      value: 5,
    },
    {
      text: t('10'),
      value: 10,
    },
    {
      text: t('25'),
      value: 25,
    },
    {
      text: t('all'),
      value: data?.length,
    },
  ];

  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <Col className="d-flex justify-content-between p-2" sm={12}>
                <h5>{t('retake assessment')}</h5>
                <Link to={'/retake-assessment-create-update'}>
                  <Button size="sm" variant="primary">
                    {t('create retake assessment')}
                  </Button>
                </Link>
              </Col>
              <Col sm={12}>
                {isLoading ? (
                  <Spinner size="lg" variant="primary" />
                ) : data?.length ? (
                  <Table
                    columns={columns}
                    data={data}
                    pageSize={5}
                    sizePerPageList={sizePerPageList}
                    isSortable={true}
                    pagination={true}
                  />
                ) : (
                  t('no data found')
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default RetakeAssessment;
