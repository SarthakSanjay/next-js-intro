import axios from "axios";
import Image from "next/image";

async function getUserDetails() {
  await new Promise((r)=>{
    setTimeout(r,5000)
  })
  const response = await axios.get("http://localhost:3000/api/user")
	return response.data;
}
//make this async component
export default async function Home() {
  const userDetails = await getUserDetails()
  return (
    <div className="h-screen w-screen bg-black text-white flex justify-center items-center">Hello
      <div>{userDetails.email}</div>
      <div>{userDetails.username}</div>
    </div>
  );
}
