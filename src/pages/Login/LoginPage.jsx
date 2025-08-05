import { useState } from "react";
import "./LoginPage.css";
import RestApiClient from "@/restApi/RestApiClient";
import { Outlet, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = () => {
    setLoading(true);
    RestApiClient.login(id,password)
    .then(response => {
      console.log("Login successful:", response);
      // 로그인 성공 후 처리 (예: 토큰 저장, 리다이렉트 등)
      alert("로그인 성공!");
      // 예시: 로컬 스토리지에 토큰 저장
      localStorage.setItem("token", response.token);
      // 예시: 대시보드 페이지로 리다이렉트
      Navigate("/home");

    }).catch(error => {
      console.error("Login failed:", error);
        setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    }).finally(() => {
      setLoading(false);
    });



    // setError("");
    // setTimeout(() => {
    //   if (id === "admin" && password === "1234") {
    //     alert("로그인 성공!");
    //   } else {
    //     setError("아이디 또는 비밀번호가 올바르지 않습니다.");
    //   }
    //   setLoading(false);
    // }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-logo">WORK FIT</div>
      <p className="text-gray-600 mb-6">건강한 직장생활의 시작, WORK FIT</p>
      <div className="login-box">
        <label>아이디</label>
        <input
          type="text"
          className="login-input"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>비밀번호</label>
        <input
          type="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button
          className="login-button"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "로그인 중..." : "로그인"}
        </button>
        <div className="login-links">
          {/* <a href=\"#\">비밀번호 찾기</a>
          <a href=\"#\">회원가입</a> */}
        </div>
      </div>
      <div className="auto-login">
        <input type="checkbox" id="autoLogin" />
        <label htmlFor="autoLogin"> 자동 로그인</label>
      </div>
      <Outlet />
    </div>
  );
}
