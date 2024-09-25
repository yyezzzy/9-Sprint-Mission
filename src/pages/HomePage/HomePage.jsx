import "./HomePage.css";
import content1 from "../../assets/images/content1.png";
import content2 from "../../assets/images/content2.png";
import content3 from "../../assets/images/content3.png";
import Logo from "../../assets/images/logo/logo.svg";
//트위터, 페이스북, 유튜브, 인스타그램 아이콘
import twitter from "../../assets/images/logo/twitter.png";
import facebook from "../../assets/images/logo/facebook.png";
import youtube from "../../assets/images/logo/youtube.png";
import instagram from "../../assets/images/logo/instagram.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="Home">
      <header className="Header">
        <a href="/">
          <img src={Logo} alt="판다마켓 홈" width="153" />
        </a>
        <Link className="button login-btn" to="/signin">
          로그인
        </Link>
      </header>
      <main>
        <section id="hero" className="banner">
          <div className="wrapper">
            <p className="banner-title">
              일상의 모든 물건을
              <br />
              거래해 보세요
            </p>
            <a
              className="button pill-button
            "
              href="items.html"
            >
              구경하러 가기
            </a>
          </div>
        </section>

        <section className="wrapper">
          <div className="card">
            <img src={content1} alt="content1" />
            <div className="content">
              <span className="card-badge">Hot item</span>
              <div className="card-title">
                인기 상품을
                <br />
                확인해 보세요
              </div>
              <div className="card-txt">
                가장 HOT한 중고거래 물품을
                <br />
                판다 마켓에서 확인해 보세요
              </div>
            </div>
          </div>
          <div className="card">
            <img src={content2} alt="content2" />
            <div className="content">
              <span className="card-badge">Search</span>
              <div className="card-title">
                구매를 원하는
                <br />
                상품을 검색하세요
              </div>
              <div className="card-txt">
                구매하고 싶은 물품은 검색해서
                <br />
                쉽게 찾아보세요
              </div>
            </div>
          </div>
          <div className="card">
            <img src={content3} alt="content3" />
            <div className="content">
              <span className="card-badge">Register</span>
              <div className="card-title">
                판매를 원하는
                <br />
                상품을 등록하세요
              </div>
              <div className="card-txt">
                어떤 물건이든 판매하고 싶은 상품을
                <br />
                쉽게 등록하세요
              </div>
            </div>
          </div>
        </section>

        <section id="bottomBanner" className="banner">
          <div className="wrapper">
            <p className="banner-title">
              믿을 수 있는
              <br />
              판다마켓 중고거래
            </p>
          </div>
        </section>
      </main>
      <footer>
        <div className="source">©codeit - 2024</div>
        <div className="footer-inquire">
          <a href="privacy.html" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="faq.html" target="_blank" rel="noopener noreferrer">
            FAQ
          </a>
        </div>
        <div className="footer-sns">
          <a
            href="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} width="20" alt="footer" />
          </a>
          <a
            href="https://x.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} width="20" alt="footer" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} width="20" alt="footer" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} width="20" alt="footer" />
          </a>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
