import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import AccountView from 'src/views/account/AccountView';
import CustomerListView from 'src/views/customer/CustomerListView';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import ProductListView from 'src/views/product/ProductListView';
import ProductionReportView from 'src/views/productionReport';
import RegisterView from 'src/views/auth/RegisterView';
import SettingsView from 'src/views/settings/SettingsView';
import MoveItemView from 'src/views/moveItem/App';
import ERPStep from 'src/views/ERPStep';
import FreeZoneApp from 'src/views/FreeZoneApp';
import UsersListView from 'src/views/users';
import SerachReportView from 'src/views/SerachReport';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: 'customers', element: <CustomerListView /> },
      { path: 'dashboard', element: <DashboardView /> },
      { path: 'products', element: <ProductListView /> },
      { path: 'ERPStep', element: <ERPStep /> },
      { path: 'productionReport', element: <ProductionReportView /> },
      { path: 'moveItem', element: <MoveItemView /> },
      { path: 'FreeZoneApp', element: <FreeZoneApp /> },
      { path: 'SerachReport', element: <SerachReportView /> },
      { path: 'users', element: <UsersListView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
