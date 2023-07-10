import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export function Menu({ cat }) {

    const [posts, setPosts] = useState([]);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8800/api/posts/?cat=${ cat }`);
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
        <div className="w-4/12 pl-12">
            <h1 className="text-center text-2xl font-bold mb-5">Other  post you may like!!</h1>
            {posts.map((post) => {
                return (
                    <div className="w-full mb-6" key={post.id}>
                        <img src={post.img} alt="" />
                        <h2 className="text-2xl font-bold my-3">{post.title}</h2>
                        <button className="border-2 border-gray-500 p-2 w-full bg-gray-200">Read More</button>
                    </div>
                )
            })}
        </div>
    )
  }
  