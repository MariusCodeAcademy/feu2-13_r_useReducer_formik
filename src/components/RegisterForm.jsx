import { useReducer, useState } from 'react';

const initFormValues = {
  email: '',
  password: '',
  repeatPassword: '',
  feedback: '',
  doPasswordsMatch: false,
};
// sukurti switch
// padaryti kad email reiksme susipildytu ivedant
function registerReducer(state, action) {
  console.log('action ===', action);
  switch (action.type) {
    case 'passMatch':
      const arePassTheSame = state.password === state.repeatPassword;
      return { ...state, doPasswordsMatch: arePassTheSame };
    case 'feedback':
      return { ...state, feedback: action.payload };
    case 'email':
      return {
        ...state,
        email: action.payload,
      };
    case 'password':
      return { ...state, password: action.payload };
    case 'repeatPassword':
      return { ...state, repeatPassword: action.payload };
    default:
      console.warn('tokio tipo action nera');
      return initFormValues;
  }
}

function RegisterForm(props) {
  const [state, dispatch] = useReducer(registerReducer, initFormValues);
  // const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);

  const submitHandler = (e) => {
    // padaryti kad forma neperkrautu psl
    e.preventDefault();
    // patikrinti ar sutampa slaptazodziai
    dispatch({ type: 'passMatch' });
    // pranesti vartotojui ar sutampa ar ne su tekstu virs formos

    if (state.doPasswordsMatch) {
      dispatch({ type: 'feedback', payload: 'Passwords match OK' });
    } else {
      dispatch({
        type: 'feedback',
        payload: 'please check passwords do not match!!!',
      });
    }
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
        <h3>{state.feedback}</h3>
        <input
          onChange={(e) =>
            dispatch({ type: 'password', payload: e.target.value })
          }
          value={state.password}
          type='password'
          placeholder='password'
        />
        <input
          onChange={(e) =>
            dispatch({ type: 'repeatPassword', payload: e.target.value })
          }
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
          <p>Email: {state.email}</p>
          <p>Password: {state.password}</p>
          <p>Repeat Password: {state.repeatPassword}</p>
          <p>Do they match: {state.doPasswordsMatch.toString()}</p>
        </>
      )}
    </div>
  );
}
export default RegisterForm;
