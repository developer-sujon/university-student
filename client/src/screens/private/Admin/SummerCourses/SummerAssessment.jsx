//External lib imports
import { useState } from 'react';
import { Row, Col, Container, Button, Card, ListGroup, Badge, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiOutlineEdit, AiOutlineFolderView } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';

//Internal lib imports
import Layout from '../../../../layout/Layout';
import {
  useSummerAssessmentDeleteMutation,
  useSummerAssessmentListQuery,
  useSummerAssessmentUpdateMutation,
} from '../../../../redux/services/summerAssessmentService';
import Table from '../../../../components/Table/Table';
import AleartMessage from '../../../../helpers/AleartMessage';
import { useProfileDetailsQuery } from '../../../../redux/services/profileService';
import SubjectRepetitionDetailsModal from './SummerAssessmentDetailsModal';

const SummerAssessment = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [singleSummerAssessment, setSingleSummerAssessment] = useState({});
  const { data: profileDetails } = useProfileDetailsQuery();
  const [SummerAssessmentUpdate] = useSummerAssessmentUpdateMutation();

  const { t } = useTranslation();
  const { data: SummerAssessments, isLoading } = useSummerAssessmentListQuery();
  const [SummerAssessmentDelete] = useSummerAssessmentDeleteMutation();
  const data = SummerAssessments?.data || [];

  const deleteItem = (id) => {
    AleartMessage.Delete(id, SummerAssessmentDelete);
  };

  const updateStatus = (data) => {
    const { id, createdAt, updatedAt, studentID, ...others } = data;
    AleartMessage.StatusUpdate(id, others, SummerAssessmentUpdate);
  };

  const handleQuickView = (d) => {
    setSingleSummerAssessment(d);
    handleShow();
  };

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('courses'),
      accessor: (d) => <span className="ms-1"> {d.name}</span>,
      sort: true,
    },
    {
      Header: t('no of request'),
      accessor: (d) => <span className="ms-1"> {d?.enrolls?.length}</span>,
      sort: true,
    },
    {
      Header: t('action'),
      accessor: (d) => (
        <div className="bodySmall">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('report')}</Tooltip>}
          >
            <Link to={`/summer-assessment-report?id=${d?.id}`}>
              <Button variant="primary" style={{ padding: '5px 10px' }} className="me-1">
                <AiOutlineFolderView />
              </Button>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('edit')}</Tooltip>}
          >
            <Link to={`/summer-assessment-create-update?id=${d?.id}`}>
              <Button variant="primary" style={{ padding: '5px 10px' }} className="me-1">
                <AiOutlineEdit />
              </Button>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('delete')}</Tooltip>}
          >
            <Button variant="danger" style={{ padding: '5px 10px' }} onClick={() => deleteItem(d.id)}>
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
                <h5>{t('summer assessment')}</h5>
                <Link to={'/summer-assessment-create-update'}>
                  <Button size="sm" variant="primary">
                    {t('create summer assessment')}
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
      <SubjectRepetitionDetailsModal singleSummerAssessment={singleSummerAssessment} show={show} handleClose={handleClose} />
    </Layout>
  );
};

export default SummerAssessment;