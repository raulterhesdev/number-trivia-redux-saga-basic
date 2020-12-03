import styled from 'styled-components';

export const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
`;

export const Switch = styled.button`
	background-color: transparent;
	font-size: 1rem;
	padding: 1.4rem;

	position: absolute;
	top: 0;
	right: 0;
	&:hover {
		color: var(--primary);
	}
`;

export const Label = styled.label`
	font-size: 1rem;
	margin-bottom: 6px;
`;

export const Input = styled.input`
	font-size: 0.9rem;
	padding: 0.8rem 1rem;
	background-color: transparent;
	border: none;
	outline: none;
	text-align: center;
	border: 1px solid var(--dark-transparent);
	border-radius: 25px;
	margin-bottom: 16px;
	width: 100%;

	&:hover {
		border: 1px solid var(--primary-transparent);
	}

	&:focus {
		border: 1px solid var(--primary);
		background-color: white;
	}
`;

export const Error = styled.p`
	color: var(--error);
	padding-top: 8px;
`;

export const Button = styled.button`
	margin-top: 20px;
	padding: 0.7rem 4rem;
	font-size: 1rem;
	background-color: var(--primary);
	color: var(--light);
	border-radius: 1.2rem;

	&:hover {
		background-color: var(--primary-transparent);
	}
`;
