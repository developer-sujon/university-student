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
  useSubjectRepetitionDeleteMutation,
  useSubjectRepetitionListQuery,
} from '../../../redux/services/subjectRepetitionService';
import Table from '../../../components/Table/Table';
import AleartMessage from '../../../helpers/AleartMessage';
import { useProfileDetailsQuery } from '../../../redux/services/profileService';

const SubjectRepetition = () => {
  const [singleSubjectRepetition, setSingleSubjectRepetition] = useState({});
  const { data: profileDetails } = useProfileDetailsQuery();

  const { t } = useTranslation();
  const { data: SubjectRepetitions, isLoading } = useSubjectRepetitionListQuery();
  const [SubjectRepetitionDelete] = useSubjectRepetitionDeleteMutation();
  const data = SubjectRepetitions?.data || [];

  const deleteItem = (id) => {
    AleartMessage.Delete(id, SubjectRepetitionDelete);
  };

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('name'),
      accessor: (d) => <span className="ms-1"> {d.studentName}</span>,
      sort: true,
    },
    {
      Header: t('roll'),
      accessor: (d) => d.rollNo,
      sort: true,
    },
    {
      Header: t('session'),
      accessor: (d) => d.session,
      sort: true,
    },
    {
      Header: t('session registration'),
      accessor: (d) => <span className="ms-1"> {d.sessionRegistration}</span>,
      sort: true,
    },
    {
      Header: t('session CGPA'),
      accessor: (d) => <span className="ms-1"> {d.sessionCGPA}</span>,
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
              to={`/subject-repetition-create-update?id=${d?.id}`}
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
                <h5>{t('subject repetition')}</h5>
                <Link to={'/subject-repetition-create-update'}>
                  <Button size="sm" variant="primary">
                    {t('create subject repetition')}
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

export default SubjectRepetition;
