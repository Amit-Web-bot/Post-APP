import { useRef,useState } from "react";
import "./form.scss";
import { Auth } from "../auth/auth-model"

export const LoginSignup = ({setIsLoggedIn}) => {
  const [toggleForm, setToggleForm] = useState(true);

  const authModel = useRef(new Auth());

  const login = (event) => {
    // Handle Login
    event.preventDefault();
    const logininfo = {
        email: event.target.email.value,
        password: event.target.password.value
    };
    (async function (){
        let {success} = await authModel.current.login(logininfo);
        setIsLoggedIn(success);
    })();
  };

  const signup = (event) => {
    // handle signup
    event.preventDefault();
    const signupInfo = {
        email : event.target.email.value,
        firstname : event.target.firstname.value,
        lastname : event.target.lastname.value,
        password : event.target.password.value,
        role : event.target.role.value
    }
    authModel.current.signup(signupInfo);
  };

  return (
    <div className="form-container">
      {!toggleForm ? (
        <form onSubmit={login} key="1">
          <input
            type="email"
            name="email"
            placeholder=" Email"
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          <button> Login </button>
        </form>
      ) : (
        <form onSubmit={signup} key="2">
          <input name="firstname" placeholder="First Name" required></input>
          <input name="lastname" placeholder="Last Name" required></input>
          <input type="email" name="email" placeholder="Email" required></input>
          <input
            type="password"
            name="email"
            placeholder="Password"
            required
          ></input>
          <select name= "role">
            <option value="STUDENT">Student</option>
            <option value="ADMIN">Admin</option>
          </select>
          <button>Sign Up</button>
        </form>
      )}
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
      >
        {toggleForm ? "Login" : "Signup"}
      </button>
    </div>
  );
};
