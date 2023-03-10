import React from 'react'

import { useMultiSelect } from 'hooks'
import { Label, List, Item, Checkbox } from './MultiSelect.styled'

export const ListItens = () => {
  const { data: { options } } = useMultiSelect()

  return (
    <List>
      {
        options.map(option => (
          <Item key={option.label}>
            <Label>
              <Checkbox
                type='checkbox'
                name={option.value}
                value={option.value}
                defaultChecked={option.checked}
              />
              { option.label }
            </Label>
          </Item>
        ))
      }
    </List>
  )
}
