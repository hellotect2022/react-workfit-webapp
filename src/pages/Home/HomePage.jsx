import React, { useState, useRef, useEffect } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import timeGridPlugin from '@fullcalendar/timegrid';
import styled from "styled-components";
import ChangeViewBtn from "../../components/Calendar/ChangeViewBtn";
import Header from "../../components/Frame/Header";
import Sidebar from "../../components/Frame/Sidebar";
import Main from "../../components/Frame/MainContent";
import CalendarComponent from "../../components/Calendar/CalendarComponent";
import TaskLogger from "../../components/Project/TaskLogger";

const HomePage = () => {
    return (
        <>
            <SidebarWrapper>
            </SidebarWrapper>
            <MainWrapper>
                <CalendarComponent/>
                {/* <TaskLogger/> */}
            </MainWrapper>
            {/* <Main element={<CalendarComponent/>}/> */}
        </>
  )
}


const BodyWrapper = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid black;
`

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

const MainWrapper = styled.div`
    flex: 1;
`

export default HomePage;