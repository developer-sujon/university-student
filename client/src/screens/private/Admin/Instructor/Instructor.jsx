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
  useInstructorDeleteMutation,
  useInstructorListQuery,
  useInstructorUpdateMutation,
} from '../../../../redux/services/instructorService';
import Table from '../../../../components/Table/Table';
import AleartMessage from '../../../../helpers/AleartMessage';
import DateFormatter from '../../../../utils/DateFormatter';
import { useProfileDetailsQuery } from '../../../../redux/services/profileService';

const Instructor = () => {
  const { t } = useTranslation();
  const { data: Instructors, isLoading } = useInstructorListQuery();
  const [InstructorDelete] = useInstructorDeleteMutation();
  const data = Instructors?.data || [];
  const { data: profileDetails } = useProfileDetailsQuery();
  const [InstructorUpdate] = useInstructorUpdateMutation();

  const deleteItem = (id) => {
    AleartMessage.Delete(id, InstructorDelete);
  };

  const updateStatus = (data) => {
    const { id, createdAt, updatedAt, studentID, ...others } = data;
    AleartMessage.StatusUpdate(id, others, InstructorUpdate);
  };

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('name'),
      accessor: (d) => <span className="ms-1"> {d.name}</span>,
      sort: true,
    },
    {
      Header: t('mobile'),
      accessor: (d) => <span className="ms-1"> {d.mobile || 'NA'}</span>,
      sort: true,
    },
    {
      Header: t('email'),
      accessor: (d) => <span className="ms-1"> {d.email}</span>,
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
            <Link to={`/instructor-create-update?id=${d?.id}`}>
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
                <h5>{t('Instructor')}</h5>
                <Link to={'/instructor-create-update'}>
                  <Button size="sm" variant="primary">
                    {t('create Instructor')}
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

export default Instructor;
