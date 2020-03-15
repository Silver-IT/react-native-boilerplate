import { connect } from 'react-redux';
import { login, logout } from './Actions/auth-actions';

const mapUserStateToProps = state => ({ user: state.authReducer.user });
const mapAuthDispatchToProps = { login, logout };
export const connectAuth = connect( mapUserStateToProps, mapAuthDispatchToProps );

const mapAuthStateToProps = state => ({ authenticated: !!state.authReducer.user });
export const connectIsAuth = connect(mapAuthStateToProps, null);
