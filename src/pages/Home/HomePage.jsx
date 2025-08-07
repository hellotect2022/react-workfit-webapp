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

const HomePage = () => {
    const [showModal, setShowModal] = useState(false)
    const calendarRef = useRef(null);
    const [calendarApi, setCalendarApi] = useState(null);

    const [event, setEvent] = useState([
        { 
            title: '회의3', 
            start: new Date('2025-08-07'),
            end: new Date('2025-08-09'),
            backgroundColor: '#ffe7ba',   // ✅ 배경색
            borderColor:"red",
            textColor: '#000000',         // ✅ 글자색
            editable: true,               // ✅ 드래그 가능 여부 (일정 단위)
            allDay: false,
            extendedProps: {
                location: '회의실 A',
                host: '두현',
                customFlag: true,
                description: "아무것도 하지 않고 그냥 놀고 싶다 ㅅㅂ"
            }
            
        },
        { 
            title: '회의', 
            start: new Date('2025-08-08'),
            end: new Date('2025-08-09'),
            backgroundColor: '#ff9f89',   // ✅ 배경색
            borderColor:"red",
            textColor: '#000000',         // ✅ 글자색
            editable: true,               // ✅ 드래그 가능 여부 (일정 단위)
            allDay: false,
            extendedProps: {
                location: '회의실 A',
                host: '두현',
                customFlag: true,
                description: "아무것도 하지 않고 그냥 놀고 싶다 ㅅㅂ"
            }
            
        },
        { 
            title: '회의2', 
            start: '2025-08-08',
            end: '2025-08-08',
            backgroundColor: '#ff9f89',   // ✅ 배경색
            borderColor: '#ff9f89',       // ✅ 테두리색 (선택)
            textColor: '#000000',         // ✅ 글자색
            editable: true,               // ✅ 드래그 가능 여부 (일정 단위)
            allDay: false,
            extendedProps: {
                location: '회의실 B',
                host: '준성',
                customFlag: true,
                description: "점심먹구 빈둥빈둥"
            }
        }
    
    ])

    const [modalData, setModalData] = useState({title:""})

    useEffect(()=>{
       //setEvent(prev => [...(prev || []), { title: 'event 1', date: '2025-08-09' }]) 
       if (calendarRef.current) {
        setCalendarApi(calendarRef.current.getApi())
       }
    },[])

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    const clickEvent = (arg) => {
        setShowModal(prev=>!prev);
        console.log('click', arg);
        setModalData({
            title : arg.title,
            extendedProps: arg.extendedProps
        })


    }

    function renderEventContent(eventInfo) {
        //console.log('eventInfo',eventInfo)
        return(
            <div onClick={()=>clickEvent(eventInfo.event)} style={{ backgroundColor: eventInfo.backgroundColor }}>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
            </div>
        )
    }

    function eventDrop(info) {
        console.log('이벤트가 옮겨졌습니다.',info.event)
    }

    function closeModal() {
        setShowModal(false)
    }

    // 🟡 View 변경 함수
    const changeView = (viewName) => {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.changeView(viewName);
    };

    //timeGridWeek. dayGridMonth, timeGridDay

    return (
        <>
        <Header/>
        <BodyWrapper>
            <Sidebar/>
            <Main element={(<div>hello gg</div>)}/>


        </BodyWrapper>
        {/* <CalendarWrapper>
            <ChangeViewBtn calendarApi={calendarApi}/>
            <FullCalendar
                ref={calendarRef} // 🟢 ref 등록
                plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                weekends={true}
                editable={true}
                eventDisplay
                events={event}
                dateClick={handleDateClick}
                eventContent={renderEventContent}
                eventDrop={eventDrop}
                eventResize={(info) => {
                    console.log('Duration changed:', info.event.end);
                }}
            />
        </CalendarWrapper>
        {showModal && (
            <Overlay onClick={closeModal}>
                <TestModal>
                    <h3>{modalData.title}</h3>
                    <br/>
                    {modalData.extendedProps &&
                        Object.entries(modalData.extendedProps).map(([key, value]) => (
                            <div key={key}>
                            <strong>{key}</strong>: {String(value)}
                            </div>
                        ))
                    }
                    
                </TestModal>
            </Overlay>
        )} */}
        </>
  )
}

const BodyWrapper = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid black;
`


const CalendarWrapper = styled.div`
    margin: auto;
    width: 80%;
    height: 90vh;
    overflow-y: auto;
    /* 스크롤 바 숨기기 (크로스 브라우저) */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE, Edge */

    //border: 2px solid black;

`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* 매우 높은 값 */
`

const TestModal = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    min-width: 300px;
    min-height: 150px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    z-index: 10000; /* 더 위로 */
`

export default HomePage;