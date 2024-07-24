import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import StudentListContent from "./StudentListContent";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Report from "./Report";
import NotFound from "./NotFound";
import LoginV2 from "./LoginV2";
import RegisterV2 from "./RegisterV2";
import Unauthorized from "./Unauthorized";
import UserModalV2 from "./UserModalV2";
import StudentData from "./StudentData";
import { useIdleTimer } from "react-idle-timer";
import { jwtDecode } from "jwt-decode";

const AppV2 = () => {
  const LIGHT_MODE = {
    bg: "white",
    title: "black",
    mainText: "#48494A",
    tableHeader: "#E8E8E8",
    tableBorder: "#D4D7D9",
    tableContent: "#48494A",
    buttonBackGround: "white",
    buttonBorder: "#D4D7D9",
    buttonText: "#48494A",
    icon: "#48494A",
    validBack: "#C8E6C9",
    validText: "#4CAF50",
    validBorder: "none",
    invalidBack: "#FFCDD2",
    invalidText: "#F44336",
    invalidBorder: "none",
    activePageBack: "rgba(255, 183, 122, 0.5)",
    activePageBorder: "none",
    activePageText: "#BB812A",
    inactivePageText: "rgba(72, 73, 74, 0.5)",
    inputText: "#48494A",
    modalBack: "white",
    radioBack: "#D4D7D9",
    radioText: "black",
  };
  const DARK_MODE = {
    bg: "#121212",
    title: "rgba(255, 255, 255, 0.8)",
    mainText: "white",
    tableHeader: "#1F1F1F",
    tableBorder: "rgba(162, 162, 162, 0.3)",
    tableContent: "rgba(255, 255, 255, 0.5)",
    buttonBackGround: "#1F1F1F",
    buttonBorder: "rgba(162, 162, 162, 0.3)",
    buttonText: "rgba(255, 255, 255, 0.4)",
    icon: "rgba(255, 255, 255, 0.4)",
    validBack: "transparent",
    validText: "rgba(76, 175, 80, 0.7)",
    validBorder: "1px solid rgba(76, 175, 80, 0.7)",
    invalidBack: "transparent",
    invalidText: "rgba(244, 67, 54, 0.7)",
    invalidBorder: "1px solid rgba(244, 67, 54, 0.7)",
    activePageBack: "rgba(255, 183, 122, 0.2)",
    activePageBorder: "2px solid rgba(162, 162, 162, 0.3)",
    activePageText: "rgba(255, 255, 255, 0.5)",
    inactivePageText: "rgba(255, 255, 255, 0.3)",
    inputText: "rgb(148, 163, 175)",
    modalBack: "rgba(0, 0, 0, 0.5)",
    radioBack: "#363535",
    radioText: "#6B6B6B",
  };
  const [currentTheme, setCurrentTheme] = useState("light");
  const [colorModeColors, setColorModeColors] = useState(LIGHT_MODE);

  const [user, setUser] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [isEditActive, setIsEditActive] = useState(false);

  const API_URL = "http://127.0.0.1:8080/api/v1";
  const [userWasModified, setUserWasModified] = useState(1);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [userWasModified]);

  const handleUserTimeout = () => {
    console.log("Checking user timeout");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const decoded = jwtDecode(user.token);
      console.log("User exists");
      console.log(`Issued at: ${decoded.iat}`);
      const expirationTime = new Date(decoded.exp * 1000);
      const now = new Date(Date.now());
      console.log("Expires at: ", expirationTime);
      console.log("Now time: ", now);
      if (now > expirationTime) {
        console.log("User timed out");
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/login";
      }
    }
  };

  const CHECK_PERIOD_MINUTES = 5;
  const TIMEOUT = CHECK_PERIOD_MINUTES * 60 * 1000;
  const DEBOUNCE_TIME = CHECK_PERIOD_MINUTES * 100;
  useIdleTimer({
    timeout: TIMEOUT,
    debounce: DEBOUNCE_TIME,
    onIdle: handleUserTimeout,
  });

  return (
    <div className="flex h-[100vh]">
      <BrowserRouter>
        <MenuBar
          colorModeColors={colorModeColors}
          setColorModeColors={setColorModeColors}
          lightMode={LIGHT_MODE}
          darkMode={DARK_MODE}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          user={user}
          setUser={setUser}
          API_URL={API_URL}
          userWasModified={userWasModified}
          setUserWasModified={setUserWasModified}
        />
        <Routes>
          <Route
            path="/"
            element={<Home user={user} colorModeColors={colorModeColors} />}
          />
          <Route
            path="/data"
            element={
              user ? (
                user.roles.includes("ROLE_ADMIN") ? (
                  <StudentListContent
                    colorModeColors={colorModeColors}
                    currentTheme={currentTheme}
                    studentId={studentId}
                    setStudentId={setStudentId}
                    isEditActive={isEditActive}
                    setIsEditActive={setIsEditActive}
                    user={user}
                    API_URL={API_URL}
                  />
                ) : (
                  <StudentData colorModeColors={colorModeColors} user={user} />
                )
              ) : (
                <Unauthorized colorModeColors={colorModeColors} />
              )
            }
          />
          <Route
            path="/report"
            element={
              user ? (
                <Report colorModeColors={colorModeColors} />
              ) : (
                <Unauthorized colorModeColors={colorModeColors} />
              )
            }
          />
          <Route
            path="/login"
            element={
              <LoginV2
                colorModeColors={colorModeColors}
                API_URL={API_URL}
                userWasModified={userWasModified}
                setUserWasModified={setUserWasModified}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterV2 colorModeColors={colorModeColors} API_URL={API_URL} />
            }
          />
          <Route
            path="/unauthorized"
            element={<Unauthorized colorModeColors={colorModeColors} />}
          />
          <Route
            path="*"
            element={<NotFound colorModeColors={colorModeColors} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppV2;
