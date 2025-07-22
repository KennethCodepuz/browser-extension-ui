import tempImage from '../assets/logo-devlens.svg'

export default function ExtensionCard({ id, extension, handleActive, removeExtension }) {

  
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
          <button className='remove-btn' onClick={() => removeExtension(id)}>Remove</button>
          <label tabIndex={1} className='switch'>
            <input className='slider-btn' type="checkbox" checked={extension.isActive ? true : false} onChange={() => handleActive(id)}/>
            <span  class="slider round"></span>
          </label>
        </div>
      </div>
    </>
  )
}