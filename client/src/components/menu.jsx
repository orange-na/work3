import Link from "next/link"


export function Menu() {
    const posts = [
        {
            id:1,
            title:"fdfdfdfdf",
            desc:"fddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdf",
            img:"../img/tree.jpg",
            
        },
        {
            id:2,
            title:"fdfdfdfdf",
            desc:"fddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdf",
            img:"../img/tree.jpg",
            
        },
        {
            id:3,
            title:"fdfdfdfdf",
            desc:"fddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdf",
            img:"../img/tree.jpg",
            
        },

    ]

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
  