import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Notification from '../components/notification'
import Button from '../components/button'
import './upload-status.css'
import { authStatus } from '../database/app.js'



const UploadStatus = (props) => {
  const history = useHistory();
  new Promise(async function (resolve) {
    const status = await authStatus();
    if (status) {
      console.log(1);
    } else {
      history.push('/');
      console.log(2);
    }
  });

  const fileResult = JSON.parse(localStorage.getItem("fileResult"))
  let statusTxt = ''
  let downloadStatus = false

  if (fileResult.failed >= 1) {
    downloadStatus = true
    statusTxt = `${fileResult.failed} contacts detected as incorrect. Please edit your file and upload it again.`
  }
  if (fileResult.failed == 1) {
    downloadStatus = true
    statusTxt = `${fileResult.failed} contact detected as incorrect. Please edit your file and upload it again.`
  }
  if (fileResult.failed == 0) {
    downloadStatus = false
    statusTxt = `All their contact are fully verified. No data errors were found.`
  }

  return (
    <div className="upload-status-container">
      <Helmet>
        <title>UploadStatus - Up2Data - Onboarding</title>
        <meta
          property="og:title"
          content="UploadStatus - Up2Data - Onboarding"
        />
      </Helmet>
      <div className="upload-status-container01">
        <TopBar menu="status" rootClassName="top-bar-root-class-name2"></TopBar>
        <div className="upload-status-container02">
          <div className="upload-status-container03">
            <div className="upload-status-container04">
              <div className="upload-status-container05">
                <div className="upload-status-container06">
                  <div className="upload-status-container07">
                    <div className="upload-status-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="upload-status-image"
                      />
                      <span className="upload-status-text">Onboarding</span>
                    </div>
                    <Link to="/upload" className="upload-status-navlink">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="upload-status-icon"
                      >
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="upload-status-text01">Uploads Status.</span>
                  <div className="upload-status-container09">
                    <div className="upload-status-container10">
                      <span className="upload-status-text02">{fileResult.success}</span>
                      <span className="upload-status-text03">/</span>
                      <span className="upload-status-text04">{fileResult.success + fileResult.failed}</span>
                    </div>
                    <div className="upload-status-container11">
                      <div className="upload-status-container12"></div>
                      <div className="upload-status-container13"></div>
                    </div>
                  </div>
                  <Notification
                    isVisible
                    text={statusTxt}
                    downloadStatus={downloadStatus}
                    button_text="Download failed contacts!"
                    rootClassName="notification-root-class-name1"
                  ></Notification>
                  <div className="upload-status-container14">
                      <Button
                        goTo="favorite"
                        icon="right"
                        text="Save & Next"
                        rootClassName="button-root-class-name4"
                      >
                      </Button>
                    <Button
                      goTo="upload"
                      icon="upload"
                      blanc="true"
                      text="New Upload"
                      rootClassName="button-root-class-name5"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="upload-status-container15">
                <div className="upload-status-container16">
                  <div className="upload-status-container17">
                    <div className="upload-status-container18">
                      <span className="upload-status-text05">
                        Your uploaded document has been fully checked.
                      </span>
                      <span className="upload-status-text06">
                        <span>
                          We have made a preliminary check to detect incorrect
                          data to give you the opportunity to make a correction.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          If a correction is necessary, download the result to
                          improve your data.
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
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="upload-status-icon2"
            >
              <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="upload-status-icon4">
              <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadStatus
