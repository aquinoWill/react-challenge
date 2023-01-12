import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './index'

describe('Card Component', () => {
  it('Should render Card component', () => {
    const props = { children: <div>Card Text</div> }
    const { container } = render(<Card {...props} />)
    expect(container.querySelector('div')).toBeTruthy()
  })
})
