import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

// Mocking the useTreeDataFetching hook
jest.mock('../hooks/useTreeDataFetching', () => ({
  __esModule: true,
  default: () => ({ data: null, error: null }),
}))

describe('App', () => {
  test('renders header', () => {
    render(<App />)
    const headerElement = screen.getByText(/Ecosia Trees/i)
    expect(headerElement).toBeTruthy()
  })

  test('displays error message if there is an error fetching trees', () => {
    jest.mock('../hooks/useTreeDataFetching', () => ({
      __esModule: true,
      default: () => ({ data: null, error: new Error('Test error') }),
    }))

    render(<App />)

    // Check for the error message
    const errorMessage = screen.queryByText(/Error fetching trees./i)
    expect(errorMessage).toBeDefined()
  })

  test('displays TreeList if trees are fetched successfully', () => {
    jest.mock('../hooks/useTreeDataFetching', () => ({
      __esModule: true,
      default: () => ({ data: [], error: null }),
    }))

    render(<App />)

    // Check for the TreeList
    const treeListElement = screen.queryByTestId('tree-list')
    expect(treeListElement).toBeDefined()
  })

  test('renders footer', () => {
    render(<App />)
    const headerElement = screen.getByText(/© Harrshini/i)
    expect(headerElement).toBeTruthy()
  })
})
