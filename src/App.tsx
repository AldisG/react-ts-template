import './app.css';
import ReactLogo from './react.svg';

const App = () => {
  console.log('All is good!');
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <h1>
          Template with TS(strict on)
        </h1>
        <h2>as {process.env.NODE_ENV} with {process.env.name} settings! </h2>
      </div>
      <img src={ReactLogo} alt="reactImage" width="200px" />
      <ul>
        <li>SCSS - nope</li>
        <li>Styled Components - nope</li>
        <li>Redux@Toolkit - nope</li>
        <li>ESLint - nope</li>
        <li>Multiple webpack settings template - yes</li>
        {/* ReactRefreshWebpackPlugin for data to persist trough save-work-and-update in VSC to Browser */}
        {/* Still experimental, if buggy, disable it at webpack.dev.js and change config file */}
        {/* "start": "webpack serve --config webpack/webpack.config.js --env env=dev --open", */}
        {/* from github.com/pmmmwh/react-refresh-webpack-plugin */}
        {/* Remove open: true in devServer of WEBPACK.CONFIG file */}
        <li>ReactRefreshWebpackPlugin - yes</li>
      </ul>
    </div>
  )
}

export default App
