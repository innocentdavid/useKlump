import React, { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Signup = () => {
  const { router } = useRouter();
  const { user, signup } = useAuth()
  console.log(user)
  const [data, setData] = useState({
    username: '',
    fName: '',
    lName: '',
    email: '',
    pNumber: '',
    industry: '',
    country: '',
    password: '',
  })

  const handleSignup = async (e) => {
    e.preventDefault()

    let res = await signup(data.email, data.username, data.password);
    console.log(res)
    if (res != 'success') {
      alert(res)
    } else {
      router.push('/');
    }
  }

  return (

    <div style={{ background: '#F7FAFC', paddingTop: 220, height: '100%' }}>
      <div className="flex justify-center mx-auto h-screen align-center">
        <section className="flex flex-col space-y-9 my-4 container-width">
          <center className="flex justify-center mb-4 cursor-pointer">
            <Link href="/"><a>
              <svg xmlns="http://www.w3.org/2000/svg" width={109} height={60} viewBox="0 0 109 60" fill="none">
                <path d="M21.6712 26.8653H15.5776L5.25627 38.7697V26.8653H0V52.002H5.25627V44.6029L8.8493 40.5307L15.9583 52.002H21.9758L12.6211 37.1441L21.6712 26.8653Z" fill="#253065" /><path d="M31.0015 48.537C30.2904 48.537 29.7828 48.3597 29.4779 48.0036C29.1733 47.6485 29.0209 47.0266 29.0209 46.1377V24.619H23.803V46.7089C23.803 48.6895 24.2282 50.1308 25.079 51.0317C25.9295 51.933 27.2816 52.3838 29.1353 52.3838C29.7694 52.3838 30.4114 52.3133 31.0585 52.1743C31.7061 52.0343 32.2454 51.8379 32.6772 51.5838L33.1342 48.1564C32.7024 48.2836 32.347 48.3787 32.0677 48.4416C31.7883 48.5052 31.4329 48.537 31.0015 48.537Z" fill="#253065" /><path d="M47.4162 43.2047C47.4162 44.0942 47.3021 44.8613 47.0736 45.5089C46.8447 46.1564 46.5339 46.684 46.1405 47.0898C45.7464 47.4961 45.2959 47.7944 44.7884 47.9849C44.2802 48.175 43.7602 48.2705 43.2268 48.2705C42.0842 48.2705 41.2082 47.9849 40.599 47.4134C39.9895 46.842 39.6849 45.8204 39.6849 44.3473V32.9597H34.467V45.6043C34.467 47.2039 34.7654 48.5052 35.3621 49.5081C35.9585 50.5114 36.7647 51.2408 37.7804 51.6982C38.7958 52.1549 39.9383 52.3838 41.2082 52.3838C42.7566 52.3838 44.0838 52.0847 45.1884 51.4884C46.293 50.8924 47.1621 49.9589 47.7972 48.6895L47.9873 52.0028H52.6341V32.9597H47.4162V43.2047Z" fill="#253065" /><path d="M83.0364 33.3398C82.0082 32.832 80.8715 32.5782 79.6276 32.5782C78.764 32.5782 77.9136 32.7179 77.0759 32.9972C76.2379 33.2769 75.4759 33.6956 74.7907 34.2539C74.1052 34.8126 73.5586 35.5106 73.1531 36.3486C72.5937 35.1051 71.7626 34.1654 70.6584 33.5303C69.5538 32.8959 68.3158 32.5782 66.945 32.5782C65.5988 32.5782 64.3739 32.8959 63.2697 33.5303C62.1648 34.1654 61.2953 35.1175 60.6609 36.3866L60.4701 32.9588H55.7856V52.002H61.0035V41.9091C61.0035 40.6656 61.2134 39.662 61.6321 38.9003C62.0511 38.1387 62.5838 37.5804 63.2313 37.2243C63.8789 36.8693 64.5326 36.6912 65.1929 36.6912C66.1575 36.6912 66.9509 36.9833 67.5732 37.5676C68.1951 38.1515 68.5063 39.1417 68.5063 40.5377V52.002H73.7242V41.757C73.7242 40.6396 73.9081 39.7066 74.2766 38.9574C74.6441 38.2089 75.1527 37.6433 75.7999 37.2627C76.4474 36.8817 77.152 36.6912 77.9136 36.6912C78.8781 36.6912 79.666 36.9833 80.2752 37.5676C80.8843 38.1515 81.1892 39.1417 81.1892 40.5377V52.002H86.3688L86.4071 39.5098C86.432 37.9358 86.1337 36.6407 85.5121 35.625C84.8891 34.6096 84.0646 33.848 83.0364 33.3398Z" fill="#253065" /><path d="M102.079 46.8797C101.279 47.883 100.181 48.3839 98.7847 48.3839C97.8959 48.3839 97.1149 48.1495 96.4425 47.6794C95.7694 47.2099 95.255 46.5305 94.8999 45.6417C94.5442 44.7536 94.3668 43.6995 94.3668 42.4808C94.3668 41.2369 94.5573 40.1766 94.938 39.3002C95.3189 38.4245 95.8455 37.7521 96.5189 37.2819C97.191 36.8125 97.972 36.5774 98.8608 36.5774C100.257 36.5774 101.342 37.0793 102.117 38.0819C102.892 39.0849 103.279 40.5514 103.279 42.4808C103.279 44.4106 102.879 45.8768 102.079 46.8797ZM107.449 37.1295C106.75 35.6699 105.792 34.5459 104.574 33.7591C103.355 32.9722 101.971 32.5785 100.423 32.5785C99.2286 32.5785 98.1497 32.826 97.1851 33.3207C96.2199 33.8161 95.4264 34.4958 94.8049 35.3587C94.5048 35.7746 94.2534 36.2216 94.045 36.6963L93.8334 32.9591H89.1489V60H94.3668V48.6861C94.7962 49.5601 95.3787 50.3282 96.1379 50.974C97.2422 51.9137 98.6323 52.3832 100.308 52.3832C101.882 52.3832 103.285 51.9894 104.516 51.2022C105.748 50.4157 106.719 49.279 107.43 47.7938C108.141 46.3086 108.497 44.5247 108.497 42.4424C108.497 40.3609 108.147 38.5901 107.449 37.1295Z" fill="#253065" /><path d="M60.2232 17.3511L53.2031 15.6999C53.2325 15.5613 53.2667 15.4251 53.3051 15.2865C53.8389 13.3785 55.0157 11.8227 56.5417 10.7915L60.2232 17.3511Z" fill="#5278C4" /><path d="M68.9479 19.7521C67.76 24.0197 63.3037 26.5251 58.9726 25.36C55.1203 24.3218 52.6947 20.6877 53.0287 16.8246L61.2232 18.7527C61.2664 18.762 61.3096 18.7665 61.3528 18.7665C61.5278 18.7665 61.6979 18.6846 61.8068 18.5414C61.9409 18.3599 61.9568 18.1166 61.8475 17.9216L57.5257 10.2221C59.2426 9.37927 61.2688 9.13624 63.2719 9.67901C67.6328 10.8603 70.1696 15.3595 68.9479 19.7521Z" fill="#5278C4" /><path d="M51.495 16.4661C50.4161 19.6024 47.0868 21.4036 43.8706 20.502C40.5749 19.5796 38.5967 16.166 39.4347 12.8478C40.2866 9.46605 43.75 7.44015 47.1501 8.33694C47.8702 8.52812 48.5267 8.82544 49.1058 9.20918L44.8925 14.0561C44.7608 14.2058 44.72 14.415 44.7788 14.6034C44.8403 14.7922 44.997 14.9374 45.1902 14.983L51.495 16.4661Z" fill="#74D2E7" /><path d="M51.7723 15.3643L46.3667 14.0924L49.9895 9.92474C51.4041 11.2945 52.1039 13.2907 51.7723 15.3643Z" fill="#74D2E7" /><path d="M55.7606 9.40203C54.7591 9.85631 53.6144 9.99701 52.5105 9.7111C51.9041 9.55415 51.35 9.27723 50.866 8.91354L53.6732 5.68386L55.7606 9.40203Z" fill="#68C985" /><path d="M58.561 6.13342C58.2886 7.2328 57.6182 8.16624 56.7394 8.82275L54.2683 4.42317C54.1773 4.26414 54.0162 4.15523 53.832 4.13691C53.646 4.11893 53.4665 4.19155 53.3462 4.33018L50.0436 8.12994C49.0237 6.91924 48.5764 5.23387 49.0123 3.63044C49.721 1.01406 52.5079 -0.559995 55.1083 0.185024C57.6317 0.909646 59.1923 3.60105 58.561 6.13342Z" fill="#68C985" />
              </svg>
            </a></Link>
          </center>


          <div className="px-8 py-10 w-100" style={{ background: 'white' }}>
            <div className="text-center">Login to your account</div>
            <br />

            <form onSubmit={handleSignup}>
              <div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="bName" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Business Name</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          username: e.target.value,
                        })
                      }
                      value={data.username}
                      type="text"
                      id="bName"
                      className="form-control py-3"
                      placeholder="Enter your Business Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="fName" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>First Name</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          fName: e.target.value,
                        })
                      }
                      value={data.fName}
                      type="text"
                      id="fName"
                      className="form-control py-3"
                      placeholder="Enter your First Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="lName" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Last Name</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          lName: e.target.value,
                        })
                      }
                      value={data.lName}
                      type="text"
                      id="lName"
                      className="form-control py-3"
                      placeholder="Enter your Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="email" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Email</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          email: e.target.value,
                        })
                      }
                      value={data.email}
                      type="email"
                      id="email"
                      className="form-control py-3"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="pNumber" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Phone Number</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          pNumber: e.target.value,
                        })
                      }
                      value={data.pNumber}
                      type="number"
                      id="pNumber"
                      className="form-control py-3"
                      placeholder="Enter Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="industry" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Industry</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          industry: e.target.value,
                        })
                      }
                      value={data.industry}
                      type="text"
                      id="industry"
                      className="form-control py-3"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-group">
                    <div className="flex justify-between">
                      <label htmlFor="country" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Country</label>
                    </div>

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          country: e.target.value,
                        })
                      }
                      value={data.country}
                      type="text"
                      id="country"
                      className="form-control py-3"
                      placeholder=""
                      required
                    />
                  </div>
                </div>

              </div>

              <div>

                <div className="form-group">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="font-weight-bold block mb-1" style={{ fontSize: 16 }}>Password</label>
                  </div>
                  <div className="position-relative">
                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          password: e.target.value,
                        })
                      }
                      value={data.password}
                      type="password"
                      placeholder="Password"
                      id="password"
                      className="form-control py-3"
                      required
                    />

                  </div>
                </div>
              </div>


              <div>
                <div data-v-3daef832 id="signIn" className="form-group">
                  <button type="submit" className="bg-black cursor-pointer mt-3 py-3 disabled:cursor-default w-full text-white rounded" style={{ outline: 'none' }}>Sign up</button>

                </div></div>
            </form>
          </div>

          <center className="m-5">Already have an account? <a href='/signup'>Login here</a></center>

        </section>
      </div>
    </div>











    // <div
    //   style={{
    //     width: '40%',
    //     margin: 'auto',
    //   }}
    // >
    //   <h1 className="text-center my-3 ">Signup</h1>
    //   <form onSubmit={(e) => { handleSignup(e) }}>
    //     <div id="formBasicEmail">
    //       <label>Email address</label>
    //       <input
    //         type="email"
    //         placeholder="Enter email"
    //         required
    //         onChange={(e) =>
    //           setData({
    //             ...data,
    //             email: e.target.value,
    //           })
    //         }
    //         value={data.email}
    //       />
    //     </div>

    //     <div id="formBasicUsername">
    //       <label>Username</label>
    //       <input
    //         type="text"
    //         placeholder="choose a username"
    //         required
    //         onChange={(e) =>
    //           setData({
    //             ...data,
    //             username: e.target.value,
    //           })
    //         }
    //         value={data.username}
    //       />
    //     </div>

    //     <div id="formBasicPassword">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         placeholder="Password"
    //         required
    //         onChange={(e) =>
    //           setData({
    //             ...data,
    //             password: e.target.value,
    //           })
    //         }
    //         value={data.password}
    //       />
    //     </div>

    //     <button type="submit">
    //       Signup
    //     </button>
    //   </form>
    // </div>
  )
}

export default Signup
