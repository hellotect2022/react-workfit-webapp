import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Frame/Header';
import styled from 'styled-components';

function Landing() {
  const location = useLocation();

  if (location?.pathname === '/') {
      return <Navigate to='/home' />
  }
  return (
    <PageWrapper>
      <Header/>
      <BodyWrapper>
        <Outlet/>
      </BodyWrapper>
      {/* <div>
        footer
      </div> */}
      
    </PageWrapper>
  )
}

export default Landing;

// Landing 컴포넌트 전체를 감싸는 스타일
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    //border: 2px solid red
`;

const BodyWrapper = styled.div`
    display: flex;
    flex: 1;
`