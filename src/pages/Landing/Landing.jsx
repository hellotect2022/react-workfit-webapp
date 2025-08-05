import { Navigate, Outlet, useLocation } from 'react-router-dom';

function Landing() {
  const location = useLocation();

  if (location?.pathname === '/') {
      return <Navigate to='/home' />
  }
  return <Outlet />
}

export default Landing;