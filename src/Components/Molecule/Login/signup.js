import React, { useState } from 'react'
import '../Login/loginmodule.css'
import Link from 'next/link'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import {doc, setDoc} from 'firebase/firestore'

import {auth, firestore} from '../../../firebase/firebaseconfig'

const Signup = () => {
    const router = useRouter();
    const [Name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [Email, setEmail] = useState("");

    const SubmitForm = async (e) => {
        e.preventDefault();
        try { 

            if(password===passwordConfirm)
            {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    Email,
                    password,
                )
            
            const user =userCredential.user;
            
            const userDocRef= doc(firestore, "users", user.uid);
            const userdata={
                Name,
                Email,
                password

            }

            await setDoc(userDocRef, userdata);
            console.log(userdata)
             alert("success");
            //  router.push("/login");
             router.push("/");
            }
            else
            {
                alert('password doesnt match')

            }
            
               
            
        } catch (error) {
           alert(error.message)
        }
    };
    
    return (
        <div>
            <div class="signup-container">
                <h2>Signup page</h2>

                <form onSubmit={SubmitForm}>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input id="username" name="username" required
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            value={Name}
                        ></input>
                    </div>

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

                    <div class="form-group">
                        <label for="password">Conform Password:</label>
                        <input id="password" name="password" required 
                         onChange={(e) => setPasswordConfirm(e.target.value)}
                         type="password"
                         value={passwordConfirm}></input>
                    </div>
                    <div class="form-group">
                     <button  type='submit' className='button' > Submit</button>
                        {/* <Link href={'login'}>  <button type="submit"  >Sign Up</button> </Link> */}
                    </div>
                    <p>already a user plaes login </p>
                    <Link href={'login'}>LogIn</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup