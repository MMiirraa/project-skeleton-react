import { DeepPartial } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginActions, loginReducer } from "./loginSlice"

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Jon' }

        expect(loginReducer(state as LoginSchema, loginActions.setUsername('Jon')))
            .toEqual({"username": "Jon"})
    })

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' }
        
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123')))
            .toEqual({"password": "123"})
    })
})
