import data from '../../data/data.json'
import ExtensionCard from './ExtensionCard';
import { useState } from 'react';

export default function MainContent() {
  const [extensions, setExtension] = useState(data)
  
  const extensionCard = extensions.map(extension => <ExtensionCard extension={extension} />)

  return (
    <>
      <main className='main-content-container'>
        <section className='main-content-header'>
          <h1>Extension List</h1>
          <nav className='main-content-navbar'>
            <button>All</button>
            <button>Active</button>
            <button>Inactive</button>
          </nav>
        </section>
        
        <section>
          {extensionCard}
        </section>
      </main>
    </>
  )
}