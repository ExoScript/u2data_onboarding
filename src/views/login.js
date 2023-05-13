import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Checkbox from '../components/checkbox'
import Notification from '../components/notification'
import Button from '../components/button'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Up2Data - Onboarding</title>
        <meta property="og:title" content="Up2Data - Onboarding" />
      </Helmet>
      <div className="login-container01">
        <TopBar></TopBar>
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
                    Welcome, Please Login to Get started
                  </span>
                  <div className="login-container08">
                    <span className="login-text02">Client ID</span>
                    <input
                      type="text"
                      name="almeida@up2data.io"
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
                      type="text"
                      name="almeida@up2data.io"
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
                  <Notification></Notification>
                  <div className="login-container15">
                    <Button text="Login"></Button>
                    <Button text="Contact us"></Button>
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
