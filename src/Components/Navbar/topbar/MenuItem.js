import React from 'react'

export default function MenuItem(props) {
  return (
    <div className='Menuitem-individual'>
      <i src = {props.icon}/>
      <p>{props.text}</p>
    </div>
  )
}
