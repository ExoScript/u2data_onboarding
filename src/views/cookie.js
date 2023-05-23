import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Notification from '../components/notification'
import Button from '../components/button'
import './cookie.css'
import { authStatus } from '../database/app.js'

const Cookie = (props) => {
  const history = useHistory();
  new Promise(async function (resolve) {
    const status = await authStatus({check:true});
    if (status) {
      console.log(1);
    } else {
      history.push('/');
      console.log(2);
    }
  });

  const [sessionCookie, setSessionCookie] = useState(
    localStorage.getItem("sessionCookie") || ""
  );
  useEffect(() => {
    localStorage.setItem("sessionCookie", sessionCookie);
  }, [sessionCookie]);

  const eventChange = (event) => {
    setSessionCookie(event.target.value)
  };

  const test = ()=>{
    fetch(url, {
      method: 'POST',
      body: formData
  })
      .then(response => response.text())
      .then(data => {
          console.log(data)
      })
      .catch(error => console.error(error));
  }
  return (
    <div className="cookie-container">
      <Helmet>
        <title>Cookie - Up2Data - Onboarding</title>
        <meta property="og:title" content="Cookie - Up2Data - Onboarding" />
      </Helmet>
      <div className="cookie-container01">
        <TopBar menu="cookie" rootClassName="top-bar-root-class-name4"></TopBar>
        <div className="cookie-container02">
          <div className="cookie-container03">
            <div className="cookie-container04">
              <div className="cookie-container05">
                <div className="cookie-container06">
                  <div className="cookie-container07">
                    <div className="cookie-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="cookie-image"
                      />
                      <span className="cookie-text">Onboarding</span>
                    </div>
                    <Link to="/favorite" className="cookie-navlink">
                      <svg viewBox="0 0 1024 1024" className="cookie-icon">
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="cookie-text1">Setup your Monitor.</span>
                  <div className="cookie-container09">
                    <div className="cookie-container10">
                      <span className="cookie-text2">
                        LinkedIn Session Cookie
                      </span>
                      <Link
                        to="/cookie-explication"
                        className="cookie-navlink1"
                      >
                        ?
                      </Link>
                    </div>
                    <input
                      onChange={eventChange}
                      value={sessionCookie}
                      type="text"
                      className="cookie-textinput input"
                    />
                    <div className="cookie-container11"></div>
                  </div>
                  <Notification rootClassName="notification-root-class-name3"></Notification>
                  <div className="cookie-container12">
                    <Button
                      goTo="complete"
                      icon="right"
                      text="Next"
                      rootClassName="button-root-class-name7"
                    ></Button>
                    {/* <Button
                    onClick={test}
                      goTo="cookie-more"
                      icon="more"
                      blanc="true"
                      text="Invite"
                      rootClassName="button-root-class-name8"
                    ></Button> */}
                  </div>
                </div>
              </div>
              <div className="cookie-container13">
                <div className="cookie-container14">
                  <div className="cookie-container15">
                    <div className="cookie-container16">
                      <span className="cookie-text3">
                      Your LinkedIn session cookie.
                      </span>
                      <span className="cookie-text4">
                      To automate actions on your behalf, 
                      Up2Data connects to your LinkedIn account using your session cookie.
                      </span>
                      <span className="cookie-text5">
                      Every time you log into LinkedIn on your browser, 
                      a new cookie is created for that "session".
                      </span>
                      <span className="cookie-text6">
                      If you log out or you get disconnected, the cookie expires.
                      </span>
                      <span className="cookie-text7">
                      Download the extension to automatically read your LinkedIn 
                      session cookie and update it when it changes.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cookie-container17">
                  <span className="cookie-text8">Download Extension</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cookie
