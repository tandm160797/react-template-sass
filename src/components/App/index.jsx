import Count from '$components/Count';
import MagicBox from '$components/MacgicBox';
import React from 'react';
import './styles';

const App = () => {
	return (
		<div className="app">
			<h1 className="app__heading">Hello ReactJS</h1>
			<hr />
      <h1 className="app__heading">Redux toolkit</h1>
      <Count />
			<hr />
      <h1 className="app__heading">Custom hooks</h1>
      <MagicBox />
		</div>
	);
};

export default App;
