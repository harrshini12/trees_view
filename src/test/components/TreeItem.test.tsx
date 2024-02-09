import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import TreeItem from '../../components/TreeItem/TreeItem'

const sampleTree = {
  id: 1,
  name: 'Sample Tree',
  species_name: 'Sample Species',
  image: { src: 'sample.jpg', alt: 'Sample Alt' },
}

test('renders TreeItem component', () => {
  render(<TreeItem tree={sampleTree} />)

  expect(screen.getByText('Sample Tree')).toBeTruthy()
})

test('Image should be hidden initially', () => {
  render(<TreeItem tree={sampleTree} />)

  // Image should be hidden initially
  expect(screen.queryByAltText('Sample Alt')).toBeNull()
})

test('toggles image visibility on button click', async () => {
  render(<TreeItem tree={sampleTree} />)

  // Image should be hidden initially
  expect(screen.queryByAltText('Sample Alt')).toBeNull()

  // Click the button to show the image
  fireEvent.click(screen.getByText('Show Image'))

  const testImage = screen.getByRole('img')
  expect(testImage.getAttribute('src')).toBe('sample.jpg')

  // Click the button again to hide the image
  fireEvent.click(screen.getByText('Hide Image'))

  expect(screen.queryByAltText('Sample Alt')).toBeNull()
})
