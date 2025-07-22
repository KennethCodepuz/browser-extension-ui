import data from '../../data/data.json'
import ExtensionCard from './ExtensionCard';
import { useState } from 'react';

export default function MainContent() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState('all');
  
  

  function handleActive(id) {
    setExtensions(extensions.map(extension => extension.id === id ? {...extension, isActive: !extension.isActive} : extension))
  }

  function filterBtns(e) {
    setFilter(e.target.id === 'showAll' ? 'all' :
            e.target.id === 'showActive' ? 'active' :
            'inactive');
  }

  function removeExtension(id) {
    setExtensions(extensions.filter(extension => extension.id !== id));
  }

  const extensionCard = extensions.filter(extension => {
    if(filter === 'active') return extension.isActive;
    if(filter === 'inactive') return !extension.isActive;
    return true;
  })

  return (
    <>
      <main className='main-content-container'>
        <section className='main-content-header'>
          <h1>Extension List</h1>
          <nav className='main-content-navbar'>
            <button id='showAll' onClick={filterBtns}>All</button>
            <button id='showActive' onClick={filterBtns}>Active</button>
            <button id='showInactive' onClick={filterBtns}>Inactive</button>
          </nav>
        </section>
        
        <section className='extensions-container'>
          {extensionCard.map(extension => <ExtensionCard key={extension.id} id={extension.id} extension={extension} handleActive={handleActive} removeExtension={removeExtension}/>)}
        </section>
      </main>
    </>
  )
}