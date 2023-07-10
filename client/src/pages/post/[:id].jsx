import { Footer } from "@/components/footer";
import { Menu } from "@/components/menu";
import { Navbar } from "@/components/navbar";
import { AuthContext } from "@/context/authContext";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Single() {


  const [post, setPost] = useState({});

  const  { currentUser } = useContext(AuthContext);

  const router = useRouter();
  const postId = router.asPath.split("/")[2];

  console.log(postId)

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:8800/api/posts/${ postId }`);
              setPost(res.data[0]);
              console.log(res.data[0])
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${ postId }`);
      router.push('/');
  } catch (err) {
      console.log(err);
  }
}

  return (
    <>
    <Navbar />

    <div className="flex w-10/12 mx-auto py-5 mb-20">
      <div className="w-8/12">
        <div className="h-48">
          <img className="w-full h-full object-cover" src={ post?.img } alt="" />
        </div>
        <div className="flex gap-2 my-6">
{  post?.userImg && (<div className="w-14 h-14 mr-3">
            <img className="w-full h-full rounded-full" src={ post?.userImg } alt="" />
          </div>)}
          <div className="">
            <span className="font-bold">{ post?.username }</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>

{ post?.username &&
(<>
<Link href='/write?edit=2'><button className="w-14 h-14 rounded-full bg-blue-300 font-bold cursor-pointer">edit</button></Link>
<button className="w-14 h-14 rounded-full bg-red-300 font-bold cursor-pointer" onClick={ handleDelete }>delete</button>
</>)}
        </div>
        <h1 className="font-bold text-4xl mb-5">{ post?.title }</h1>
        { post?.desc }
      </div>
      <Menu cat={ post?.cat }/>

    </div>

    <Footer />
    </>
  )
}
