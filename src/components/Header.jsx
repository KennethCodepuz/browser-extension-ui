import headerlogo from '../../public/logo.svg'
import headerLight from '../../public/logo-light.svg'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'
import { useState } from 'react'

export default function Header() {
  const [theme, setTheme] = useState('light')

  
  function changeTheme() {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme); // ✅ use newTheme
      return newTheme;
    });
  }

  return (
    <>
      <header className='header-container'>
        <img src={theme === 'light' ? headerlogo : headerLight} alt="extension logo" />
        <button className='toggle-theme-btn' onClick={changeTheme}>
          <img src={theme === 'light' ? moon : sun} alt="sun icon" />
        </button>
      </header>
    </>
  )
}