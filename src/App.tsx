import './app.css';
import ReactLogo from './react.svg';

const App = () => {
  console.log('All is good!');
  return (
    <div className="wrapper">
      <h1>
        Template with TS(strict on)! 
      </h1>
      <img src={ReactLogo} alt="reactImage" width="200px" />
      <ul>
        <li>Es Lint - nope</li>
        <li>SCSS - nope</li>
        <li>Styled Components - nope</li>
        <li>Redux@Toolkit - nope</li>
        <li>ESLint - nope</li>
      </ul>
    </div>
  )
}

export default App
