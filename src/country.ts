import path from 'path';
import countryList from './assets/country.json';
import { findEntryByCode } from './utils';
import { ICountry } from './interface';

const FLAGS_PATH = path.resolve('./assets');

const all = (): ICountry[] => {
	const countries = countryList;
	return countries.map((i: ICountry) => {
		i.flag = path.join(FLAGS_PATH, `3x2/${i.isoCode}.svg`);
		return i;
	});
};

const getByCode = (isoCode: string): ICountry | undefined => {
	if (!isoCode) return undefined;
	const country = findEntryByCode(countryList, isoCode);
	country.flag = path.join(FLAGS_PATH, `3x2/${isoCode}.svg`);
	return country;
};

export default {
	getByCode,
	all,
};
