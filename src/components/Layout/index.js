import React from 'react'
import { node } from 'prop-types'
import { Wrapper } from './Layout.styled'

export const Layout = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)

Layout.defaultProps = {
  children: <></>
}

Layout.propTypes = {
  children: node
}
