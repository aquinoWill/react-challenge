import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/dom'
import { Home } from './index'

describe('Home Page', () => {
  it('Should render Home Page', () => {
    const { container } = render(<Home />)
    expect(container.querySelector('section')).toBeTruthy()
  })

  it('Should click in Img and change value sync', () => {
    render(<Home />)
    const img = screen.getByAltText(/Sync Contacts/i)
    userEvent.click(img)
    expect(screen.getByText(/All done!/i)).toBeInTheDocument()
  })
})
