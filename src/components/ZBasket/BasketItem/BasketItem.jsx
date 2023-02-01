import React from 'react'
import s from './style.module.css'

export default function BasketUtem({id, title, price, count, decrement, increment}) {
  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>{price}</p>
        <p>{count}</p>
        <div>
          <button
            onClick={() => increment(id)}> + </button>
          <button
            onClick={() => decrement(id)}> - </button>
        </div>
    </div>
  )
}
