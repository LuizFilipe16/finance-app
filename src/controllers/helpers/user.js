import validator from 'validator';
import { badRequest } from './http.js';

export const invalidPasswordResponse = () =>
    badRequest({
        message: 'Password must be at least 6 characters',
    });

export const emailIsAlreadyInUseResponse = () =>
    badRequest({
        message: 'Invalid e-mail. Please provide a valid one',
    });

export const InvalidIdResponse = () =>
    badRequest({
        message: 'Some provided field is not allowed',
    });

export const checkIfPasswordIsValid = (password) => password.lenght >= 6;

export const checkIfEmailIsValid = (email) => validator.isEmail(email);
