import React from "react";
import {Switch, Route, Link, Router} from "react-router-dom";
import {Layout, Typography, Space} from "antd";
import {Navbar} from "./components/";
import useRoutes from "./routes";
import './App.css'


const App = () => {
    const routes = useRoutes();
    return (
        <div className='app'>
            <div className='navbar'>
            <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className="routes">
                        {routes}
                    </div>
                </Layout>
                <div className='footer' >
                     <Typography.Title level={5} style={{color:'white', textAlign:"center"}}>
                         Cryptoverse <br/>
                         All rights reserved
                     </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>


            </div>

        </div>
    );
}
export default App