import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route, Router, Switch} from 'react-router-dom';

import './pages/homepage/homepage.style.scss';


const HatsPage = () => {
	return (
		<div>
			<h1> HATS PAGE </h1>
		</div>
	);
};


function App() {
  return (
    <div>
			<Route exact path='/' component={HomePage} />
			<Route path='/hats' component={HatsPage} /> 
    </div>
  );
}

export default App;
