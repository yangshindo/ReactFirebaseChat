import React from "react"
import swal from 'sweetalert';
import { GoogleOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {

  swal("Bem vindo! Para finalidades de teste e avaliação, aconselho logar duas contas google pois o chat é privado e assim é possível experimentar as funcionalidades de criar uma nova conversa e convidar os usuários logados para testar os recursos de troca de mensagens.")

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
