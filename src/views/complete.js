import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Notification from '../components/notification'
import Button from '../components/button'
import './complete.css'
import { update_database } from '../database/app'
import {useHistory } from 'react-router-dom'

import { authStatus } from '../database/app.js'

const Complete = (props) => {
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
  return (
    <div className="complete-container">
      <Helmet>
        <title>Complete - Up2Data - Onboarding</title>
        <meta property="og:title" content="Complete - Up2Data - Onboarding" />
      </Helmet>
      <div className="complete-container01">
        <TopBar menu="complete" rootClassName="top-bar-root-class-name6"></TopBar>
        <div className="complete-container02">
          <div className="complete-container03">
            <div className="complete-container04">
              <div className="complete-container05">
                <div className="complete-container06">
                  <div className="complete-container07">
                    <img
                      alt="image"
                      src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                      className="complete-image"
                    />
                    <span className="complete-text">Onboarding</span>
                  </div>
                  <span className="complete-text1">
                    You have been successfully set up!
                  </span>
                  
                  <div className="complete-container10">
                  <span className="login-text02">Thanks for the upload.</span>
                  <span className="login-text02">We will get back to you promptly with the results!</span>

                    <a className="complete-container10"  href="https://up2data.io">
                    {/* <a className="complete-container10" > */}

                      <div onClick={update_database} className="upload-status-container14">
                        <Button icon="check" text="Save & Finish"></Button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="complete-container11">
                <div className="complete-container12">
                  <div className="complete-container13">
                    <div className="complete-container14">
                      <span className="complete-text2">
                        Your onboarding is done!
                      </span>
                      <span className="complete-text3">
                        <span>
                          Now it is our job to provide you with highly
                          relevant leads so that you can grow faster without
                          worrying anymore of searching for eligible leads.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          We will notify you by email as soon as we have good news for you!
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
            <svg viewBox="0 0 877.7142857142857 1024" className="complete-icon">
              <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="complete-icon2">
              <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complete
