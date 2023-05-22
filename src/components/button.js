import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import PropTypes from 'prop-types'

import './button.css'
import { update_database } from '../database/app'


const Button = (props) => {
  const [loading, setLoading] = useState(props.loading)
  const [blanc, setBlanc] = useState(props.blanc)
  const [icon, setIcon] = useState(props.icon)
  const history = useHistory()


  useEffect(() => {
    setLoading(props.loading)
  }, [props.loading, props.goTo]);

  const click_event = async () => {
   
    
    switch (props.goTo) {
      case "details":
        history.push("/user-details")
        break;
      case "upload":
        history.push("/upload")
        break;
      case "favorite":
        history.push("/favorite")
        break;
      case "cookie":
        history.push("/cookie")
        break;
      case "checkCookie":
        history.push("/cookie-confirm")
        break;
      case "cookie-more":
        history.push("/cookie-more")
        break;
      case "invite":
        history.push("/invite")
        break;
      case "complete":
        history.push("/complete")
        break;
      case "finish":
        if (localStorage.getItem("sessionCookie")) {
          history.push("/complete")
        } else {
          history.push("/cookie")
        }
        break;
      case "homepage":
        history.push("https://up2data.io")
        break;
      case "complete":
        history.push("/complete")
        break;
      default:
    }
    
  }
  return (
    <div className={`button-button ${props.rootClassName} `}>
      {!blanc && (
        <div onClick={click_event} className="button-container">
          <div className="button-container1">
            {!loading && <span className="button-text">{props.text}</span>}
            {loading && (
              <Player
                src="https://assets1.lottiefiles.com/packages/lf20_ixp6lrkg.json"
                loop
                speed="1"
                autoplay
                background="transparent"
                className="button-lottie-node"
              ></Player>
            )}
          </div>
          <div className="button-container2"></div>
          <div className="button-container3">
            {icon === 'right' && (
              <svg viewBox="0 0 1024 1024" className="button-icon">
                <path
                  d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'left' && (
              <svg viewBox="0 0 1024 1024" className="button-icon02">
                <path
                  d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'more' && (
              <svg viewBox="0 0 1024 1024" className="button-icon04">
                <path
                  d="M896 597.333h-256c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h256c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"
                  className=""
                ></path>
                <path
                  d="M768 725.333c-23.595 0-42.667-19.115-42.667-42.667v-256c0-23.552 19.072-42.667 42.667-42.667s42.667 19.115 42.667 42.667v256c0 23.552-19.072 42.667-42.667 42.667z"
                  className=""
                ></path>
                <path
                  d="M384 256c70.571 0 128 57.429 128 128s-57.429 128-128 128-128-57.429-128-128 57.429-128 128-128M384 170.667c-117.931 0-213.333 95.488-213.333 213.333s95.403 213.333 213.333 213.333 213.333-95.488 213.333-213.333-95.403-213.333-213.333-213.333z"
                  className=""
                ></path>
                <path
                  d="M384 725.333c86.229 0 140.843 32.896 161.408 61.653-29.141 11.093-84.011 23.68-161.408 23.68-84.651 0-136.789-13.013-162.901-23.125 19.584-30.507 75.819-62.208 162.901-62.208M384 640c-160 0-256 85.333-256 170.667 0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333s-100.437-170.667-256-170.667z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'email' && (
              <svg viewBox="0 0 1024 1024" className="button-icon09">
                <path
                  d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'check' && (
              <svg viewBox="0 0 1024 1024" className="button-icon11">
                <path
                  d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'download' && (
              <svg viewBox="0 0 1024 1024" className="button-icon13">
                <path
                  d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'upload' && (
              <svg viewBox="0 0 1024 1024" className="button-icon15">
                <path
                  d="M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 230.997v409.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-409.003l140.501 140.501c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-213.333-213.333c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'folder' && (
              <svg viewBox="0 0 1024 1024" className="button-icon17">
                <path
                  d="M854 768v-426h-684v426h684zM854 256q34 0 59 26t25 60v426q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h256l86 86h342z"
                  className=""
                ></path>
              </svg>
            )}
          </div>
        </div>
      )}
      {blanc && (
        <div onClick={click_event} className="button-container4">
          <div className="button-container5">
            <span className="button-text1">{props.text}</span>
          </div>
          <div className="button-container6"></div>
          <div className="button-container7">
            {icon === 'right' && (
              <svg viewBox="0 0 1024 1024" className="button-icon19">
                <path
                  d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'left' && (
              <svg viewBox="0 0 1024 1024" className="button-icon21">
                <path
                  d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'email' && (
              <svg viewBox="0 0 1024 1024" className="button-icon23">
                <path
                  d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'check' && (
              <svg viewBox="0 0 1024 1024" className="button-icon25">
                <path
                  d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'download' && (
              <svg viewBox="0 0 1024 1024" className="button-icon27">
                <path
                  d="M214 768h596v86h-596v-86zM810 384l-298 298-298-298h170v-256h256v256h170z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'upload' && (
              <svg viewBox="0 0 1024 1024" className="button-icon29">
                <path
                  d="M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 230.997v409.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-409.003l140.501 140.501c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-213.333-213.333c-4.096-4.096-8.789-7.168-13.824-9.259s-10.539-3.243-16.341-3.243c-5.547 0-11.136 1.067-16.341 3.243-5.035 2.091-9.728 5.163-13.824 9.259l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'folder' && (
              <svg viewBox="0 0 1024 1024" className="button-icon31">
                <path
                  d="M854 768v-426h-684v426h684zM854 256q34 0 59 26t25 60v426q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h256l86 86h342z"
                  className=""
                ></path>
              </svg>
            )}
            {icon === 'more' && (
              <svg viewBox="0 0 1024 1024" className="button-icon33">
                <path
                  d="M896 597.333h-256c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h256c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"
                  className=""
                ></path>
                <path
                  d="M768 725.333c-23.595 0-42.667-19.115-42.667-42.667v-256c0-23.552 19.072-42.667 42.667-42.667s42.667 19.115 42.667 42.667v256c0 23.552-19.072 42.667-42.667 42.667z"
                  className=""
                ></path>
                <path
                  d="M384 256c70.571 0 128 57.429 128 128s-57.429 128-128 128-128-57.429-128-128 57.429-128 128-128M384 170.667c-117.931 0-213.333 95.488-213.333 213.333s95.403 213.333 213.333 213.333 213.333-95.488 213.333-213.333-95.403-213.333-213.333-213.333z"
                  className=""
                ></path>
                <path
                  d="M384 725.333c86.229 0 140.843 32.896 161.408 61.653-29.141 11.093-84.011 23.68-161.408 23.68-84.651 0-136.789-13.013-162.901-23.125 19.584-30.507 75.819-62.208 162.901-62.208M384 640c-160 0-256 85.333-256 170.667 0 42.667 96 85.333 256 85.333 150.101 0 256-42.667 256-85.333s-100.437-170.667-256-170.667z"
                  className=""
                ></path>
              </svg>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

Button.defaultProps = {
  rootClassName: '',
  text: 'Login'
}

Button.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Button
