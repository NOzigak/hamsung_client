import "./AuthInput.css";

const AuthInput = ({text, type, value, onChange, error, name}) => {

    return (
        <div className="InputField">
            <input
            name={name}
            onChange={onChange} 
            className="AuthInput"
            placeholder={text}
            type = {type}
            value={value}
            />
            {Boolean(error) && <span>{error}</span>}
        </div>


    );
};

export default AuthInput;