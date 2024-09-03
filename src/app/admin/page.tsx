// import { useRouter } from "next/navigation";
// import UseGetToken from "../hooks/useGetToken";

// // app/admin/page.tsx

import { redirect } from 'next/navigation';
import UseGetToken from '../hooks/useGetToken';

export default function Page() {
  // Example: Check some condition to determine whether to redirect
  const token = UseGetToken("token");
  if (!token) {
    redirect('/'); // Redirect to the home page
  }

  return <h1>Admin Panel</h1>;
}


// const Page=()=>{
//     // const cookieStore = cookies();
//   const token = UseGetToken("token");
//   const route = useRouter()

//   if(!token){
//     route.push("/")
//     // console.log("token",token)
//   }

//     return(
//         <div>
//         <h1>Server-Side Cookie Access</h1>
//         <p>Cookie Value: {token || 'No cookie found'}</p>
//       </div>
//     )
// }

// export default Page