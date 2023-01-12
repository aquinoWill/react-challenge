import React from 'react'

import { MultiSelectProvider } from 'hooks'
import { Wrapper } from './MultiSelect.styled'
import { Dropdown } from './DropDown'

export const MultiSelect = props => (
  <MultiSelectProvider options={props}>
    <Wrapper>
      <Dropdown />
    </Wrapper>
  </MultiSelectProvider>
)
