import { useSelector } from 'react-redux';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	return <div className='App'>{isLoggedIn ? <MainPage /> : <LoginPage />}</div>;
}

export default App;
