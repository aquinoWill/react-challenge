import React from 'react'
import { Icon } from 'components'
import { ListItens } from './ListItens'
import { DropdownWrapper, Title } from './MultiSelect.styled'

export const Dropdown = () => {


  return (
    <DropdownWrapper>
      <Icon name='check' alt='check' />
      <Title>All contacts</Title>
      <Icon name='dropdown' alt='dropdown' />
      <ListItens />
    </DropdownWrapper>
  )
}
