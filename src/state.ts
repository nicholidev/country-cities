import stateList from './assets/state.json';
import { findStateByCodeAndCountryCode, compare } from './utils';
import { IState } from './interface';

const all = (): IState[] => {
	return stateList;
}

const getByCountry = (countryCode: string = ''): IState[] => {
	if (!countryCode) return [];
	const states = stateList.filter((value) => {
		return value.countryCode === countryCode;
	});
	return states.sort(compare);
}

export function getByCode(stateCode: string, countryCode: string): IState | undefined {
	if (!stateCode) return undefined;
	if (!countryCode) return undefined;

	return findStateByCodeAndCountryCode(stateList, stateCode, countryCode);
}


export default {
	all,
	getByCountry,
	getByCode,
};
