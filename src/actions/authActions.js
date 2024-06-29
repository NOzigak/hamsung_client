import { UserLogin, UserSignup } from "../api/AuthAPI";

const SIGNUP_REQUEST = "auth/SIGNUP_REQUEST";
const SIGNUP_SUCCESS = "auth/SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "auth/SIGNUP_FAILURE";

const LOGIN_REQUEST = "auth/LOGIN_REQUEST";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

export const login = ({email, password}) => async (dispatch) => {
    dispatch({type: LOGIN_REQUEST});
    try{
        // 로그인 API 호출
        const response = await UserLogin({email, password});
        dispatch({type:LOGIN_SUCCESS, payload: response})
    } catch (error) {
        console.log("로그인 실패", error);
        dispatch({type:LOGIN_FAILURE, payload: error.message, error: true});
    }
}

export const signup = (userInfo) => async (dispatch) => {
    dispatch({type: SIGNUP_REQUEST});
    try{
        //회원가입 API 호출
        const response = await UserSignup(userInfo);
        dispatch({type:SIGNUP_SUCCESS, payload: response});
    } catch (error) {
        console.log("회원가입 실패", error);
        dispatch({type:SIGNUP_FAILURE, payload: error.message, error: true});
    }
}