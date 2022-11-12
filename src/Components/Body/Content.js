import React from 'react'
import Card from './Card'
import FeaturesKaJoda from './FeaturesKaJoda'
import ScanQR from './ScanQR'

export default function Content() {
  return (
    <div className='content'>
      <Card moneyHead="2,730" moneyTail="00"/>
      <FeaturesKaJoda/>
      <ScanQR/>
    </div>
  )
}
