import React from 'react'

export default function ScanQR() {
    const scanHandler = () => {
        console.log("camera should open and scan for any available QR codes.\n *SHOULD*")
    }
  return (
    <div>
      <button className='ScanQR' onClick={scanHandler}><i> QRLogo </i>Scan any QR</button>
    </div>
  )
}
