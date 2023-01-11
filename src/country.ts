import countryList from './assets/country.json';
import { findEntryByCode } from './utils';
import { ICountry } from './interface';

function getByCode(isoCode: string): ICountry | undefined {
	if (!isoCode) return undefined;

	return findEntryByCode(countryList, isoCode);
}

function all(): ICountry[] {
	return countryList;
}

export default {
	getByCode,
	all,
};
