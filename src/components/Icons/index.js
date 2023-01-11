import React from 'react'
import { string, objectOf } from 'prop-types'

import * as Icons from 'assets'

export const Icon = ({ name, alt }) => (
  <img src={Icons[name]} alt={alt} />
)

Icon.propTypes = {
  alt: string,
  name: string.isRequired,
  props: objectOf(string)
}

Icon.defaultProps = {
  alt: '',
  props: {}
}
