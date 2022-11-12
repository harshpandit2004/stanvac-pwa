import React from 'react'

export default function Card(props) {
  return (
    <div className='card-wala-div'>
      <div className="money">
      <i class="fa fa-inr"/>
        <h3 className='money-head'>{props.moneyHead}</h3>
        .
        <h3 className='money-tail'>{props.moneyTail}</h3>
      </div>
      <p>Total Balance</p>
    </div>
  )
}
