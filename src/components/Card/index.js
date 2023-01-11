import React from 'react'
import { string } from 'prop-types'

import { Icon } from 'components'
import { Wrapper, Title, SubTitle } from './Card.styled'

export const Card = ({ title, subTitle, icon }) => {
  return (
    <Wrapper>
      <Icon name={icon} alt={`Icon name ${icon}`} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Wrapper>
  )
}

Card.defaultProps = {
  title: '',
  subTitle: '',
  icon: ''
}

Card.propTypes = {
  title: string,
  subTitle: string,
  icon: string
}
