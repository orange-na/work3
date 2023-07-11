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
                const res = await axios.get(`http://localhost:8800/api/posts${ cat }`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [cat])

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
        <main>
                {posts.map((post) => {
                    return (
                        <div key={post.id} className="flex w-10/12 mx-auto py-5 mb-20">
                            <div className="mr-20 w-1/3 relative">
                                <img src={post.img ? `../upload/${post?.img}`: null} alt="" />
                                <div className="bg-green-300 absolute w-full h-full top-6 left-6 -z-30"></div>
                            </div>
                            <div className="w-2/3">
                                <Link href={`/post/${post.id}`}>
                                    <h2 className="text-3xl font-bold">{post.title}</h2>
                                </Link>
                                <p className="my-3">{post.desc}</p>
                                <button className="py-2 px-4 bg-green-300 rounded-lg">Read More</button>
                            </div>
                        </div>
                    )
                })}
        </main>
    )
  }
  