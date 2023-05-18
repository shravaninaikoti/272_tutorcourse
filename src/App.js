import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contacts from "./components/contacts";
import Login from "./components/login";
import Logout from "./components/logout";
import CreateUser from "./components/User/createUser";
import SearchUser from "./components/User/searchUser";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core"; // 'npm i @popper/core' and import jquery dependency otherwise features such as dropdown or toggle doesnt work
import "bootstrap/dist/js/bootstrap.bundle.min";

import ReactjsCourse from "./components/Courses/reactjsCourse";
import NodejsCourse from "./components/Courses/nodejsCourse";
import VuejsCourse from "./components/Courses/vuejsCourse";
import NextjsCourse from "./components/Courses/nextjsCourse";
import PythonCourse from "./components/Courses/pythonCourse";
import MLCourse from "./components/Courses/mlCourse";
import NLPCourse from "./components/Courses/nlpCourse";
import MongodbCourse from "./components/Courses/mongodbCourse";
import JavascriptCourse from "./components/Courses/javascriptCourse";
import ReactNativeCourse from "./components/Courses/reactnativeCourse";
import ListOtherUsers from "./components/User/listOtherUsers";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/createuser" element={<CreateUser />} />
        <Route path="/searchuser" element={<SearchUser />} />
        <Route path="/listOtherUsers" element={<ListOtherUsers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/reactjsCourse" element={<ReactjsCourse />} />
        <Route path="/nodejsCourse" element={<NodejsCourse />} />
        <Route path="/nextjsCourse" element={<NextjsCourse />} />
        <Route path="/vuejsCourse" element={<VuejsCourse />} />
        <Route path="/reactnativeCourse" element={<ReactNativeCourse />} />
        <Route path="/pythonCourse" element={<PythonCourse />} />
        <Route path="/mlCourse" element={<MLCourse />} />
        <Route path="/nlpCourse" element={<NLPCourse />} />
        <Route path="/mongodbCourse" element={<MongodbCourse />} />
        <Route path="/javascriptCourse" element={<JavascriptCourse />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
