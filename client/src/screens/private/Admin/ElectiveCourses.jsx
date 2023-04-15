//External Lib Import
import { Tab, Tabs } from 'react-bootstrap';
import { Row, Col, Container, Button, Card, Spinner, Form } from 'react-bootstrap';

//Internal Lib Import
import Layout from '../../../layout/Layout';
import Session from './Session';
import Courses from './Courses';

const ElectiveCourses = () => {
  return (
    <Layout>
      <Container>
        <Card>
          <Card.Body>
            <Tabs defaultActiveKey="courses" className="mb-3">
              <Tab eventKey="courses" title="courses">
                <Courses />
              </Tab>
              <Tab eventKey="session" title="session">
                <Session />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};

export default ElectiveCourses;
