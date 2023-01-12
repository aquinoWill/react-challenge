import React from 'react'

import { SelectItens } from './SelectItens'
import { ListItensWrapper, List } from './MultiSelect.styled'

export const ListItens = () => {

  return (
    <ListItensWrapper>
      <List>
        <SelectItens />
      </List>
    </ListItensWrapper>
  )
}
