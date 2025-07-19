import tempImage from '../assets/logo-devlens.svg'

export default function ExtensionCard({extension}) {

  console.log(extension.logo);
  return (
    <>
      <div>
        <div>
          <img src={extension.logo} alt={extension.name + 'logo'} />
          <div>
            <div>{extension.name}</div>
            <p>{extension.description}</p>
          </div>
        </div>
        <div>
          <button>Remove</button>
          <button>Placeholder</button>
        </div>
      </div>
    </>
  )
}