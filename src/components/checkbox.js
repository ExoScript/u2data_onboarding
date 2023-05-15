import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import './checkbox.css'

const Checkbox = (props) => {
  let test = localStorage.getItem("checkBox") || ''
  const [checkBox, setCheckBox] = useState(test.includes(props.id));
  const event = () => {
    test = localStorage.getItem("checkBox") || ''
    setCheckBox(!test.includes(props.id))
    if (!test.includes(props.id)) {
      localStorage.setItem("checkBox", test + props.id);
    } else {
      localStorage.setItem("checkBox", test.replace(props.id, ''));
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
