import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            sdaf
        </HeaderWrapper>
    )
}


export default Header;

const HeaderWrapper = styled.header`
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