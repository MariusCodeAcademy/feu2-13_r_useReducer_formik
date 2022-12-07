//
function RegisterForm(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  // prisideti state pakartotiniam slaptazodziui

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
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          type='text'
          placeholder='email'
        />
        <input
          onChange={(e) => setPasswordValue(e.target.value)}
          value={passwordValue}
          type='password'
          placeholder='password'
        />
        <input type='password' placeholder='repeat password' />
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
