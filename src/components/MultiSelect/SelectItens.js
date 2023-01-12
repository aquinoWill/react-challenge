import React from 'react'

import { useMultiSelect } from 'hooks'
import { Item, Label, Checkbox } from './MultiSelect.styled'

export const SelectItens = () => {
  const { data: { options } } = useMultiSelect()
  console.log('DATA', options)

  return (
    <Item>
      {
        options.map(option => (
          <Label key={option.label}>
            { option.label }
            <Checkbox
              type='checkbox'
              name='contact'
              value={option.value}
            />
          </Label>

        ))
      }
    </Item>
  )
}
