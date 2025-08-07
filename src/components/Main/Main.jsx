import styled from "styled-components";

const Main = ({element}) => {
    return (
        <MainWrapper>
            {element}
        </MainWrapper>
    )
}

export default Main;

const MainWrapper = styled.div`
    flex: 1;
`