import styled from "styled-components";

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <h3>📌 Navigator</h3>
            <ul>
                <li>📁 내 프로젝트</li>
                <li>📋 태스크 목록</li>
                <li>🕒 오늘 일정</li>
            </ul>
        </SidebarWrapper>
    )
}

export default Sidebar;


const SidebarWrapper = styled.div`
  width: 180px;
  background-color: #f7f9fc;
  padding: 1rem;
  border-right: 1px solid #ddd;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 0.5rem 0;
      font-size: 0.9rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;