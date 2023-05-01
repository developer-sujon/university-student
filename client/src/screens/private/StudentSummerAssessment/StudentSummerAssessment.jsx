//External lib imports
import { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Card, ListGroup, Badge, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiOutlineEdit, AiOutlineFolderView } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';

//Internal lib imports
import Layout from '../../../layout/Layout';
import {
  useSummerAssessmentApplyMutation,
  useSummerAssessmentListQuery,
} from '../../../redux/services/summerAssessmentService';
import Table from '../../../components/Table/Table';
import AleartMessage from '../../../helpers/AleartMessage';
import { useProfileDetailsQuery } from '../../../redux/services/profileService';
import StudentSummerAssessmentDetailsModal from './StudentSummerAssessmentDetailsModal';

const StudentSummerAssessment = () => {
  const [filterEnroll, setFilterEnroll] = useState([]);
  const [nfilterEnroll, setNFilterEnroll] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [singleStudentSummerAssessment, setSingleStudentSummerAssessment] = useState({});
  const { data: profileDetails } = useProfileDetailsQuery();

  const { t } = useTranslation();
  const { data: StudentSummerAssessments, isLoading } = useSummerAssessmentListQuery();
  const data = StudentSummerAssessments?.data || [];

  useEffect(() => {
    const tempData = [];
    data.forEach((element) => {
      tempData.push(element?.enrolls);
    });
    setFilterEnroll(tempData.flat());
  }, [data]);

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('student id'),
      accessor: (d) => <span className="ms-1"> {d?.studentID}</span>,
      sort: true,
    },
    {
      Header: t('name'),
      accessor: (d) => <span className="ms-1"> {d?.studentName}</span>,
      sort: true,
    },
    {
      Header: t('roll'),
      accessor: (d) => d?.rollNo,
      sort: true,
    },
    {
      Header: t('session'),
      accessor: (d) => d?.session,
      sort: true,
    },
    {
      Header: t('session registration'),
      accessor: (d) => <span className="ms-1"> {d?.sessionRegistration}</span>,
      sort: true,
    },
    {
      Header: t('session CGPA'),
      accessor: (d) => <span className="ms-1"> {d?.sessionCGPA}</span>,
      sort: true,
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
                <Link to={'/summer-assessment-apply'}>
                  <Button size="sm" variant="primary">
                    {t('apply summer assessments')}
                  </Button>
                </Link>
              </Col>
              <Col sm={12}>
                {isLoading ? (
                  <Spinner size="lg" variant="primary" />
                ) : data?.length ? (
                  <Table
                    columns={columns}
                    data={filterEnroll?.filter((i) => i.session === profileDetails?.data?.session)}
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
      {/* <StudentSummerAssessmentDetailsModal
        singleStudentSummerAssessment={singleStudentSummerAssessment}
        show={show}
        handleClose={handleClose}
      /> */}
    </Layout>
  );
};

export default StudentSummerAssessment;
