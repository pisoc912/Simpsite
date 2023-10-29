// "use client"

// import { useSession, signIn, signOut } from "next-auth/react";
// import { useEffect } from "react";

// export default function AuthStatus() {
//     const { data: session, status } = useSession()
//     useEffect(() => {

//         if (
//             status != "loading" &&
//             session &&
//             session?.error === "RefreshAccessTokenError"
//         ) {
//             signOut({ callbackUrl: "/" });
//         }
//     }, [session, status]);


//     if (status == "loading") {
//         return <div className="my-3">Loading...</div>;
//     } else if (session) {
//         return (
//             <div className="my-3">
//                 Logged in as <span className="text-yellow-100">{session.user.email}</span>{" "}
//                 <button
//                     className="bg-blue-900 font-bold text-white py-1 px-2 rounded border border-gray-50"
//                     onClick={() => {
//                         keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
//                     }}>
//                     Log out
//                 </button>
//             </div>
//         );
//     }
//     return (
//         <div>
//             Not logged in.{" "}
//             <button onClick={() => signIn('keycloak')}>Log in</button>
//         </div>
//     )
// }