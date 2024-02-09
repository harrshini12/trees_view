import React from 'react'
import TreeItem from '../TreeItem/TreeItem'
import useTreeDataFetching from '../../hooks/useTreeDataFetching'
import './TreeList.css'

interface TreeListProps {
  url: string
}

const TreeList: React.FC<TreeListProps> = ({ url }) => {
  const { data, error } = useTreeDataFetching(url)

  if (error) {
    return <p>Error: {error.message}</p>
  }

  return (
    <section className='tree-list-container'>
      <ul className='tree-list'>
        {data.map((tree) => (
          <TreeItem
            key={tree.id}
            tree={tree}
            aria-label={`Tree ${tree.name}`}
          />
        ))}
      </ul>
    </section>
  )
}

export default TreeList
