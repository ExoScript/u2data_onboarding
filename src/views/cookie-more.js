import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Notification from '../components/notification'
import Button from '../components/button'
import './cookie-more.css'

const CookieMore = (props) => {
  return (
    <div className="cookie-more-container">
      <Helmet>
        <title>CookieMore - Up2Data - Onboarding</title>
        <meta property="og:title" content="CookieMore - Up2Data - Onboarding" />
      </Helmet>
      <div className="cookie-more-container01">
        <TopBar menu="cookie" rootClassName="top-bar-root-class-name7"></TopBar>
        <div className="cookie-more-container02">
          <div className="cookie-more-container03">
            <div className="cookie-more-container04">
              <div className="cookie-more-container05">
                <div className="cookie-more-container06">
                  <div className="cookie-more-container07">
                    <div className="cookie-more-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="cookie-more-image"
                      />
                      <span className="cookie-more-text">Onboarding</span>
                    </div>
                    <Link to="/cookie" className="cookie-more-navlink">
                      <svg viewBox="0 0 1024 1024" className="cookie-more-icon">
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="cookie-more-text01">
                    Setting up multiple monitors.
                  </span>
                  <div className="cookie-more-container09">
                    <div className="cookie-more-container10">
                      <span className="cookie-more-text02">Full Name</span>
                    </div>
                    <input
                      type="text"
                      className="cookie-more-textinput input"
                    />
                    <div className="cookie-more-container11"></div>
                  </div>
                  <div className="cookie-more-container12">
                    <div className="cookie-more-container13">
                      <span className="cookie-more-text03">Email Address</span>
                    </div>
                    <input
                      type="text"
                      className="cookie-more-textinput1 input"
                    />
                    <div className="cookie-more-container14"></div>
                  </div>
                  <Notification rootClassName="notification-root-class-name4"></Notification>
                  <Button
                    goTo="invite"
                    icon="email"
                    text="Invite"
                    rootClassName="button-root-class-name11"
                  ></Button>
                </div>
              </div>
              <div className="cookie-more-container15">
                <div className="cookie-more-container16">
                  <div className="cookie-more-container17">
                    <div className="cookie-more-container18">
                      <span className="cookie-more-text04">
                        Increase the number of scans per day.
                      </span>
                      <span className="cookie-more-text05">
                        <span>
                          By adding more LinkedIn session cookies, you increase
                          the number of possible scans per day.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          It is possible to make 150 scan requests per day per
                          session cookie.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Invite your desired contacts and benefit from faster
                          results.
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
                <div className="cookie-more-container19">
                  <span className="cookie-more-text13">Download Extension</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieMore
