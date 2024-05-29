
function validateUser(values) {
    const errors = {
        userName : '',
        email : '',
        password : '',
        passwordConfirm : ''
    };
    if(!values.userName.trim()){
        errors.userName = "이름을 입력하세요"
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = '올바른 이메일 형식이 아닙니다,';
    }
    if (!(values.password.length >= 8 && values.password.length < 20)) {
        errors.password = '비밀번호는 8~20자 사이로 입력해 주세요';
    }
    if (values.password !== values.passwordConfirm) {
        errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }
    return errors
}

export {validateUser}
