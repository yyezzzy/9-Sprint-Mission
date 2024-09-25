import "../../styles/auth.css";
import "../../scripts/auth.js";
import signInLogo from "../../assets/images/logo/login_logo.svg";
import google from "../../assets/images/logo/google.png";
import kakao from "../../assets/images/logo/kakao.png";
import eyeInvisible from "../../assets/images/icons/eye-invisible.svg";
import { Link } from "react-router-dom";
export const SigninPage = () => {
  return (
    <div>
      <div className="auth-form-container">
        <div className="auth-home-wrapper login">
          <Link to="/">
            <img src={signInLogo} className="login-img" alt="판다마켓 홈" />
          </Link>
        </div>

        <form method="post" id="loginForm">
          <div className="auth-input">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="이메일을 입력해주세요"
            />
            <span id="emailError" className="error-message"></span>
          </div>
          <div className="auth-input">
            <label htmlFor="password">비밀번호</label>
            <div className="password-input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
              />
              <button
                type="button"
                className="toggle-password-button"
                aria-label="비밀번호 보기"
              >
                <img
                  src={eyeInvisible}
                  alt="비밀번호 숨김"
                  className="toggle-password-icon"
                />
              </button>
            </div>
            <span id="passwordError" className="error-message"></span>
          </div>

          <button
            disabled
            type="submit"
            className="button pill-button full-width"
          >
            로그인
          </button>

          <div className="easy-login-wrapper">
            <h3>간편 로그인하기</h3>
            <div className="easy-login-icon">
              <a href="https://www.google.com/">
                <img src={google} alt="구글 로그인" width="42" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={kakao} alt="카카오 로그인" width="42" />
              </a>
            </div>
          </div>

          <div className="auth-label">
            판다마켓이 처음이신가요? <Link to="signup">회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
