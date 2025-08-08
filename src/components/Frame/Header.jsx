import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

    const navigate = useNavigate()

    function goToProject() {
      console.log('goToProject')
      navigate("/projects")
    }

    function goToHome() {
      console.log('goToHome')
      navigate("/home")
    }

    return (
        <HeaderWrapper>
            <h3 onClick={goToHome}>XXXX</h3>
            <div style={{display:"flex", alignItems:"center", margin:"0 0 0 15px", flex:1, justifyContent:"center"}}
              onClick={goToProject}
            >
              <h3>프로젝트</h3>
            </div>
        </HeaderWrapper>
    )
}


export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  padding: 0 24px;
  //margin-bottom:7px;
  //width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  //border: 2px solid black;
  @media (max-width: 768px) {
    .header {
      padding: 0 16px;
    }
  }
  `;