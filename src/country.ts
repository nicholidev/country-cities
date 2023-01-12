import countryList from './assets/country.json';
import { findEntryByCode } from './utils';
import { ICountry } from './interface';

const all = (): ICountry[] => {
	const countries = countryList;
	return countries.map((i: ICountry) => {
		return i;
	});
};

const getByCode = (isoCode: string): ICountry | undefined => {
	if (!isoCode) return undefined;
	const country = findEntryByCode(countryList, isoCode);
	return country;
};

export default {
	getByCode,
	all,
};
