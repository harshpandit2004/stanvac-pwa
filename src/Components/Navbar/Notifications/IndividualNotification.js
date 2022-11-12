import React from 'react'

export default function IndividualNotification(props) {
  return (
    <div>
      <h3 className='notificationHeading'>{props.heading}</h3>
      <h5 className='notificationBody'>{props.body}</h5>
    </div>
  )
}
