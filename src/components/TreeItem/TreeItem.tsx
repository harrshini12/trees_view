import React, { useState, useRef } from 'react'
import TreeImage from '../TreeImage/TreeImage'
import { Tree } from '../../hooks/useTreeDataFetching'
import './TreeItem.css'

interface TreeItemProps {
  tree: Tree
}

const TreeItem: React.FC<TreeItemProps> = ({ tree }) => {
  const [showImage, setShowImage] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Function to toggle image visibility and set focus to the button
  const toggleImage = () => {
    setShowImage(!showImage)
    buttonRef.current?.focus()
  }
  return (
    <article className={`tree-card ${showImage ? 'show-image' : ''}`}>
      <section className='card-content'>
        <h2 className='tree-name'>{tree.name}</h2>
        <h3 className='tree-species'>{tree.species_name}</h3>
      </section>
      <figure
        id={`image-${tree.id}`}
        className={`tree-image-container ${showImage ? 'visible' : 'hidden'}`}
        aria-hidden={!showImage}
      >
        {showImage && (
          <TreeImage imageUrl={tree.image.src} alt={tree.species_name} />
        )}
      </figure>
      <button
        ref={buttonRef}
        tabIndex={0}
        className={`toggle-button ${showImage ? 'show-button' : 'hide-button'}`}
        onClick={toggleImage}
        aria-label={showImage ? 'Hide Image' : 'Show Image'}
      >
        {showImage ? 'Hide Image' : 'Show Image'}
      </button>
    </article>
  )
}

export default TreeItem
