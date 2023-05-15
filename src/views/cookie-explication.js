import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Button from '../components/button'
import './cookie-explication.css'

const CookieExplication = (props) => {
  return (
    <div className="cookie-explication-container">
      <Helmet>
        <title>CookieExplication - Up2Data - Onboarding</title>
        <meta
          property="og:title"
          content="CookieExplication - Up2Data - Onboarding"
        />
      </Helmet>
      <div className="cookie-explication-container01">
        <TopBar menu="cookie" rootClassName="top-bar-root-class-name9"></TopBar>
        <div className="cookie-explication-container02">
          <div className="cookie-explication-container03">
            <div className="cookie-explication-container04">
              <div className="cookie-explication-container05">
                <div className="cookie-explication-container06">
                  <div className="cookie-explication-container07">
                    <div className="cookie-explication-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="cookie-explication-image"
                      />
                      <span className="cookie-explication-text">
                        Onboarding
                      </span>
                    </div>
                  </div>
                  <span className="cookie-explication-text01">
                    How to access your LinkedIn Session Cookie.
                  </span>
                  <div className="cookie-explication-container09">
                    <span className="cookie-explication-text02">
                      In Google Chrome
                    </span>
                    <div className="cookie-explication-container10">
                      <div className="cookie-explication-container11">
                        <span className="cookie-explication-text03">1</span>
                      </div>
                      <span className="cookie-explication-text04">
                        {' '}
                        Open a new tab and visit https://www.LinkedIn.com
                      </span>
                    </div>
                    <div className="cookie-explication-container12">
                      <div className="cookie-explication-container13">
                        <div className="cookie-explication-container14">
                          <span className="cookie-explication-text05">2</span>
                        </div>
                        <span className="cookie-explication-text06">
                          <span>
                            Right-click anywhere on the page and click on
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="cookie-explication-text08">
                            Inspect
                          </span>
                          <span>.</span>
                        </span>
                      </div>
                      <img
                        src="/playground_assets/6082a0c7d24ee50910285f87_screen%20shot%202021-04-23%20at%208.25.47%20pm-900h.png"
                        alt="image"
                        className="cookie-explication-image1"
                      />
                    </div>
                    <div className="cookie-explication-container15">
                      <div className="cookie-explication-container16">
                        <div className="cookie-explication-container17">
                          <span className="cookie-explication-text10">3</span>
                        </div>
                        <span className="cookie-explication-text11">
                          <span>
                            You&apos;ll have the console open up for you. Switch
                            to
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="cookie-explication-text13">
                            Applications
                          </span>
                          <span> tab.</span>
                        </span>
                      </div>
                      <img
                        src="/playground_assets/6082a10bb278873755005598_file-kryjrgfapl-900h.png"
                        alt="image"
                        className="cookie-explication-image2"
                      />
                    </div>
                    <div className="cookie-explication-container18">
                      <div className="cookie-explication-container19">
                        <div className="cookie-explication-container20">
                          <span className="cookie-explication-text15">4</span>
                        </div>
                        <span className="cookie-explication-text16">
                          <span>
                            Then scroll down on the left side. Expand on the
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="cookie-explication-text18">
                            Cookies
                          </span>
                          <span>
                            {' '}
                            option, you&apos;ll see
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                          <span className="cookie-explication-text20">
                            www.linkedin.com
                          </span>
                        </span>
                      </div>
                      <img
                        src="/playground_assets/6082a1552f5d4391c26b56b2_file-3txvklvdxv-400h.png"
                        alt="image"
                        className="cookie-explication-image3"
                      />
                    </div>
                    <div className="cookie-explication-container21">
                      <div className="cookie-explication-container22">
                        <span className="cookie-explication-text21">5</span>
                      </div>
                      <span className="cookie-explication-text22">
                        <span>
                          From there you need to find the
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className="cookie-explication-text24">li_at</span>
                        <span> value.</span>
                      </span>
                    </div>
                    <span className="cookie-explication-text26">
                      <span>
                        All you need to do is copy that Value and head over to
                        your U2Data Account and paste the value.
                      </span>
                      <br></br>
                    </span>
                  </div>
                  <Link to="/cookie" className="cookie-explication-navlink">
                    <Button
                      icon="left"
                      rootClassName="button-root-class-name14"
                      text="Back"
                      className="cookie-explication-component1"
                    ></Button>
                  </Link>
                </div>
              </div>
              <div className="cookie-explication-container23">
                <div className="cookie-explication-container24">
                  <div className="cookie-explication-container25">
                    <div className="cookie-explication-container26">
                      <span className="cookie-explication-text29">
                        Your LinkedIn session cookie.
                      </span>
                      <span className="cookie-explication-text30">
                        To automate actions on your behalf, PhantomBuster
                        connects to your LinkedIn account using your session
                        cookie.
                      </span>
                      <span className="cookie-explication-text31">
                        Every time you log into LinkedIn on your browser, a new
                        cookie is created for that &quot;session.&quot;
                      </span>
                      <span className="cookie-explication-text32">
                        If you log out or are disconnected, the cookie expires.
                      </span>
                      <span className="cookie-explication-text33">
                        Download the extension to automatically read your
                        LinkedIn session cookie and update it when it changes.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="cookie-explication-container27">
                  <span className="cookie-explication-text34">
                    Download Extension
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieExplication
