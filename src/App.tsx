/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react'
import TreeList from './components/TreeList/TreeList'
import useTreeDataFetching from './hooks/useTreeDataFetching'
import './App.css'

const App: React.FC = () => {
  const treesUrl =
    'https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json'
  const { data: trees, error } = useTreeDataFetching(treesUrl)

  useEffect(() => {
    if (error) {
      console.error('Error fetching trees:', error)
    }
  }, [error])

  return (
    <main>
      <header className='app-header'>
        <h1>Ecosia Trees</h1>
      </header>
      <section className='app-main'>
        {error && <p>Error fetching trees.</p>}
        {trees && <TreeList url={treesUrl} />}
      </section>
      <footer className='app-footer'>
        <p aria-hidden='true'>&copy; Harrshini</p>
      </footer>
    </main>
  )
}

export default App
