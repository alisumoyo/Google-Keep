import React from 'react'
import { useState } from 'react'
import '../Login/loginmodule.css'
import Link from 'next/link'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../../../firebase/firebaseconfig'

function Login() {
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [Email, setEmail] = useState("");

    const SubmitForm = async (e) => {
        e.preventDefault();
        try {
            const userdata = await signInWithEmailAndPassword(
                auth,
                Email,
                password,
            )
            alert("sign in success")
            router.push("signin");
            console.log("hello there")
        }
        catch (error) {

            alert(error.message)

        }
    };

    const isFormValid = Email.trim() !== '' && password.trim() !== '';
    return (
        <div>
            <div class="signup-container">
                <h2>Login page</h2>
                <form onSubmit={SubmitForm}>

                    <div class="form-group">

                        <label for="email">Email:</label>
                        <input id="email" name="email" required
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            value={Email}>
                        </input>
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input id="password" name="password" required
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            value={password}>

                        </input>
                    </div>
                    <div className="form-group">
                        <Link href={'/'}>
                            <button type="submit" disabled={!isFormValid}>
                                Log In
                            </button>
                        </Link>
                    </div>



                    <div className='p'>
                        <p>Dont have account plaese signup</p>
                        <Link href={'signup'}>Signup</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login






// import React from 'react';
// import { useState } from 'react';
// import Link from 'next/link';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { useRouter } from 'next/router';
// import { auth } from '../../../firebase/firebaseconfig';

// function Login() {
//   const router = useRouter();

//   const [password, setPassword] = useState('');
//   const [Email, setEmail] = useState('');

//   const SubmitForm = async (e) => {
//     e.preventDefault();
//     try {
//       const userdata = await signInWithEmailAndPassword(auth, Email, password);
//       alert('sign in success');
//       router.push('signin');
//       console.log('hello there');
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   const isFormValid = Email.trim() !== '' && password.trim() !== '';

//   return (
//     <div>
//       <div className="signup-container">
//         <h2>Login page</h2>
//         <form onSubmit={SubmitForm}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               id="email"
//               name="email"
//               required
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               value={Email}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               id="password"
//               name="password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               value={password}
//             />
//           </div>
//           <div className="form-group">
//             <Link href={'/'}>
//               <button type="submit" disabled={!isFormValid}>
//                 Log In
//               </button>
//             </Link>
//           </div>
//           <div className="p">
//             <p>Dont have an account? Please sign up</p>
//             <Link href={'signup'}>Signup</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
