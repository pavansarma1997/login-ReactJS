import "../styles/registration.scss";

const Registration = () => {


    // const onSubmit = (data) => {
    //     localStorage.setItem(data.email, JSON.stringify({
    //         name: data.name, password: data.password
    //     }));
    //     console.log(JSON.parse(localStorage.getItem(data.email)));
    // };



    return (
        <div className="main">
            <h1 className="title">Registration Form</h1>
            <div className="registration">
                <form className="form">
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your Name" />
                    <label>Email:</label>
                    <input type="email" placeholder="abc@gmail.com" />
                    <label>Password:</label>
                    <input type="password" placeholder="*********" />
                    <label>phone:</label>
                    <input type="text" placeholder="123456789" />
                    <input type={"submit"} onClick={onchange} />
                    <p>Already have an account <a href="">login</a></p>
                </form>
                <img src="https://res.cloudinary.com/cliqtick/image/upload/v1678959844/students/test_rwctqg.jpg" alt="" />
            </div>
        </div>
    )
}



export default Registration;