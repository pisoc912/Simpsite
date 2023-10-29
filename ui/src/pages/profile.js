// import axios from 'axios'
// import { Router } from 'next/router'
// import React, { useEffect, useState } from 'react'
// import { getcookie, validateLoginDetails } from './api/validateUser'
// import Navbar from '../components/Navbar'
// import ProfileForm from '../components/ProfileForm'
// import { useSession } from 'next-auth/react'
// import { cookies } from 'next/dist/client/components/headers'

// const profile = () => {
//     const [loading, setLoading] = useState(true)
//     const [url, setUrl] = useState(null)



//     useEffect(() => {
//         const checkAuth = async () => {
//             const userinfo = localStorage.getItem('user')
//             const token = JSON.parse(userinfo).token
//             const id = JSON.parse(userinfo).id
//             console.log("profile", token);


//             if (!token) {
//                 console.log("No token");
//                 return
//             }
//             try {
//                 const response = await axios.get(`http://localhost:8888/findHistory/${id}`, {
//                     headers: { Authorization: `Bearer ${token}` }
//                 })
//                 setUrl(response.data)
//                 console.log(response);
//                 setLoading(false)
//             } catch {
//                 console.log("error");
//             }
//         }
//         checkAuth()
//     }, [])

//     if (loading) {
//         return <div>Loading</div>
//     }
//     return (
//         <div>
//             <Navbar />
//             <div className='min-h-screen flex items-center justify-center bg-gray-100'>
//                 <div className='px-52 py-20 mt-10 bg-white rounded-lg shadow-lg'>
//                     <h2 className='text-2xl font-bold mb-4 text-center text-blue-600'>Search History</h2>
//                     <table className='w-full text-left table-auto border-collapse'>
//                         <thead>
//                             <tr className='border-b'>
//                                 <th className='py-4 px-6 bg-blue-200'>Long URL</th>
//                                 <th className='py-4 px-6 bg-blue-200'>Short URL</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {url.map(u => (
//                                 <tr key={u.id} className='border-b hover:bg-gray-100'>
//                                     <td className='py-4 px-6'>{u.longUrl}</td>
//                                     <td className='py-4 px-6'>{u.shortUrl}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default profile