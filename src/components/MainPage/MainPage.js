import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataStart, logoutStart } from '../../store/actions';
import {
	Logout,
	PageWrapper,
	InputWrapper,
	NumberInput,
	List,
	ListItem,
	FetchButton,
	Display,
	DisplayWrapper,
	ButtonWrapper,
	Label,
	Title,
} from './MainPage.styles';

const FETCH_TYPES = {
	DATE: 'Date',
	YEAR: 'Year',
	MATH: 'Math',
	TRIVIA: 'Trivia',
	ANY: 'Any',
};

const FETCH_MODES = {
	RANDOM: 'random',
	NUMBER: 'number',
	DATE: 'date',
};

function MainPage() {
	const dispatch = useDispatch();
	const [number, setNumber] = useState('');
	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [type, setType] = useState(FETCH_TYPES.ANY);
	const fact = useSelector((state) => state.numbers.currentFact);

	const sendFetchRequest = (mode) => {
		const fetchParameters = {};
		switch (mode) {
			case FETCH_MODES.RANDOM:
				fetchParameters.random = true;
				break;
			case FETCH_MODES.NUMBER:
				fetchParameters.number = number;
				break;
			case FETCH_MODES.DATE:
				fetchParameters.day = day;
				fetchParameters.month = month;
				break;
			default:
				break;
		}

		if (type !== FETCH_TYPES.ANY) {
			fetchParameters.type = type.toLowerCase();
		}

		dispatch(fetchDataStart(fetchParameters));
	};

	const typesList = [];

	for (const key in FETCH_TYPES) {
		if (FETCH_TYPES.hasOwnProperty(key)) {
			const fetchType = FETCH_TYPES[key];
			typesList.push(
				<ListItem
					onClick={() => setType(fetchType)}
					key={fetchType}
					selected={type === fetchType}
				>
					{fetchType}
				</ListItem>
			);
		}
	}

	return (
		<PageWrapper>
			<Logout onClick={() => dispatch(logoutStart())}>Logout</Logout>
			<Title>Number Trivia</Title>
			<List>{typesList}</List>
			<InputWrapper>
				{type === FETCH_TYPES.DATE ? (
					<div>
						<Label>Day</Label>
						<NumberInput
							type='number'
							value={day}
							min='1'
							max='31'
							onChange={(e) => setDay(e.target.value)}
						/>
						<Label>Month</Label>
						<NumberInput
							type='number'
							value={month}
							min='1'
							max='12'
							onChange={(e) => setMonth(e.target.value)}
						/>
					</div>
				) : (
					<div>
						<Label>Number</Label>
						<NumberInput
							type='number'
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
					</div>
				)}
			</InputWrapper>

			<ButtonWrapper>
				<FetchButton
					onClick={() =>
						sendFetchRequest(
							type === FETCH_TYPES.DATE ? FETCH_MODES.DATE : FETCH_MODES.NUMBER
						)
					}
				>
					Get {type !== FETCH_TYPES.ANY ? `${type}` : null} Fact
				</FetchButton>
				<FetchButton onClick={() => sendFetchRequest(FETCH_MODES.RANDOM)}>
					Get Random {type !== FETCH_TYPES.ANY ? `${type}` : null} Fact
				</FetchButton>
			</ButtonWrapper>

			<DisplayWrapper>
				<Display>{fact}</Display>
			</DisplayWrapper>
		</PageWrapper>
	);
}

export default MainPage;
