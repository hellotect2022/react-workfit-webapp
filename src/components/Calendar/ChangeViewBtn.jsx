
import styled from "styled-components";
import { useState } from "react";

const ChangeViewBtn = ({calendarApi}) => {
    const [currentView, setCurrentView] = useState("dayGridMonth")

    const viewBtnClick = (viewType) => {
        setCurrentView(viewType);
        console.log('calendarApi',calendarApi)
        calendarApi?.changeView(viewType);
    }

    return (
            <ViewSwitcher>
                <ViewButton
                    $isActive={currentView === 'dayGridMonth'}
                    onClick={()=>viewBtnClick('dayGridMonth')}>
                    월간 보기
                </ViewButton>
                <ViewButton
                    $isActive={currentView === 'timeGridWeek'}
                    onClick={()=>viewBtnClick('timeGridWeek')}>
                    주간보기
                </ViewButton>
                <ViewButton
                    $isActive={currentView === 'timeGridDay'}
                    onClick={()=>viewBtnClick('timeGridDay')}>
                    일간 보기
                </ViewButton>
            </ViewSwitcher>
    )
}

const ViewSwitcher  = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 1.5rem;
`

const ViewButton  = styled.div`
    background-color: ${({ $isActive }) => ($isActive ? '#4e8cff' : '#e0e0e0')};
    color: ${({ $isActive }) => ($isActive ? '#fff' : '#333')};
    border: none;
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${({ $isActive }) => ($isActive ? '#357ae8' : '#d5d5d5')};
    }
`


export default ChangeViewBtn;