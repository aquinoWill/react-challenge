import React from 'react'
import { Icons } from 'components'
import { ReactComponent as ConnectError } from 'assets/icons/arrows.svg'

export const Card = () => {
  return (
    <div>
      <h2>Card</h2>
      <Icons name={ConnectError} />
    </div>
  )
}
