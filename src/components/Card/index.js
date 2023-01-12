import React from 'react'
import { node } from 'prop-types'

import { Wrapper } from './Card.styled'

export const Card = ({ children }) => (
  <Wrapper>{ children }</Wrapper>
)

Card.propTypes = {
  children: node.isRequired
}
