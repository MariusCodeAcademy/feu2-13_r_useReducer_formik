import { useReducer } from 'react';

const initFormValues = {
  email: '',
  password: '',
  repeatPassword: '',
};
// prisideti argumentus,
// sukurti switch
// padaryti kad email reiksme susipildytu ivedant
function registerReducer() {}

function RegisterForm(props) {
  const [state, dispatch] = useReducer(registerReducer, initFormValues);

  const submitHandler = (e) => {
    // padaryti kad forma neperkrautu psl
    // patikrinti ar sutampa slaptazodziai
    // pranesti vartotojui ar sutampa ar ne su tekstu virs formos
  };

  return (
    <div>
      <h2>Register here</h2>
      <form onSubmit={submitHandler} className='card'>
        <input
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
          value={state.email}
          type='text'
          placeholder='email'
        />
        <input
          onChange={(e) => setPasswordValue(e.target.value)}
          value={state.password}
          type='password'
          placeholder='password'
        />
        <input
          value={state.repeatPassword}
          type='password'
          placeholder='repeat password'
        />
        <button type='submit'>Login</button>
      </form>
      {!props.hideDebug && (
        <>
          <hr />
          <h3>Debug values</h3>
          <p>Email: {emailValue}</p>
          <p>Password: {passwordValue}</p>
          <p>Repeat Password: </p>
        </>
      )}
    </div>
  );
}
export default RegisterForm;
