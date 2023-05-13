import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Checkbox from '../components/checkbox'
import Notification from '../components/notification'
import Button from '../components/button'
import './new-key.css'

const NewKey = (props) => {
  return (
    <div className="new-key-container">
      <Helmet>
        <title>NewKey - Up2Data - Onboarding</title>
        <meta property="og:title" content="NewKey - Up2Data - Onboarding" />
      </Helmet>
      <div className="new-key-container01">
        <TopBar rootClassName="top-bar-root-class-name10"></TopBar>
        <div className="new-key-container02">
          <div className="new-key-container03">
            <div className="new-key-container04">
              <div className="new-key-container05">
                <div className="new-key-container06">
                  <div className="new-key-container07">
                    <div className="new-key-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="new-key-image"
                      />
                      <span className="new-key-text">Onboarding</span>
                    </div>
                    <Link to="/" className="new-key-navlink">
                      <svg viewBox="0 0 1024 1024" className="new-key-icon">
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="new-key-text01">Get a new Secret Key!</span>
                  <div className="new-key-container09">
                    <span className="new-key-text02">Client ID</span>
                    <input
                      type="text"
                      name="almeida@up2data.io"
                      className="new-key-textinput input"
                    />
                    <div className="new-key-container10"></div>
                    <div className="new-key-container11">
                      <div className="new-key-container12">
                        <Checkbox></Checkbox>
                        <span className="new-key-text03">
                          Reset Key after 60min.
                        </span>
                      </div>
                    </div>
                  </div>
                  <Notification
                    text="If we find your email address in our database, we will send you the new secret key to this email."
                    rootClassName="notification-root-class-name"
                  ></Notification>
                  <Button
                    text="Send"
                    rootClassName="button-root-class-name1"
                  ></Button>
                </div>
              </div>
              <div className="new-key-container13">
                <div className="new-key-container14">
                  <div className="new-key-container15">
                    <div className="new-key-container16">
                      <span className="new-key-text04">
                        Your Secret key is no longer available or does not work?
                      </span>
                      <span className="new-key-text05">
                        <span>
                          If you have difficulties logging in, try again with a
                          new Secret Key which has a validity of 24 hours.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Enter your client ID to receive a newly generated key
                          to your email address.
                        </span>
                        <br></br>
                        <span>
                          If you wish, you can assign the new key a validity
                          period of 60 minutes.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          After the expiration of the time, a new Secret Key
                          will be generated automatically at the next login
                          attempt and sent to your stored email.
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

export default NewKey
