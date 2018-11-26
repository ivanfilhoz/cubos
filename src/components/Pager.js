import React from 'react'
import './Pager.css'

export default ({ total, current, handler }) => (
  <div className='pager'>
    {Array.from(Array(total)).map((_, number) => (
      <span
        key={number}
        data-number={number + 1}
        className={current === number + 1 ? 'current' : null}
        onClick={current === number + 1 ? null : handler}
      >
        {number + 1}
      </span>
    ))}
  </div>
)
