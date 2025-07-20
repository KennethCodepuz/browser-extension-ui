import tempImage from '../assets/logo-devlens.svg'

export default function ExtensionCard({extension}) {

  console.log(extension.logo);
  return (
    <>
      <div className='extension-container'>
        <div className='icon-and-description'>
          <img className='extension-icon' src={extension.logo} alt={extension.name + 'logo'} />
          <div>
            <div className='extension-name'>{extension.name}</div>
            <p className='extension-description'>{extension.description}</p>
          </div>
        </div>
        <div className='extension-btns'>
          <button className='remove-btn'>Remove</button>
          <label tabIndex={1} className='switch'>
            <input className='slider-btn' type="checkbox" />
            <span  class="slider round"></span>
          </label>
        </div>
      </div>
    </>
  )
}