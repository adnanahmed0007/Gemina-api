import { useContext } from "react";
import userContext from "./Contextlogin";
import "./login.css";
export default function Login() {
  const {
    name,
    setName,
    gmail,
    setGmail,
    password,
    setPassword,
    click,
    setClick,
  } = useContext(userContext);

  return (
    <div className="Login">
      <div className="heading-Login">
        <h2>Login to enter the world of gemina-Api </h2>
      </div>
      <div className="Form">
        <div className="name">
          <input
            type="text"
            placeholder="enter Your username"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="Email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter your email"
            onChange={(e) => setGmail(e.target.value)}
          />
        </div>
        <div className="password">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="button1">
        <button onClick={() => setClick(!click)}>Submit</button>
      </div>
      <div className="form-input">
        {" "}
        {click && gmail && password && !name && (
          <div>
            <p>your gmail is there:{gmail}</p>
            <p>your password is there:.....</p>
            <p>your username is not there:</p>
            <p>Fill up all the detail : </p>
          </div>
        )}{" "}
        {click && !gmail && password && name && (
          <div>
            <p>your username is there:{name}</p>
            <p>your password is there:.....</p>
            <p>your gmail is not there:</p>
            <p>Fill up all the detail : </p>
          </div>
        )}{" "}
        {click && gmail && !password && name && (
          <div>
            <p>your gmail is there:{gmail}</p>
            <p>your password is not there:.....</p>
            <p>your username is there: {name} </p>
            <p>Fill up all the detail : </p>
          </div>
        )}{" "}
        {click && gmail && password && name && (
          <div>
            <p>your gmail is there:{gmail}</p>
            <p>your password is there:.....</p>
            <p>your username is there: {name} </p>
            <p>Congrats you have filled all of your details</p>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
