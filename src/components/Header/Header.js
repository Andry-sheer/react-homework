import './Header.css';

const textOne = "text 1";

const Header = () => {

  const textTwo = "text 2";

  return (
    <header className='Header'>
      <li className='listHeader'>{textOne}</li>
      <li className='listHeader'>{textTwo}</li>
      <li className='listHeader'>text 3</li>
      <li className='listHeader'>text 4</li>
    </header>
  )
}

export default Header;