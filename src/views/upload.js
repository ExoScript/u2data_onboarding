import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Notification from '../components/notification'
import Button from '../components/button'
import './upload.css'

import Dropzone from 'react-dropzone'
import checkFile from '../functions/fileValidation'
import { authStatus } from '../database/app.js'


const Upload = (props) => {
  const history = useHistory()
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
    <div className="upload-container">
      <Helmet>
        <title>Upload - Up2Data - Onboarding</title>
        <meta property="og:title" content="Upload - Up2Data - Onboarding" />
      </Helmet>
      <div className="upload-container01">
        <TopBar menu="upload" rootClassName="top-bar-root-class-name1"></TopBar>
        <div className="upload-container02">
          <div className="upload-container03">
            <div className="upload-container04">
              <div className="upload-container05">
                <div className="upload-container06">
                  <div className="upload-container07">
                    <div className="upload-container08">
                      <img
                        alt="image"
                        src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                        className="upload-image"
                      />
                      <span className="upload-text">Onboarding</span>
                    </div>
                    <Link to="/user-details" className="upload-navlink">
                      <svg viewBox="0 0 1024 1024" className="upload-icon">
                        <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="upload-text01">Upload your Contacts.</span>
                  <div style={{ position: "relative", cursor: "pointer" }} className="upload-container09">
                  <Dropzone
                        onDrop={async (acceptedFiles) => {
                          const file = await checkFile(acceptedFiles);
                          if (file) {
                            history.push('/upload-status');
                          }
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()} style={{ position: "absolute", zIndex: "101", height: "100%", width: "100%" }} className="upload-text12">
                            <input {...getInputProps()} />
                          </div>
                        )}
                      </Dropzone>
                    <svg viewBox="0 0 1024 1024" className="upload-icon2">
                      <path d="M469.333 614.997v281.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-281.003l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM890.411 822.101c62.037-33.835 104.576-89.685 123.051-152.491s13.013-132.779-20.821-194.816c-28.971-53.12-74.112-91.989-126.293-113.621-30.891-12.8-64.171-19.584-98.048-19.84h-22.485c-30.933-87.765-91.477-158.208-167.125-202.752-84.608-49.835-188.373-67.456-291.029-40.917s-184.875 92.245-234.752 176.853-67.456 188.373-40.917 291.029c15.872 61.312 45.781 115.627 84.267 158.421 15.744 17.536 42.752 18.944 60.245 3.2s18.944-42.752 3.2-60.245c-29.355-32.64-52.693-74.667-65.109-122.752-20.651-79.872-6.997-160.469 31.829-226.347s102.699-116.907 182.571-137.557 160.469-6.997 226.347 31.829 116.907 102.699 137.557 182.571c4.949 18.56 21.589 32 41.344 32h53.461c22.869 0.171 45.269 4.736 65.92 13.312 34.773 14.421 64.768 40.235 84.053 75.648 22.571 41.387 26.24 87.936 13.867 129.877s-40.661 79.104-82.048 101.632c-20.693 11.264-28.331 37.205-17.024 57.899s37.205 28.331 57.899 17.024z"></path>
                    </svg>
                    <div className="upload-container10">
                      <span className="upload-text02">
                        Drag and drop your files here
                      </span>
                      <span className="upload-text03">
                        Files supported: CSV, TXT, XLSX
                      </span>
                    </div>
                    <div className="upload-dragdrop"></div>
                  </div>
                  <Notification rootClassName="notification-root-class-name5"></Notification>
                  <div className="upload-container11">
                    <div style={{ position: "relative", cursor: "pointer" }} className="upload-container11">
                      <Dropzone
                        onDrop={async (acceptedFiles) => {
                          const file = await checkFile(acceptedFiles);
                          if (file) {
                            history.push('/upload-status');
                          }
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div {...getRootProps()} style={{ position: "absolute", zIndex: "100", height: "100%", width: "100%" }} className="upload-text12">
                            <input {...getInputProps()} />
                          </div>
                        )}
                      </Dropzone>
                      <Button
                        icon="folder"
                        text="Browse file"
                        rootClassName="button-root-class-name2"
                      >
                      </Button>
                    </div>
                    <Button
                      icon="download"
                      blanc="true"
                      text="Download example"
                      rootClassName="button-root-class-name3"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="upload-container12">
                <div className="upload-container13">
                  <div className="upload-container14">
                    <div className="upload-container15">
                      <span className="upload-text04">
                      Now we need the clients that you already have in your CRM
                      </span>
                      <span className="upload-text05">
                        <span>
                        Please upload a csv of your clients. Our system will then search for all related people within your clients company.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                        As soon as we have this information, we can start the tracking of your most promising future leads.
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
            <svg viewBox="0 0 877.7142857142857 1024" className="upload-icon4">
              <path d="M838.857 217.143c21.143 21.143 38.857 63.429 38.857 93.714v658.286c0 30.286-24.571 54.857-54.857 54.857h-768c-30.286 0-54.857-24.571-54.857-54.857v-914.286c0-30.286 24.571-54.857 54.857-54.857h512c30.286 0 72.571 17.714 93.714 38.857zM585.143 77.714v214.857h214.857c-3.429-9.714-8.571-19.429-12.571-23.429l-178.857-178.857c-4-4-13.714-9.143-23.429-12.571zM804.571 950.857v-585.143h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-438.857v877.714h731.429z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="upload-icon6">
              <path d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload
