import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router";
import LoginPage from '../pages/Login/LoginPage.jsx';
import { HomeLoader } from "../pages/Login/Home/HomeLoader.js";
import HomeError from "../pages/Login/Home/HomeError.jsx";
import HomePage from "../pages/Login/Home/HomePage.jsx";
import Landing from "../pages/Landing/Landing.jsx";

const baseUrl = import.meta.env.VITE_REST_API_URL;

// React Router v6.4 이상에서 도입된 “Data Router” 기능
const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Landing />} >
            <Route path="login" element={<LoginPage />} />
            <Route path="home" element={<HomePage />} 
                loader={HomeLoader}
                errorElement={<HomeError />}
            />
            {/* <Route path="dashboard" element={<DashboardPage />} /> */}
        </Route>
    )
    //,{basename:baseUrl}
)

export default Router;