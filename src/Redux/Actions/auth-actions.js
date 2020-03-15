import { AUTH_LOGIN, AUTH_LOGOUT } from '../action-types';

export const login = (email, password) => ({ type: AUTH_LOGIN, payload: { email, password } });
export const logout = () => ({ type: AUTH_LOGOUT });
