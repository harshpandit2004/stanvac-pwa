import React from 'react'
import IndividualNotification from './IndividualNotification'

export default function NotificationsPage(props) {
  return (
    <div className='NotificationsPage'>
      <button onClick={props.collapseNotifications}>Collapse Notifications</button>
      <IndividualNotification heading="Sample heading" body="sample body"/>
      <IndividualNotification heading="Sample heading" body="sample body"/>
    </div>
  )
}
/* you can also call this notifications ka joda */
