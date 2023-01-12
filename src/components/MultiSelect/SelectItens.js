import React from 'react'

import { useMultiSelect } from 'hooks'
import { Item, Label, Checkbox } from './MultiSelect.styled'

export const SelectItens = () => {
  const { data: { options } } = useMultiSelect()

  return (
    <Item>
      {
        options.map(option => (
          <Label key={option.label}>
            { option.label }
            <Checkbox
              type='checkbox'
              name={option.value}
              value={option.value}
              defaultChecked={option.checked}
            />
          </Label>
        ))
      }
    </Item>
  )
}
