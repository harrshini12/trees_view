import React from 'react'
import { render, screen } from '@testing-library/react'
import TreeImage from '../../components/TreeImage/TreeImage'

test('renders TreeImage component', () => {
  const imageUrl = 'your-image-url.jpg'
  const alt = 'tree-image-alt-text'

  render(<TreeImage imageUrl={imageUrl} alt={alt} />)

  const imageElement = screen.getByAltText(alt)
  expect(imageElement).toBeTruthy()
})
