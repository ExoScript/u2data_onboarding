import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './top-bar.css'

const TopBar = (props) => {
  const [menu, setMenu] = useState('details')
  const [Language, setLanguage] = useState('English')
  return (
    <div className={`top-bar-top-bar ${props.rootClassName} `}>
      <a
        href="https://up2data.io"
        target="_blank"
        rel="noreferrer noopener"
        className="top-bar-link"
      >
        <div className="top-bar-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="top-bar-image"
          />
          <span className="top-bar-text">{props.text}</span>
        </div>
      </a>
      <div className="top-bar-menu">
        {menu === 'login' && (
          <div className="top-bar-login">
            <div className="top-bar-container001">
              <div className="top-bar-container002">
                <div className="top-bar-container003"></div>
                <div className="top-bar-container004">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container005"></div>
              </div>
              <span className="top-bar-text01">Details</span>
            </div>
            <div className="top-bar-container006">
              <div className="top-bar-container007">
                <div className="top-bar-container008"></div>
                <div className="top-bar-container009">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon02">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container010"></div>
              </div>
              <span className="top-bar-text02">Upload</span>
            </div>
            <div className="top-bar-container011">
              <div className="top-bar-container012">
                <div className="top-bar-container013"></div>
                <div className="top-bar-container014">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon04">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container015"></div>
              </div>
              <span className="top-bar-text03">Status</span>
            </div>
            <div className="top-bar-container016">
              <div className="top-bar-container017">
                <div className="top-bar-container018"></div>
                <div className="top-bar-container019">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon06">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container020"></div>
              </div>
              <span className="top-bar-text04">Favorit</span>
            </div>
            <div className="top-bar-container021">
              <div className="top-bar-container022">
                <div className="top-bar-container023"></div>
                <div className="top-bar-container024">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon08">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container025"></div>
              </div>
              <span className="top-bar-text05">Cookie</span>
            </div>
          </div>
        )}
        {menu === 'details' && (
          <div className="top-bar-details">
            <div className="top-bar-container026">
              <div className="top-bar-container027">
                <div className="top-bar-container028"></div>
                <div className="top-bar-container029">
                  <span className="top-bar-text06">1</span>
                </div>
                <div className="top-bar-container030"></div>
              </div>
              <span className="top-bar-text07">Details</span>
            </div>
            <div className="top-bar-container031">
              <div className="top-bar-container032">
                <div className="top-bar-container033"></div>
                <div className="top-bar-container034">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon10">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container035"></div>
              </div>
              <span className="top-bar-text08">Upload</span>
            </div>
            <div className="top-bar-container036">
              <div className="top-bar-container037">
                <div className="top-bar-container038"></div>
                <div className="top-bar-container039">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon12">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container040"></div>
              </div>
              <span className="top-bar-text09">Status</span>
            </div>
            <div className="top-bar-container041">
              <div className="top-bar-container042">
                <div className="top-bar-container043"></div>
                <div className="top-bar-container044">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon14">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container045"></div>
              </div>
              <span className="top-bar-text10">Favorit</span>
            </div>
            <div className="top-bar-container046">
              <div className="top-bar-container047">
                <div className="top-bar-container048"></div>
                <div className="top-bar-container049">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon16">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container050"></div>
              </div>
              <span className="top-bar-text11">Cookie</span>
            </div>
          </div>
        )}
        {menu === 'upload' && (
          <div className="top-bar-upload">
            <div className="top-bar-container051">
              <div className="top-bar-container052">
                <div className="top-bar-container053"></div>
                <div className="top-bar-container054">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon18">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container055"></div>
              </div>
              <span className="top-bar-text12">Details</span>
            </div>
            <div className="top-bar-container056">
              <div className="top-bar-container057">
                <div className="top-bar-container058"></div>
                <div className="top-bar-container059">
                  <span className="top-bar-text13">2</span>
                </div>
                <div className="top-bar-container060"></div>
              </div>
              <span className="top-bar-text14">Upload</span>
            </div>
            <div className="top-bar-container061">
              <div className="top-bar-container062">
                <div className="top-bar-container063"></div>
                <div className="top-bar-container064">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon20">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container065"></div>
              </div>
              <span className="top-bar-text15">Status</span>
            </div>
            <div className="top-bar-container066">
              <div className="top-bar-container067">
                <div className="top-bar-container068"></div>
                <div className="top-bar-container069">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon22">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container070"></div>
              </div>
              <span className="top-bar-text16">Favorit</span>
            </div>
            <div className="top-bar-container071">
              <div className="top-bar-container072">
                <div className="top-bar-container073"></div>
                <div className="top-bar-container074">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon24">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container075"></div>
              </div>
              <span className="top-bar-text17">Cookie</span>
            </div>
          </div>
        )}
        {menu === 'status' && (
          <div className="top-bar-status">
            <div className="top-bar-container076">
              <div className="top-bar-container077">
                <div className="top-bar-container078"></div>
                <div className="top-bar-container079">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon26">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container080"></div>
              </div>
              <span className="top-bar-text18">Details</span>
            </div>
            <div className="top-bar-container081">
              <div className="top-bar-container082">
                <div className="top-bar-container083"></div>
                <div className="top-bar-container084">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon28">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container085"></div>
              </div>
              <span className="top-bar-text19">Upload</span>
            </div>
            <div className="top-bar-container086">
              <div className="top-bar-container087">
                <div className="top-bar-container088"></div>
                <div className="top-bar-container089">
                  <span className="top-bar-text20">3</span>
                </div>
                <div className="top-bar-container090"></div>
              </div>
              <span className="top-bar-text21">Status</span>
            </div>
            <div className="top-bar-container091">
              <div className="top-bar-container092">
                <div className="top-bar-container093"></div>
                <div className="top-bar-container094">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon30">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container095"></div>
              </div>
              <span className="top-bar-text22">Favorit</span>
            </div>
            <div className="top-bar-container096">
              <div className="top-bar-container097">
                <div className="top-bar-container098"></div>
                <div className="top-bar-container099">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon32">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container100"></div>
              </div>
              <span className="top-bar-text23">Cookie</span>
            </div>
          </div>
        )}
        {menu === 'favorit' && (
          <div className="top-bar-favorit">
            <div className="top-bar-container101">
              <div className="top-bar-container102">
                <div className="top-bar-container103"></div>
                <div className="top-bar-container104">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon34">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container105"></div>
              </div>
              <span className="top-bar-text24">Details</span>
            </div>
            <div className="top-bar-container106">
              <div className="top-bar-container107">
                <div className="top-bar-container108"></div>
                <div className="top-bar-container109">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon36">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container110"></div>
              </div>
              <span className="top-bar-text25">Upload</span>
            </div>
            <div className="top-bar-container111">
              <div className="top-bar-container112">
                <div className="top-bar-container113"></div>
                <div className="top-bar-container114">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon38">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container115"></div>
              </div>
              <span className="top-bar-text26">Status</span>
            </div>
            <div className="top-bar-container116">
              <div className="top-bar-container117">
                <div className="top-bar-container118"></div>
                <div className="top-bar-container119">
                  <span className="top-bar-text27">4</span>
                </div>
                <div className="top-bar-container120"></div>
              </div>
              <span className="top-bar-text28">Favorit</span>
            </div>
            <div className="top-bar-container121">
              <div className="top-bar-container122">
                <div className="top-bar-container123"></div>
                <div className="top-bar-container124">
                  <svg viewBox="0 0 634.88 1024" className="top-bar-icon40">
                    <path
                      d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container125"></div>
              </div>
              <span className="top-bar-text29">Cookie</span>
            </div>
          </div>
        )}
        {menu === 'cookie' && (
          <div className="top-bar-cookie">
            <div className="top-bar-container126">
              <div className="top-bar-container127">
                <div className="top-bar-container128"></div>
                <div className="top-bar-container129">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon42">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container130"></div>
              </div>
              <span className="top-bar-text30">Details</span>
            </div>
            <div className="top-bar-container131">
              <div className="top-bar-container132">
                <div className="top-bar-container133"></div>
                <div className="top-bar-container134">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon44">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container135"></div>
              </div>
              <span className="top-bar-text31">Upload</span>
            </div>
            <div className="top-bar-container136">
              <div className="top-bar-container137">
                <div className="top-bar-container138"></div>
                <div className="top-bar-container139">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon46">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container140"></div>
              </div>
              <span className="top-bar-text32">Status</span>
            </div>
            <div className="top-bar-container141">
              <div className="top-bar-container142">
                <div className="top-bar-container143"></div>
                <div className="top-bar-container144">
                  <svg viewBox="0 0 1024 1024" className="top-bar-icon48">
                    <path
                      d="M864 128l-480 480-224-224-160 160 384 384 640-640z"
                      className=""
                    ></path>
                  </svg>
                </div>
                <div className="top-bar-container145"></div>
              </div>
              <span className="top-bar-text33">Favorit</span>
            </div>
            <div className="top-bar-container146">
              <div className="top-bar-container147">
                <div className="top-bar-container148"></div>
                <div className="top-bar-container149">
                  <span className="top-bar-text34">5</span>
                </div>
                <div className="top-bar-container150"></div>
              </div>
              <span className="top-bar-text35">Cookie</span>
            </div>
          </div>
        )}
      </div>
      <a
        href="https://www.up2data.io/contact"
        target="_blank"
        rel="noreferrer noopener"
        className="top-bar-link1"
      >
        <div className="top-bar-container151">
          <span className="top-bar-text36">{props.text1}</span>
        </div>
      </a>
    </div>
  )
}

TopBar.defaultProps = {
  text1: 'Contact',
  image_src: '/playground_assets/u2d-chrome-logo-200h.png',
  image_alt: 'image',
  text: 'Up2Data',
  rootClassName: '',
}

TopBar.propTypes = {
  text1: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default TopBar
