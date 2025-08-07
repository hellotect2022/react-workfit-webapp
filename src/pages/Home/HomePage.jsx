import React, { useState, useRef, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import styled from "styled-components";
import ChangeViewBtn from "../../components/Calendar/ChangeViewBtn";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import Main from "../../components/Main/Main";
import CalendarComponent from "../../components/Calendar/CalendarComponent";

const HomePage = () => {
    return (
        <>
        <Header/>
        <BodyWrapper>
            <Sidebar/>
            <Main element={<CalendarComponent/>}/>

        </BodyWrapper>
        
        </>
  )
}

const BodyWrapper = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid black;
`

export default HomePage;