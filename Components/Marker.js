import React from 'react'
import { Icon } from '@iconify/react'
const Marker = ({text}) => {
  return (
    <div>
    <Icon icon="oi:map-marker" className="pin-icon" />
    <p className="pin-text">{text}</p>
    </div>
  )
}

export default Marker