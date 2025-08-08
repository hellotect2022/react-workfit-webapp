import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router";
import LoginPage from '../pages/Login/LoginPage.jsx';
import { HomeLoader } from "../pages/Home/HomeLoader.js";
import HomeError from "../pages/Home/HomeError.jsx";
import HomePage from "../pages/Home/HomePage.jsx";
import Landing from "../pages/Landing/Landing.jsx";
import ProjectsPage from "../pages/Project/ProjectsPage.jsx";

const baseUrl = import.meta.env.VITE_REST_API_URL;

// React Router v6.4 이상에서 도입된 “Data Router” 기능
const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
        {/* 로그인 페이지는 헤더가 없는 독립적인 라우트로 분리한다.*/}
        <Route path="login" element={<LoginPage />} />

        <Route path="/" element={<Landing />} >
            
            <Route path="home" element={<HomePage />} 
                loader={HomeLoader}
                errorElement={<HomeError />}
            />
            <Route path="projects" element={<ProjectsPage />} 
                loader={null}
                errorElement={null}
            />
            {/* <Route path="dashboard" element={<DashboardPage />} /> */}
        </Route>
        </>
    )
    //,{basename:baseUrl}
)

export default Router;