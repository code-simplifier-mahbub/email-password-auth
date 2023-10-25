import './App.css';

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email, password)
}

const handleChange= (event) =>{
  console.log(event.target.value)
}

function App() {
  return (
  
    <div className="App">
      <form onSubmit={handleRegister}>
        <input onChange={handleChange} type="email" name="email" id="" placeholder='Your email'/>
        <input type="password" name="password" id="" placeholder='Your password' />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default App;
