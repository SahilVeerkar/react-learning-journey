function Login(){
const isLoggedIn = true;
return(<>
{isLoggedIn===true?<h1>Welcome</h1>:<h1>Login First</h1>}
</>)
}
export default Login;