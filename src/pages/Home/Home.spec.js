import React from 'react'
import { render } from '@testing-library/react'
// import { screen } from '@testing-library/dom'
import { Home } from './index'

describe('Home Page', () => {
  it('Should render Home Page', () => {
    const { container } = render(<Home />)
    expect(container.querySelector('section')).toBeTruthy()
  })
})
