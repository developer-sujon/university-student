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
import {
  useSessionDeleteMutation,
  useSessionListQuery,
  useSessionUpdateMutation,
} from '../../../redux/services/sessionService';
import Table from '../../../components/Table/Table';
import AleartMessage from '../../../helpers/AleartMessage';
import DateFormatter from '../../../utils/DateFormatter';
import SessionDetailsModal from './SessionDetailsModal';
import exportDataJson from '../../../utils/exportDataJson';

const Session = () => {
  const [singleSession, setSingleSession] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { t } = useTranslation();
  const { data: Sessions, isLoading } = useSessionListQuery();
  const [SessionDelete] = useSessionDeleteMutation();
  const data = Sessions?.data || [];

  const deleteItem = (id) => {
    AleartMessage.Delete(id, SessionDelete);
  };

  const handleQuickView = (d) => {
    setSingleSession(d);
    handleShow();
  };

  const columns = [
    {
      Header: '#',
      accessor: (_, index) => index + 1,
      sort: true,
    },
    {
      Header: t('session name'),
      accessor: (d) => <span className="ms-1"> {d.sessionName}</span>,
      sort: true,
    },
    {
      Header: t('session year'),
      accessor: (d) => <span className="ms-1"> {d.sessionYear}</span>,
      sort: true,
    },
    {
      Header: t('created at'),
      accessor: (d) => <span className="ms-1"> {DateFormatter(d.createdAt)}</span>,
      sort: true,
    },
    {
      Header: t('action'),
      accessor: (d) => (
        <div className="bodySmall">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('view')}</Tooltip>}
          >
            <Button variant="primary" style={{ padding: '5px 10px' }} onClick={() => handleQuickView(d)}>
              <AiOutlineFolderView />
            </Button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('edit')}</Tooltip>}
          >
            <Link to={`/session-create-update?id=${d?.id}`}>
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
    <>
      <Row>
        <Col className="d-flex justify-content-between p-2" sm={12}>
          <h5>{t('session')}</h5>
          <div>
            <Link to={'/session-create-update'}>
              <Button size="sm" variant="primary">
                {t('create session')}
              </Button>
            </Link>
            <Button
              className="mx-2"
              size="sm"
              variant="primary"
              onClick={() => exportDataJson(data, 'session-report', 'xls')}
            >
              {t('download report')}
            </Button>
          </div>
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
      <SessionDetailsModal singleSession={singleSession} show={show} handleClose={handleClose} />
    </>
  );
};

export default Session;
