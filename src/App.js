import './App.css';
import { Footer, Header } from './Components';
import { HomePage } from './Pages';

function App() {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* Home */}
			<HomePage />
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
