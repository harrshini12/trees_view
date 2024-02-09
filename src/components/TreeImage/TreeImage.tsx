import React from 'react'
import './TreeImage.css'

interface TreeImageProps {
  imageUrl: string
  alt: string
}

// TreeImage component renders an image with specified URL and alt text
const TreeImage: React.FC<TreeImageProps> = ({ imageUrl, alt }) => {
  return <img className='tree-image' src={imageUrl} alt={alt} />
}

export default TreeImage
