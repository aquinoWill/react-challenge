import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { Card } from './index'

describe('Card Component', () => {
  it('Should render Card component', () => {
    const props = { icon: 'google', title: 'Title', subTitle: 'subTitle'  }
    const { container } = render(<Card {...props} />)
    expect(container.querySelector('div')).toBeTruthy()
    expect(container.querySelector('h2')).toBeTruthy()
    expect(container.querySelector('p')).toBeTruthy()
    expect(container.querySelector('img')).toBeTruthy()
  })

  it('Should check the props values in Card component', () => {
    const props = { icon: 'google', title: 'Title', subTitle: 'subTitle'  }
    render(<Card {...props} />)
    expect(screen.getByAltText(/Icon name google/i)).toBeInTheDocument()
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('subTitle')).toBeInTheDocument()
  })
})
