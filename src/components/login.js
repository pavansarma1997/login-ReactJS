import "../styles/login.scss";

const Login = () => {
    return (
        <div>
            <h1>Log-in</h1>
            <form className="login">
                <label>Email:</label>
                <input type="email" />
                <label>Password:</label>
                <input type="password" />
                <input type={"submit"}
             />
            </form>
        </div>
    )
}

export default Login;