import './Container.css';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';


const Container = () => {
  return (
    <div className='Container'>
      <Navigation></Navigation>
      <Main></Main>
    </div>
  )
}

export default Container;
