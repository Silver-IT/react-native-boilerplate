import { AUTH_LOGIN, AUTH_LOGOUT } from '../action-types';

const initialAuthState = {
    user: null,
};

const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
                user: {
                    email: action.payload.email,
                    password: action.payload.password,
                },
            };
        case AUTH_LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
  };

export default authReducer;
