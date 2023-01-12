import React from 'react'
import { string } from 'prop-types'

import { Icon, MultiSelect } from 'components'
import { Wrapper, Title, SubTitle } from './Card.styled'

export const Card = ({ title, subTitle, icon }) => {
  const data = [
    { label: 'Family', value: 'family' },
    { label: 'Work Friends', value: 'work_friends', checked: true },
    { label: 'another label', value: 'another_label' }
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
