import headerlogo from '../../public/logo.svg'
import sun from '../assets/icon-sun.svg'
import moon from '../assets/icon-moon.svg'

export default function Header() {

  return (
    <>
      <header className='header-container'>
        <img src={headerlogo} alt="extension logo" />
        <button className='toggle-theme-btn'>
          <img src={moon} alt="sun icon" />
        </button>
      </header>
    </>
  )
}