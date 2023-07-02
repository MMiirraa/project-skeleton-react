import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return user data', () => {
        const data = {
            username: 'admin',
            age: 30,
            country: Country.Russia,
            lastname: 'admin',
            first: 'admin',
            city: 'city',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = { profile: { data } };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});