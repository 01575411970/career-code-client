
import { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';

const Register = () => {

    const { createUser } = use(AuthContext);

    // const handleRegister = e => {
    //     e.preventDefault();
    //     const form = e.target;

    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password)

    // }
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        // const firstName = form.firstName.value;
        // const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(firstName, lastName, email, password);

        // create user  
        createUser(email, password)
            .then((result) => {
                // Signed up 
                console.log(result.user)
                
            })
            .catch((error) =>{
                console.log(error)
            })
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1>  */}

                    {/* /// kaj kan kore na  */}
                    {/* <img src="../../assets/register.jpg" alt="" /> */}

                </div>
                <div className="card bg-base-100 hover:shadow-blue-800  w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                {/* <label className="label">Fast Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="input"
                                    placeholder="Fast name" />

                                <label className="label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="input"
                                    placeholder="Last Name" /> */}

                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="Email" />

                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password" />

                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-blue-600 btn-neutral mt-4">Register </button>
                            </fieldset>
                        </form>
                        {/* <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    className="input"
                                    placeholder="First name"
                                />

                                <label className="label">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    className="input"
                                    placeholder="Last Name"
                                />

                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="Email"
                                />

                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="Password"
                                />

                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;