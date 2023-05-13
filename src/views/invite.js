import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Button from '../components/button'
import './invite.css'

const Invite = (props) => {
  return (
    <div className="invite-container">
      <Helmet>
        <title>Invite - Up2Data - Onboarding</title>
        <meta property="og:title" content="Invite - Up2Data - Onboarding" />
      </Helmet>
      <div className="invite-container01">
        <TopBar rootClassName="top-bar-root-class-name8"></TopBar>
        <div className="invite-container02">
          <div className="invite-container03">
            <div className="invite-container04">
              <div className="invite-container05">
                <div className="invite-container06">
                  <div className="invite-container07">
                    <div className="invite-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="invite-image"
                      />
                      <span className="invite-text">Onboarding</span>
                    </div>
                    <Link to="/cookie" className="invite-navlink">
                      <svg viewBox="0 0 1024 1024" className="invite-icon">
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="invite-text01">Successfully Invate!</span>
                  <div className="invite-container09">
                    <div className="invite-container10">
                      <svg viewBox="0 0 1024 1024" className="invite-icon2">
                        <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
                      </svg>
                      <span className="invite-text02">
                        We have successfully sent an invitation to the contact
                        person you specified.
                      </span>
                    </div>
                  </div>
                  <div className="invite-container11">
                    <Button
                      text="Next"
                      rootClassName="button-root-class-name12"
                    ></Button>
                    <Link to="/cookie-more" className="invite-navlink1">
                      <Button
                        text="Invite more"
                        rootClassName="button-root-class-name13"
                        className="invite-component2"
                      ></Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="invite-container12">
                <div className="invite-container13">
                  <div className="invite-container14">
                    <div className="invite-container15">
                      <span className="invite-text03">
                        Increase the number of scans per day.
                      </span>
                      <span className="invite-text04">
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
                <div className="invite-container16">
                  <span className="invite-text12">Download Extension</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invite
