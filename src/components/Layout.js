import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({name}) {
  return (
    <>
      <Navbar name={name} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;