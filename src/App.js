/** @jsx jsx */

import './App.css';
import { css, jsx } from '@emotion/core';
import logo from './images/logo-metal-gradient.svg';
import google from './images/google-play-store-button.svg';
import apple from './images/app-store-button.svg';
import firstPhone from './images/first-phone.png';
import pop from './images/pop.svg';
import dollar from './images/dollar.svg';
import free from './images/free.svg';
import phoneTwo from './images/phone-two.png';
import phoneThree from './images/phone-three.png';
import phoneFour from './images/phone-four.png';
import phoneFive from './images/phone-five.png';
import topBorder from './images/top-border.svg';
import bottomBorder from './images/bottom-border.svg';
import map from './images/map.png';
import appleWhite from './images/apple-white.svg';
import facebook from './images/facebook.svg';
import googleWhite from './images/google-white.svg';
import instagram from './images/instagram.svg';
import logoWhite from './images/logo-white.svg';
import reddit from './images/reddit.svg';
import telegram from './images/telegram.svg';
import twitter from './images/twitter.svg';

const headerStyle = css`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
  height: 100px;
  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #000000;
    margin-left: 25px;
    margin-right: 25px;
  }
  button {
    padding: 15px 30px;
    background-color: black;
    border-radius: 40px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }
`;
const outterContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const containerStyle = css`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
  text-align: -webkit-center;

  h1 {
    font-size: 59px;
    text-align: center;
    font-weight: 700;
    margin-top: 10px;
  }
  p {
    font-size: 28px;
    font-weight: 400;
    color: #9b9b9b;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const logoStyle = css`
  width: 98px;
`;

const firstPhoneStyle = css`
  max-width: 510px;
  margin-bottom: 30px;
`;

const secondPhoneStyle = css`
  max-width: 700px;
  margin-bottom: -180px;
  position: relative;
  z-index: 1;
`;

const otherPhoneStyle = css`
  max-width: 800px;
`;

const secndBlock = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 190px;
`;

const smallBlox = css`
  border-radius: 40px;
  box-shadow: 0 4px 4px 0 rgba(15, 15, 15, 0.1),
    0 6px 10px 0 rgba(15, 15, 15, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin-top: 30px;
  width: 680px;
  height: 140px;

  p {
    font-size: 25px;
    font-weight: 400;
    color: #9b9b9b;
    text-align: center;
    margin: 5px;
  }

  h3 {
    font-size: 26px;
    font-weight: 700;
    margin: 5px;
  }
`;

const smallBloxText = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 2;
`;

const smallLogos = css`
  max-width: 90px;
  max-height: 90px;
  flex-grow: 1;
  padding: 25px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const gradientContainer = css`
  background-image: linear-gradient(#4e03dd, #f94e6c calc(75%), #f67736);
  width: 100vw;

  h1 {
    margin-top: 200px;
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
`;
const bottomBorderStyle = css`
  max-width: 100vw;
  margin-bottom: -5px;
  margin-top: -460px;
`;

const storeButtons = css`
  height: 65px;
  margin: 20px;
`;

const thidrBlock = css`
  h1 {
    margin-top: 180px;
  }
`;

const firstFooterStyle = css`
  background-color: black;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    margin: 180px 170px 90px 170px;
  }
`;

const secondFooterStyle = css`
  background-color: black;
  color: white;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 100px 0px 200px 0px;
  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    margin-left: 25px;
    margin-right: 25px;
  }
  p {
    text-align: right;
  }
`;

const footerLinks = css`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  a {
    margin: 10px;
  }
`;

const footerLogos = css`
  max-width: 30px;
  margin: 15px;
`;

const borderImg = css`
  max-width: 100vw;
`;

function App() {
  return (
    <div>
      <div>
        <header css={headerStyle}>
          <img css={logoStyle} src={logo} alt="" />
          <nav>
            <a href="#a">Home</a>
            <a href="#a">About</a>
            <a href="#a">Blog</a>
            <a href="#a">Jobs</a>
          </nav>
          <button>Download</button>
        </header>
        <div css={outterContainer}>
          <div css={containerStyle}>
            <div css={containerStyle}>
              <h1>
                Make money better by using <br /> crypto.
              </h1>
              <img css={firstPhoneStyle} src={firstPhone} alt="" />
              <a href="#a">
                <img css={storeButtons} src={apple} alt="apple" />
                <img css={storeButtons} src={google} alt="google" />
              </a>
            </div>
            <div css={secndBlock}>
              <h1>Earn. Send. Use.</h1>
              <p>
                Use Metal Pay to buy MTL and other cryptocurrencies to <br />{' '}
                use in real-life.
              </p>
              <div css={smallBlox}>
                <div css={smallLogos}>
                  <img src={pop} alt="pop" />
                </div>
                <div css={smallBloxText}>
                  <h3>We'll pay you for paying.</h3>
                  <p>Send money. Earn money. It's that easy.</p>
                </div>
              </div>
              <div css={smallBlox}>
                <div css={smallLogos}>
                  <img src={dollar} alt="dollar" />
                </div>
                <div css={smallBloxText}>
                  <h3>Metal Pay is the best way to send money.</h3>
                  <p>Paying your friends is fun and instant.</p>
                </div>
              </div>
              <div css={smallBlox}>
                <div css={smallLogos}>
                  <img src={free} alt="free" />
                </div>
                <div css={smallBloxText}>
                  <h3>Sending money costs nothing.</h3>
                  <p>Pay anyone, anytime, for free</p>
                </div>
              </div>
            </div>
            <div>
              <h1>Make money better.</h1>
              <p>
                We've completely rethought the payment experience by making it
                simple, fun, free, and rewarding.
              </p>
              <img src={phoneTwo} css={secondPhoneStyle} alt="phone two" />
            </div>
            <div css={gradientContainer}>
              <div css={containerStyle}>
                <img css={borderImg} src={topBorder} alt="top border" />
                <h1>Pay people how you want through Metal Pay.</h1>
                <p>
                  Pay instantly using your cash balance, linked bank account, or
                  by sending cryptocurrency.
                </p>
                <img
                  src={phoneThree}
                  css={secondPhoneStyle}
                  alt="phone three"
                />
              </div>
              <div css={containerStyle}>
                <h1>Get paid when you Pay.</h1>
                <p>
                  You’ll earn crypto in the form of Metal, our native currency,
                  and soon you’ll be able to earn many more currencies.
                </p>
                <img css={secondPhoneStyle} src={phoneTwo} alt="phone four" />
              </div>
              <img
                css={bottomBorderStyle}
                src={bottomBorder}
                alt="bottom border"
              />
            </div>
            <div css={thidrBlock}>
              <h1>What can I do with MTL?</h1>
              <p>
                MTL is made for everyday use, so cash it out to your bank, pay
                someone with it, or save it and watch it grow.
              </p>
              <img src={phoneFour} css={otherPhoneStyle} alt="phone five" />
            </div>
            <div css={thidrBlock}>
              <h1>Discover and learn about trends in crypto.</h1>
              <p>
                Through the Marketplace, you can buy and sell over 30
                cryptocurrencies directly from your FDIC-insured cash balance.
              </p>
              <img src={phoneFive} css={otherPhoneStyle} alt="phone six" />
            </div>
            <div css={thidrBlock}>
              <h1>See where we're available.</h1>
              <p>
                We’re currently available in these states, with the rest to
                follow soon. Check back to find out when we launch in your
                state.
              </p>
              <img src={map} css={otherPhoneStyle} alt="map" />
            </div>
          </div>
          <div css={firstFooterStyle}>
            <h1>
              Ready to download your
              <br /> new favorite digital bank <br /> app?
            </h1>
            <div>
              <img css={storeButtons} src={appleWhite} alt="apple white" />
              <img css={storeButtons} src={googleWhite} alt="google white" />
            </div>
          </div>
        </div>

        <footer css={firstFooterStyle}>
          <div css={secondFooterStyle}>
            <img css={logoStyle} src={logoWhite} alt="logo white" />
            <div css={footerLinks}>
              <a href="#a">Home</a>
              <a href="#a">About</a>
              <a href="#a">Blog</a>
            </div>
            <div css={footerLinks}>
              <a href="#a">Support</a>
              <a href="#a">Contact</a>
              <a href="#a">Jobs</a>
            </div>
            <div css={footerLinks}>
              <a href="#a">Terms</a>
              <a href="#a">Privacy</a>
            </div>
            <div>
              <div>
                <img css={footerLogos} src={twitter} alt="twitter" />
                <img css={footerLogos} src={instagram} alt="instagram" />
                <img css={footerLogos} src={facebook} alt="facebook" />
                <img css={footerLogos} src={reddit} alt="reddit" />
                <img css={footerLogos} src={telegram} alt="telegram" />
                <div>
                  <p>
                    © 2020 Metallicus Inc. <br /> All Rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
