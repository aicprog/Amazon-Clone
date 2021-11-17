import './App.css';
import { Footer, Header } from './Components';
import { HomePage, CheckoutPage, LoginPage } from './Pages';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<Router>
				{/* Header */}
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/checkout" element={<CheckoutPage/>} />
				</Routes>
			</Router>
			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
