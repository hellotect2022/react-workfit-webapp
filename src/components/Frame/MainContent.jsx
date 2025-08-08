import styled from "styled-components";

const MainContent = ({element}) => {
    return (
        <MainWrapper>
            {element}
        </MainWrapper>
    )
}

export default MainContent;

const MainWrapper = styled.div`
    flex: 1;
`