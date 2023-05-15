import React from 'react'

import { Helmet } from 'react-helmet'

import TopBar from '../components/top-bar'
import Button from '../components/button'
import './cookie-confirm.css'

const CookieConfirm = (props) => {
  return (
    <div className="cookie-confirm-container">
      <Helmet>
        <title>CookieConfirm - Up2Data - Onboarding</title>
        <meta
          property="og:title"
          content="CookieConfirm - Up2Data - Onboarding"
        />
      </Helmet>
      <div className="cookie-confirm-container01">
        <TopBar menu="cookie" rootClassName="top-bar-root-class-name5"></TopBar>
        <div className="cookie-confirm-container02">
          <div className="cookie-confirm-container03">
            <div className="cookie-confirm-container04">
              <div className="cookie-confirm-container05">
                <div className="cookie-confirm-container06">
                  <div className="cookie-confirm-container07">
                    <img
                      alt="image"
                      src="/playground_assets/up2datalogo%20%5B3%5D-900h.png"
                      className="cookie-confirm-image"
                    />
                    <span className="cookie-confirm-text">Onboarding</span>
                  </div>
                  <span className="cookie-confirm-text1">
                    Monitor successfully setup!
                  </span>
                  <div className="cookie-confirm-container08">
                    <svg
                      viewBox="0 0 1024 1024"
                      className="cookie-confirm-icon"
                    >
                      <path d="M684 298q32 0 58 27t26 59v234l-150 150v128h-212v-128l-150-150v-234q0-32 26-59t58-27h2v-170h84v170h172v-170h84z"></path>
                    </svg>
                    <span className="cookie-confirm-text2">
                      Your monitor has been successfully tested and set up
                    </span>
                  </div>
                  <div className="cookie-confirm-container09">
                    <Button
                      goTo="complete"
                      icon="right"
                      text="Next"
                      rootClassName="button-root-class-name9"
                    ></Button>
                    <Button
                      goTo="cookie-more"
                      icon="more"
                      blanc="true"
                      text="Add more"
                      rootClassName="button-root-class-name10"
                    ></Button>
                  </div>
                </div>
              </div>
              <div className="cookie-confirm-container10">
                <div className="cookie-confirm-container11">
                  <div className="cookie-confirm-container12">
                    <div className="cookie-confirm-container13">
                      <span className="cookie-confirm-text3">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod
                      </span>
                      <span className="cookie-confirm-text4">
                        <span>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat,
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          At vero eos et accusam et justo duo dolores et ea
                          rebum. Stet clita kasd gubergren, no sea takimata
                          sanctus est Lorem ipsum dolor sit amet
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

export default CookieConfirm
