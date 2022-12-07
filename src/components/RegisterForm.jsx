import { useReducer } from 'react';

const initFormValues = {
  email: '',
  password: '123',
  repeatPassword: '',
};
// sukurti switch
// padaryti kad email reiksme susipildytu ivedant
function registerReducer(state, action) {
  console.log('action ===', action);
  switch (action.type) {
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
        </>
      )}
    </div>
  );
}
export default RegisterForm;
