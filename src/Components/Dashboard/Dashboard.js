import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import DashboardHeader from '../Shared/DashboardHeader/DashboardHeader';
import AddProduct from './AddProduct/AddProduct';
import AddReview from './AddReview/AddReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProducts from './ManageProducts/ManageProducts';

import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import Sidebar from './Sidebar/Sidebar';
import './Dashboard.css'
import AdminRoute from '../Authentications/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="relative md:ml-64 bg-blueGray-100">

                <DashboardHeader></DashboardHeader>
                <div className="px-4 md:px-10 mx-auto w-full">
                    <Switch>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/review`}>
                            <AddReview></AddReview>
                        </Route>
                        <AdminRoute path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;