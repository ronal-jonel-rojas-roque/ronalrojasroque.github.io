import React from 'react';
import Sidebar from '../components/Sidebar';
import Home from './home.page';
import About from './about.page';
import Briefcase from './briefcase.page';
import '../common/style-dashboard.css'
import Knowledge from './knowledge.page';
import Footer from '../components/footer.component';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className='content'>
                <div className="item" id="home">
                    <Home></Home>
                </div>

                <div className="item" id="about">
                    <About></About>
                </div>
                <div className="item" id="knowledge">
                    <Knowledge></Knowledge>
                </div>
                <div className="item" id="briefcase">
                    <Briefcase></Briefcase>
                </div>
                <div className="item" id="footers">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;