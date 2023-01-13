import React from 'react'

const SignIn = () => {
  return (
    <div className='signinpage'>
        <div className='formcontainer'>
            <form>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <div className='linkcontainer'>
                    <a href="#">FORGOT PASSWORD</a>
                    <a href="#">SIGN UP</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignIn
