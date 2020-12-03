import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerStart, loginStart } from '../../store/actions';
import {
	LoginWrapper,
	Switch,
	Label,
	Input,
	Button,
	Error,
} from './LoginPage.styles';
import { useKeyPress } from '../../hooks/useKeyPress';

const LoginPage = () => {
	const [isRegister, setIsRegister] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const authError = useSelector((state) => state.auth.authError);

	const submitForm = () => {
		if (isRegister) {
			dispatch(registerStart({ email, password }));
		} else {
			dispatch(loginStart({ email, password }));
		}
	};

	useKeyPress('Enter', submitForm);

	return (
		<LoginWrapper>
			<Switch onClick={() => setIsRegister((prev) => !prev)}>
				Switch to {isRegister ? 'Login' : 'Register'}
			</Switch>
			<Label htmlFor='name'>Email</Label>
			<Input
				name='email'
				type='text'
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<Label htmlFor='password'>Password</Label>
			<Input
				name='password'
				type='password'
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>
			{authError && <Error>{authError}</Error>}
			<Button onClick={submitForm}>{isRegister ? 'Register' : 'Login'}</Button>
		</LoginWrapper>
	);
};

export default LoginPage;
