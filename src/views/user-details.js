import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Button from '../components/button'
import './user-details.css'

const UserDetails = (props) => {
  return (
    <div className="user-details-container">
      <Helmet>
        <title>UserDetails - Up2Data - Onboarding</title>
        <meta
          property="og:title"
          content="UserDetails - Up2Data - Onboarding"
        />
      </Helmet>
      <div className="user-details-container01">
        <TopBar rootClassName="top-bar-root-class-name"></TopBar>
        <div className="user-details-container02">
          <div className="user-details-container03">
            <div className="user-details-container04">
              <div className="user-details-container05">
                <div className="user-details-container06">
                  <div className="user-details-container07">
                    <div className="user-details-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="user-details-image"
                      />
                      <span className="user-details-text">Onboarding</span>
                    </div>
                    <Link to="/" className="user-details-navlink">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="user-details-icon"
                      >
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="user-details-text01">User Details</span>
                  <div className="user-details-container09">
                    <span className="user-details-text02">Full Name</span>
                    <input
                      type="text"
                      value="Daniel Deutsch"
                      className="user-details-textinput input"
                    />
                    <div className="user-details-container10"></div>
                  </div>
                  <div className="user-details-container11">
                    <span className="user-details-text03">Email</span>
                    <input
                      type="text"
                      value="daniel@heydata.eu"
                      className="user-details-textinput1 input"
                    />
                    <div className="user-details-container12"></div>
                  </div>
                  <div className="user-details-container13">
                    <span className="user-details-text04">Company</span>
                    <input
                      type="text"
                      value="Heydata GmbH"
                      className="user-details-textinput2 input"
                    />
                    <div className="user-details-container14"></div>
                  </div>
                  <div className="user-details-container15">
                    <span className="user-details-text05">Website</span>
                    <input
                      type="text"
                      value="https://heydata.eu"
                      className="user-details-textinput3 input"
                    />
                    <div className="user-details-container16"></div>
                  </div>
                  <Button
                    text="Next"
                    rootClassName="button-root-class-name"
                  ></Button>
                </div>
              </div>
              <div className="user-details-container17">
                <div className="user-details-container18">
                  <div className="user-details-container19">
                    <div className="user-details-container20">
                      <span className="user-details-text06">
                        Help us to keep your personal data up to date.
                      </span>
                      <span className="user-details-text07">
                        <span>
                          For future cooperation it is important to us that your
                          personal data is correct.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Therefore, we ask you to check the data you have
                          provided again and correct it if necessary.
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

export default UserDetails
