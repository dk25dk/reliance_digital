import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export function Login() {
    // const naviagte = useNavigate();
    return (
        <div>
            <div className='flex'>
                <div className="flex gap-3 m-2">
                    <img src="	https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg" alt="sales-poster" />
                </div>
                <div className="border-2 p-2 m-2">
                    <div>
                        <header>Login / Register</header>
                        <form >
                            <input
                                className='border-2'
                                type="email"
                                name=""
                                id="email"
                                placeholder="Enter Mail Address"
                                // ref={eMailRef}
                                required
                            />
                            <input
                                className='border-2'
                                type="password"
                                name=""
                                id="password"
                                placeholder="Enter Password"
                                // ref={passWordRef}
                                required
                            />
                            <button className='bg-blue-950 text-white'>PROCEED</button>
                        </form>
                        <section>
                            <p>Not a Registered User?</p>
                            <Link to="/register">SIGN UP</Link>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
