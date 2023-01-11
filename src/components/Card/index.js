import React from 'react'
import { Icons } from 'components'
import { ReactComponent as ConnectError } from 'assets/icons/arrows.svg'

export const Card = () => {
  return (
    <div>card
      <Icons name={ConnectError} />
    </div>
  )
}
