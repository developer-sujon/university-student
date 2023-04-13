//External lib imports
import { useState } from 'react';
import { Row, Col, Container, Button, Card, ListGroup, Badge, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiOutlineEdit, AiOutlineFolderView } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';

//Internal lib imports
import Layout from '../../../layout/Layout';
import { useOthersDeleteMutation, useOthersListQuery, useOthersUpdateMutation } from '../../../redux/services/othersService';
import Table from '../../../components/Table/Table';
import AleartMessage from '../../../helpers/AleartMessage';
import { useProfileDetailsQuery } from '../../../redux/services/profileService';

const Others = () => {
  const [singleOthers, setSingleOthers] = useState({});
  const { data: profileDetails } = useProfileDetailsQuery();
  const [othersUpdate] = useOthersUpdateMutation();

  const { t } = useTranslation();
  const { data: Otherss, isLoading } = useOthersListQuery();
  const [OthersDelete] = useOthersDeleteMutation();
  const data = Otherss?.data || [];

  const deleteItem = (id) => {
    AleartMessage.Delete(id, OthersDelete);
  };

  const updateStatus = (data) => {
    const { id, studentID, ...others } = data;
    AleartMessage.StatusUpdate(id, others, othersUpdate);
  };

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('student id'),
      accessor: (d) => <span className="ms-1"> {d.studentID}</span>,
      sort: true,
    },
    {
      Header: t('subject'),
      accessor: (d) => <span className="ms-1"> {d.subject}</span>,
      sort: true,
    },
    {
      Header: t('description'),
      accessor: (d) => <span className="ms-1"> {d.description}</span>,
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
          {profileDetails?.data?.role !== 'STUDENT' && (
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">{t('status')}</Tooltip>}
            >
              <Button className="mr-10" variant="warning" style={{ padding: '5px 10px' }} onClick={() => updateStatus(d)}>
                <GrStatusGood />
              </Button>
            </OverlayTrigger>
          )}
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('edit')}</Tooltip>}
          >
            <Link
              to={`/others-create-update?id=${d?.id}`}
              onClick={(e) =>
                (d?.status !== 'PENDING' && profileDetails?.data?.role === 'STUDENT') ||
                profileDetails?.data?.role === 'ADMIN'
                  ? e.preventDefault()
                  : undefined
              }
            >
              <Button
                variant="primary"
                style={{ padding: '5px 10px' }}
                className="me-1"
                disabled={
                  (d?.status !== 'PENDING' && profileDetails?.data?.role === 'STUDENT') ||
                  profileDetails?.data?.role === 'ADMIN'
                }
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
              disabled={
                (d?.status !== 'PENDING' && profileDetails?.data?.role === 'STUDENT') ||
                profileDetails?.data?.role === 'ADMIN'
              }
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
                <h5>{t('Others')}</h5>
                <Link
                  to={'/others-create-update'}
                  onClick={(e) => (profileDetails?.data?.role === 'ADMIN' ? e.preventDefault() : undefined)}
                >
                  <Button size="sm" variant="primary" disabled={profileDetails?.data?.role === 'ADMIN'}>
                    {t('create Others')}
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

export default Others;
