import axios from 'axios';

const baseUrl = 'http://numbersapi.com';

export const fetchData = (queryParams) => {
	const { number, random, day, month, type } = queryParams;

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	let callUrl = '';

	if (random) {
		callUrl += 'random';
	} else if (number) {
		callUrl += `${number}`;
	} else if (day && month) {
		callUrl += `${month}/${day}`;
	} else {
		return Promise.reject('Please select random, a number or a date');
	}

	if (type) {
		callUrl += `/${type}`;
	}
	return axios
		.get(`${baseUrl}/${callUrl}`, config)
		.then((response) => response.data)
		.catch((error) => Promise.reject(error));
};
