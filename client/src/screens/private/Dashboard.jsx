//External lib imports
import React from 'react';
import { Container, Row } from 'react-bootstrap';

//Internal lib imports
import Layout from '../../layout/Layout';
import MainDashboard from './MainDashboard';
import { useProfileDetailsQuery } from '../../redux/services/profileService';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  const { t } = useTranslation();
  const { data: profileDetails } = useProfileDetailsQuery();

  return profileDetails?.data?.role === 'ADMIN' ? (
    <MainDashboard />
  ) : (
    <Layout>
      <Container>
        <Row>
          <p>{t('welcome')}</p>
        </Row>
      </Container>
    </Layout>
  );
};

export default Dashboard;
