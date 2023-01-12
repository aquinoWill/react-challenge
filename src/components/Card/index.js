import React from 'react'
import { string } from 'prop-types'

import { Icon, MultiSelect } from 'components'
import { Wrapper, Title, SubTitle } from './Card.styled'

export const Card = ({ title, subTitle, icon }) => {
  const data = [
    { label: 'Family', value: 'family' },
    { label: 'Work Friends', value: 'work friends' },
    { label: 'anather label', value: 'another label' }
  ]
  return (
    <Wrapper>
      <Icon name={icon} alt={`Icon name ${icon}`} />
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <MultiSelect options={data} />
    </Wrapper>
  )
}

Card.propTypes = {
  title: string.isRequired,
  subTitle: string.isRequired,
  icon: string.isRequired
}
