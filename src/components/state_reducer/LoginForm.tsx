import {useReducer} from "react";
import type {LoginFormData, LoginFormAction} from "./form.type.ts";
import * as React from "react";

const initialState: LoginFormData = {
    username: '',
    password: '',
    loggedIn: false,
}

const loginReducer = (_state: LoginFormData, action: LoginFormAction) => {
    switch (action.type) {
        case 'login': {
            return {
                username: action.payload.username,
                password: action.payload.password,
                loggedIn: true,
            }
        }
        case 'logout': {
            return initialState;
        }
        default: {
            return initialState;
        }
    }
}

const LoginForm = () => {
    const [state, dispatch] = useReducer(loginReducer, initialState);

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const username = formData.get('username') as string;
        const password = formData.get('password') as string;

        dispatch({
            type: 'login',
            payload: {
                username,
                password,
            },
        })
    }

    const logout = () => {
        dispatch({ type : 'logout' });
    }

    return (
        <>
            {state.loggedIn ? (
                <div>
                    <p>환영합니다 {state.username}!</p>
                    <button onClick={logout}>
                        Logout
                    </button>
                </div>
            ) : (
                <form onSubmit={login}>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            )}
        </>
    )
}

export default LoginForm;