import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import './checkbox.css'

const Checkbox = (props) => {
  let check = localStorage.getItem("checkBox") || ''
  const [checkBox, setCheckBox] = useState(check.includes(props.id));
  const event = () => {
    check = localStorage.getItem("checkBox") || ''
    setCheckBox(!check.includes(props.id))
    if (!check.includes(props.id)) {
      localStorage.setItem("checkBox", check + props.id);
    } else {
      localStorage.setItem("checkBox", check.replace(props.id, ''));
    }
  };

  return (
    <div
      onClick={event}
      className={`checkbox-container ${props.rootClassName}`}
      id={props.id}
    >
      {checkBox && <div className="checkbox-container1"></div>}
    </div>
  )
}

Checkbox.defaultProps = {
  rootClassName: '',
}

Checkbox.propTypes = {
  rootClassName: PropTypes.string,
}

export default Checkbox
