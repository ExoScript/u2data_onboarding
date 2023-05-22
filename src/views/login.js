import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Checkbox from '../components/checkbox'
import Notification from '../components/notification'
import Button from '../components/button'
import './login.css'

import {authStatus} from '../database/app.js'

const Login = (props) => {
  const history = useHistory();
  const [clientID, setClientID] = useState(
    localStorage.getItem("clientID") || ""
  );
  const [secretKey, setSecretKey] = useState(
    localStorage.getItem("secretKey") || ""
  );
  const [loadDot, setLoadDot] = useState(false);
  const [notificationBox, setNotificationBox] = useState(false);
  const [notificationTxt, setNotificationTxt] = useState();


  useEffect(() => {
    localStorage.setItem("clientID", clientID);
    localStorage.setItem("secretKey", secretKey);
    setNotificationBox(false)
  }, [clientID, secretKey]);

  const eventChange = (event) => {
    const id = event.target.id
    switch (id) {
      case 'clientID':
        setClientID(event.target.value);
        break;
      case 'secretKey':
        setSecretKey(event.target.value);
        break;
      default:
    }
  };

  const userAuth = async () => {
    if (clientID && secretKey) {
      setLoadDot(true);
      const status = await authStatus();
      setLoadDot(false);
      if (status) {
        console.log('Auth true');
        setNotificationBox(false)
        history.push('/user-details');
      } else {
        setNotificationTxt('Login not possible. Please check your Client ID and Secret Key!')
        setNotificationBox(true)
        console.log('Auth false');
      }
    } else {
      if (!clientID) {
        setNotificationTxt('Client ID is missing!')
        setNotificationBox(true)
        console.log('Client ID is missing');
      }
      if (!secretKey) {
        setNotificationTxt('Secret Key is missing!')
        setNotificationBox(true)
        console.log('Secret Key is missing');
      }
    }
  };


  return (
    <div className="login-container">
      <Helmet>
        <title>Up2Data - Onboarding</title>
        <meta property="og:title" content="Up2Data - Onboarding" />
      </Helmet>
      <div className="login-container01">
        <TopBar menu="login"></TopBar>
        <div className="login-container02">
          <div className="login-container03">
            <div className="login-container04">
              <div className="login-container05">
                <div className="login-container06">
                  <div className="login-container07">
                    <img
                      alt="image"
                      src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                      className="login-image"
                    />
                    <span className="login-text">Onboarding</span>
                  </div>
                  <span className="login-text01">
                    Welcome, Please Login to Get started!
                  </span>
                  <div className="login-container08">
                    <span className="login-text02">Client ID</span>
                    <input
                      onChange={eventChange}
                      id="clientID"
                      value={clientID}
                      type="text"
                      className="login-textinput input"
                    />
                    <div className="login-container09"></div>
                  </div>
                  <div className="login-container10">
                    <div className="login-container11">
                      <span className="login-text03">Secret Key</span>
                      <Link to="/new-key" className="login-navlink">
                        Get a new key!
                      </Link>
                    </div>
                    <input
                      onChange={eventChange}
                      id="secretKey"
                      value={secretKey}
                      type="text"
                      className="login-textinput1 input"
                    />
                    <div className="login-container12"></div>
                    <div className="login-container13">
                      <div className="login-container14">
                        <Checkbox></Checkbox>
                        <span className="login-text04">
                          Reset Secret Key on completion.
                        </span>
                      </div>
                    </div>
                  </div>
                  <Notification text={notificationTxt} isVisible={notificationBox}></Notification>
                  <div className="login-container15">
                    <div onClick={userAuth} className="button-button"><Button loading={loadDot} icon="right" text="Login"></Button></div>
                    <Button blanc="true" icon="email" goTo="contact" text="Contact us"></Button>
                  </div>
                </div>
              </div>
              <div className="login-container16">
                <div className="login-container17">
                  <div className="login-container18">
                    <div className="login-container19">
                      <span className="login-text05">
                        Good sales only comes from reliable data.
                      </span>
                      <span className="login-text06">
                        <span>
                          Get access to valuable new leads on a weekly basis,
                          helping you expand your customer base and grow your
                          business.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Improve business performance with accurate and
                          reliable CRM data to make informed decisions, drive
                          growth, and obtain high-quality customer information.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Automate processes to save time and resources, reduce
                          errors, and increase efficiency without manual labor.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
