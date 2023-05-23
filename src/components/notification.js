import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import './notification.css'

const Notification = (props) => {
  const [button, setButton] = useState(props.downloadStatus)
  const [isVisible, setIsVisible] = useState(props.isVisible)
  const [text, setText] = useState(props.notificationTxt)


  useEffect(() => {
    setText(props.text)
    setIsVisible(props.isVisible)
  }, [props.isVisible]);

  return (
    <div className={`notification-notification ${props.rootClassName} `}>
      {isVisible && (
        <div className="notification-container">
          <span className="notification-text">{text}</span>
          {/* {button && (
            <span onClick={props.btn_click} className="notification-text1">
              Download failed contacts!
            </span>
          )} */}
        </div>
      )}
    </div>
  )
}

Notification.defaultProps = {
  text: 'Login not possible. Please check your Client ID and Secret Key!',
  rootClassName: '',
  button_text: 'Download failed contacts',
  btn_click: () => {},
}

Notification.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  button_text: PropTypes.string,
  btn_click: PropTypes.func,
}

export default Notification
