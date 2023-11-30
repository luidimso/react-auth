import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password")
  };

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(authData)
  });

  if(response.status === 422 || response.status === 401) {
    return response;
  }

  if(!response.ok) {
    throw json({
      message: "Could not athenticate User. Internal server erro.",
      status: 500
    })
  }

  const responseData = await response.json();
  const token = responseData.token;

  localStorage.setItem("token", token);
  
  return redirect("/");
}