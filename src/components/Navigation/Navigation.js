import './Navigation.css'

const textFour = "nav 1";

const Navigation = () => {

  const textFive = "nav 2";

  return <div className='Navigation'>
    <ul className='nav'>
      <li className='listNav'>{textFour}</li>
      <li className='listNav'>{textFive}</li>
      <li className='listNav'>nav 3</li>
      <li className='listNav'>nav 4</li>
    </ul>
  </div>
}

export default Navigation;