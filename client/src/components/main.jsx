import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"


export function Main() {

    const [posts, setPosts] = useState([]);

    const router = useRouter();
    const cat = router.asPath;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://social-app-express.onrender.com/api/posts${ cat }`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [cat])

    const getText = (html) => {
        if (typeof window !== 'undefined') {
          const doc = new DOMParser().parseFromString(html, 'text/html');
          return doc.body.textContent;
        } else {
          // サーバーサイドレンダリングの場合は別の処理を行う
          return 'Server-side rendering, unable to parse HTML';
        }
      };

    // const posts = [
    //     {
    //         id:1,
    //         title:"fdfdfdfdf",
    //         desc:"fddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdf",
    //         img:"../img/tree.jpg",
            
    //     },
    //     {
    //         id:2,
    //         title:"fdfdfdfdf",
    //         desc:"fddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdf",
    //         img:"../img/tree.jpg",
            
    //     },
    //     {
    //         id:3,
    //         title:"fdfdfdfdf",
    //         desc:"fddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdf",
    //         img:"../img/tree.jpg",
            
    //     },

    // ]
    return (
        <main className="pt-36 pb-10 min-h-screen">
                {posts.map((post) => {
                    return (
                            <div key={post.id} className="flex w-10/12 mx-auto p-8 mb-10 border-2 shadow-lg bg-slate-50 -z-30 hover:opacity-80 duration-200 rounded-lg">
                                <div className="mr-20 w-1/3 relative">
                                    <img src={post.img ? `../upload/${post?.img}`: null} alt="" className="rounded-md"/>
                                    {/* <div className="bg-green-200 absolute w-full h-full top-4 left-4 -z-10"></div> */}
                                </div>
                                <div className="w-2/3">
                                    <Link href={`/post/${post.id}`}>
                                        <h2 className="text-3xl font-bold">{post.title}</h2>
                                    </Link>
                                    <p className="my-3">{getText(post.desc)}</p>
                                    <Link href={`/post/${post.id}`}>
                                        <button className="py-2 px-4 bg-blue-400 rounded-lg hover:bg-blue-500  text-white">Read More</button>
                                    </Link>
                                </div>
                            </div>
                    )
                })}
        </main>
    )
  }
  