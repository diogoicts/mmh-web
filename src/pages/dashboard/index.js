import React from 'react';

import Layout from '../../components/layout'
import { Container, MainBody, SideHistory } from './styles';
import DashboardHeader from '../../components/dashboard/dashboardHeader';
import AmountCollected from '../../components/dashboard/amountCollected'
import DashboardHistory from '../../components/dashboard/dashboardHistory';

const Dashboard = () => {
    return (
        <Layout>
            <Container>

                <MainBody>
                    <DashboardHeader />
                    <AmountCollected />
                </MainBody>

                <SideHistory>
                    <DashboardHistory />
                </SideHistory>

            </Container>
        </Layout>
    )
}

export default Dashboard;
