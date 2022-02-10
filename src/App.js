import { useDispatch, useSelector } from 'react-redux';

function App() {
	const counter1 = 120;
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	return (
		<div className='App'>
			<center>
				<h1>COUNTER</h1>
				<h1>{counter}</h1>
				<button onClick={() => dispatch({ type: 'add1' })}>Add One</button>
				<button onClick={() => dispatch({ type: 'add10' })}>Add Ten</button>
				<button onClick={() => dispatch({ type: 'sub1' })}>
					Substract One
				</button>
				<button onClick={() => dispatch({ type: 'sub10' })}>
					Substract Ten
				</button>
			</center>
		</div>
	);
}

export default App;
