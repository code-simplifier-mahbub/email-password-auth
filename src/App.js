import './App.css';
import RegisterReactBootstrap from './component/RegisterReactBootstrap';

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
  
    <div className="">
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
