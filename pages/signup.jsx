import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Signup = () => {
  const { router } = useRouter();
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    username: '',
    password: '',
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    let res = await signup(data.email, data.username, data.password);
    console.log(res)
    if(res != 'success'){
      alert(res)
    }else{
      router.push('/');
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <form onSubmit={(e) => { handleSignup(e) }}>
        <div id="formBasicEmail">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </div>

        <div id="formBasicUsername">
          <label>Username</label>
          <input
            type="text"
            placeholder="choose a username"
            required
            onChange={(e) =>
              setData({
                ...data,
                username: e.target.value,
              })
            }
            value={data.username}
          />
        </div>

        <div id="formBasicPassword">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </div>

        <button type="submit">
          Signup
        </button>
      </form>
    </div>
  )
}

export default Signup
