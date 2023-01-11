import cityList from './assets/city.json';
import { compare } from './utils';
import { ICity } from './interface';

const all = () => {
	return cityList;
}

const getByState = (stateCode: string, countryCode: string): ICity[] => {
	if (!stateCode) return [];
	if (!countryCode) return [];

	const cities = cityList.filter((value: { countryCode: string; stateCode: string }) => {
		return value.countryCode === countryCode && value.stateCode === stateCode;
	});

	return cities.sort(compare);
}

function getByCountry(countryCode: string): ICity[] | undefined {
	if (!countryCode) return [];

	const cities = cityList.filter((value: { countryCode: string }) => {
		return value.countryCode === countryCode;
	});
	return cities.sort(compare);
}

export default {
	all,
	getByState,
	getByCountry,
};
