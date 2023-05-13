import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './notification.css'

const Notification = (props) => {
  const [button, setButton] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={`notification-notification ${props.rootClassName} `}>
      {isVisible && (
        <div className="notification-container">
          <span className="notification-text">{props.text}</span>
          {button && (
            <span onClick={props.btn_click} className="notification-text1">
              {props.button_text}
            </span>
          )}
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
