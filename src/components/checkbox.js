import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './checkbox.css'

const Checkbox = (props) => {
  const [check, setCheck] = useState(false)
  return (
    <div
      onClick={() => setCheck(!check)}
      className={`checkbox-container ${props.rootClassName} `}
    >
      {check && <div className="checkbox-container1"></div>}
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
