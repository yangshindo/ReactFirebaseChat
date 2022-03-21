import React from "react"

import { GoogleOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
      <img src="https://i.imgur.com/VSv1wle.png" height="200px" width="200px" alt="Palico"></img>
        <h1>Welcome to Palico Chat!</h1>
        <br /> <br />
        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  )
}
