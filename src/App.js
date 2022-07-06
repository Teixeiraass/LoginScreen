import React from "react";
import { useRef, useState } from "react";
import { signUp, logIn, useAuth, LogOut } from "./firebase";
import "./App.css"

export default () => {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp(){
    setLoading(true);
    try{
      await signUp(emailRef.current.value, passwordRef.current.value);
    } catch{
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogIn(){
    setLoading(true);
    try{
      await logIn(emailRef.current.value, passwordRef.current.value);
    } catch{
      alert("Error!");
    }
    setLoading(false);
  }


  async function handleLogOut(){
    setLoading(true)
    try{
      await LogOut()
    } catch{
      alert("Error")
    }
    setLoading(false)
  }

  return(
    <div className="login">
      <h2>Log in or register</h2>
      <div className="mensagem">O login atual é: { currentUser?.email }</div>
      <div className="menus">
        <input ref={emailRef} type="email" placeholder="Email"/>
        <input ref={passwordRef} type="password" placeholder="Senha" />
      </div>
      <div className="btn">
        <button disabled={loading || currentUser} onClick={handleSignUp}>Sign up</button>
        <button disabled={loading || currentUser} onClick={handleLogIn}>Log in</button>
        <button disabled={loading || !currentUser} onClick={handleLogOut}>Log out</button>
      </div>
    </div>  
  );
}

