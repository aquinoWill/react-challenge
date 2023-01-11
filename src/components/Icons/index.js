import React from 'react'
import { object, string, objectOf } from 'prop-types'

export const Icons = ({ name, ...props }) => {
  const Component = name
  return Component ? <Component role='img' {...props} /> : <></>
}

Icons.propTypes = {
  name: object,
  props: objectOf(string)
}

Icons.defaultProps = {
  props: {},
  name: <div />
}
