import { h } from 'preact'
import { render, fireEvent, screen } from '@testing-library/preact'
import Header from '../src/components/header'

describe('Initial Test of the Header', () => {
  test('Header renders 3 nav items', () => {
    const context = render(<Header />)
    expect(context.container.querySelector('h1').textContent).toBe('Preact App')
    expect(context.container.querySelectorAll('nav > a').length).toBe(3)
  })
})
