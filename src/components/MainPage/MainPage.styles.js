import styled from 'styled-components';
import { Button } from '../LoginPage/LoginPage.styles';

export const Logout = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	margin: 1rem;
	padding: 0.8rem 2rem;
	font-size: 0.8rem;
	background-color: transparent;
	color: var(--dark);
	border: 1px solid transparent;

	&:hover {
		color: var(--primary);
		border-bottom: 1px solid var(--primary);
	}
`;

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 12px;
`;

export const Label = styled.label``;

export const NumberInput = styled.input`
	margin: 8px;
	border: none;
	outline: none;
	padding: 0.8rem;
	border-radius: 1rem;
	text-align: center;
	border: 1px solid var(--primary-transparent);
	background-color: transparent;
	max-width: 140px;
	font-size: 0.9rem;

	&:focus {
		background-color: white;
		border: 1px solid var(--primary-transparent);
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	margin-bottom: 12px;
`;

export const ListItem = styled.li`
	padding: 0.7rem;
	background-color: ${(props) =>
		props.selected ? 'var(--primary)' : 'var(--dark-transparent)'};
	color: ${(props) => (props.selected ? 'var(--light)' : 'var(--dark)')};
	border-radius: 4px;
	margin: 0 4px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const FetchButton = styled(Button)`
	padding: 0.8rem 2rem;
	font-size: 0.9rem;
	min-width: 250px;
`;

export const DisplayWrapper = styled.div`
	margin-top: 30px;
	border: 1px solid var(--primary);
	min-height: 250px;
	width: 50vw;
	min-width: 300px;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
`;

export const Display = styled.p`
	font-size: 2rem;
	color: var(--dark);
`;

export const Title = styled.h1`
	position: absolute;

	top: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	color: var(--primary);
`;
