import React from 'react';
import useAuth from '../../hooks/useAuth';
import AdminHeader from '../Admin/AdminHeader/AdminHeader';
import NavBar from '../Shared/NavBar/NavBar';
const NavBarSelector = () => {
    const { admin } = useAuth();
    return <div>{admin ? <AdminHeader /> : <NavBar />}</div>;
};

export default NavBarSelector;
