//External lib imports
import { useState } from 'react';
import { Row, Col, Container, Button, Card, ListGroup, Badge, OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { AiOutlineEdit, AiOutlineFolderView } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

//Internal lib imports
import Layout from '../../../layout/Layout';

import Table from '../../../components/Table/Table';
import AleartMessage from '../../../helpers/AleartMessage';
import DateFormatter from '../../../utils/DateFormatter';
import Upload from '../../../components/Upload';
import {
  useInsCoursesDeleteMutation,
  useInsCoursesListQuery,
  useInsCoursesUpdateMutation,
} from '../../../redux/services/inccoursesService';
import CreateUpdateFolder from './CreateUpdateFolder';

const InsCourseResources = () => {
  const { t } = useTranslation();
  const { data: InsCoursess, isLoading } = useInsCoursesListQuery();
  const [InsCoursesDelete] = useInsCoursesDeleteMutation();
  const [InsCoursesUpdate] = useInsCoursesUpdateMutation();
  const data = InsCoursess?.data || [];

  const { id, uniqueId } = useParams();
  const course = data.find((item) => item.id === id);

  const [modalShow, setModalShow] = useState(false);
  const [folderCreateUpdateModalShow, setFolderCreateUpdateModalSHow] = useState(false);
  const [createFlag, setCreateFlag] = useState(true);

  const deleteItem = (id) => {
    AleartMessage.Delete(id, InsCoursesDelete);
  };

  const columns = [
    {
      Header: t('Folder Name'),
      accessor: (data) => <span className="ms-1"> {data.title}</span>,
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
            overlay={<Tooltip id="button-tooltip">{t('edit')}</Tooltip>}
          >
            <Link to={`/course-folder/${d.id}`}>
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
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="button-tooltip">{t('enrolled student')}</Tooltip>}
          >
            <Link to={`/enrolled-student?id=${d?.id}`}>
              <Button variant="info" style={{ padding: '5px 10px' }}>
                <AiOutlineFolderView />
              </Button>
            </Link>
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
        <Row>
          <Col className="d-flex justify-content-between p-2" sm={12}>
            <h5>{t('courses')}</h5>
            <div>
              <Button className="mx-2" size="sm" variant="primary" onClick={() => setModalShow(true)}>
                {t(' upload')}
              </Button>
            </div>
          </Col>
          <Col sm={12}>
            {isLoading ? (
              <Spinner size="lg" variant="primary" />
            ) : data?.length ? (
              <Table
                columns={columns}
                data={course?.coursesHistory || []}
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
        <Upload
          modalData={{ show: modalShow, onHide: () => setModalShow(false) }}
          course={course}
          submitHandler={InsCoursesUpdate}
          folderId={uniqueId}
        />
      </Container>
    </Layout>
  );
};

export default InsCourseResources;
