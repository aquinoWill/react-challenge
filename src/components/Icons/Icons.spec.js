import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { Icon } from './index'

describe('Icon Component', () => {
  it('Should render Icon component', () => {
    const props = { name: 'google', alt: 'Icon google' }
    const { container } = render(<Icon {...props} />)
    expect(container.querySelector('img')).toBeTruthy()
  })

  it('Should check the props values in Icon component', () => {
    const props = { name: 'google', alt: 'Icon google' }
    render(<Icon {...props} />)
    expect(screen.getByAltText(/Icon google/i)).toBeInTheDocument()
  })
})
