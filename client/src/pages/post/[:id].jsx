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

  const { currentUser } = useContext(AuthContext);

  const router = useRouter();
  const postId = router.asPath.split("/")[2];

  console.log(postId)

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:8800/api/posts/${ postId }`);
              setPost(res.data);
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, [postId])
  return (
    <>
    <Navbar />

    <div className="flex w-10/12 mx-auto py-5 mb-20">
      <div className="w-8/12">
        <div className="h-48">
          <img className="w-full h-full object-cover" src="../img/sushi.jpg" alt="" />
        </div>
        <div className="flex gap-2 my-6">
          <div className="w-14 h-14 mr-3">
            <img className="w-full h-full rounded-full" src="../img/isu.jpg" alt="" />
          </div>
          <div className="">
            <span className="font-bold">{ post.username }</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
              <Link href='/write?edit=2'><button className="w-14 h-14 rounded-full bg-blue-300 font-bold cursor-pointer">edit</button></Link>
              <button className="w-14 h-14 rounded-full bg-red-300 font-bold cursor-pointer">delete</button>

        </div>
        <h1 className="font-bold text-4xl mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.  quis dolores aut fuga quam?</h1>
        <p className="leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae voluptatibus magni illum architecto. Tenetur quidem excepturi quam reiciendis labore quisquam natus, facilis facere! Optio doloremque perferendis soluta adipisci vel beatae quaerat, dolor velit sunt labore neque quos? Dolores libero eligendi nobis maiores doloremque officiis doloribus, 
          
          <br />
          <br />

          voluptate deserunt aliquam labore impedit hic velit nemo in. Ea reiciendis expedita, aperiam tempora aspernatur, similique possimus alias reprehenderit omnis nostrum velit, debitis sint et temporibus. Architecto sapiente aspernatur vero blanditiis suscipit nemo perferendis maiores eum saepe neque laborum, itaque deleniti sint ullam. Nulla, quod ratione itaque, harum eligendi hic velit natus deleniti totam repellat quibusdam? Velit incidunt, vero beatae temporibus quisquam nam aliquid distinctio dolorem sint perspiciatis delectus nemo officiis repudiandae aperiam placeat culpa qui! Saepe corporis quaerat ad, labore enim ipsa dolor tempora nisi nobis in deleniti nostrum, quo nesciunt quasi voluptate cupiditate quidem minima. Eos asperiores voluptatum reiciendis rem nisi perferendis, rerum cum animi omnis, ex eaque ipsum, corporis neque.
          <br />
          <br />
           Neque rerum accusantium vero assumenda illo eligendi eos cum aspernatur labore. Sint consequuntur facere minima excepturi nobis libero nulla sit atque blanditiis obcaecati placeat laborum pariatur eveniet quam velit ipsam, delectus veniam iste officia repellendus! Blanditiis dolorem tempora voluptas sed, odit distinctio nulla. Debitis cum quo vel laborum. Porro, totam culpa pariatur expedita iste veniam magnam! Sed similique et distinctio maiores autem officiis consequuntur voluptate laboriosam veniam at vel, fuga aliquam suscipit architecto commodi perferendis libero blanditiis dolorum inventore delectus harum optio iusto facere quidem? Deleniti fuga illum nostrum totam consectetur cupiditate minima eaque, veritatis earum voluptatum aperiam repudiandae beatae error recusandae nam laudantium nisi eveniet quidem voluptas ea adipisci provident? Numquam quas, odit ipsum excepturi atque iusto sapiente est at, maxime quae obcaecati dolores porro id. Aspernatur ad ratione saepe sapiente natus nam accusantium eius non quasi, velit culpa dignissimos tenetur eligendi facere id illum! Numquam, laborum nam quas perferendis officiis, non ipsam, voluptas dolorem odit eum qui eligendi nesciunt iure neque illum autem ducimus dignissimos illo aliquid placeat. Saepe, quos! Magni quidem minus totam inventore sit id dolorum corrupti repudiandae neque deserunt error sed necessitatibus beatae, 
           <br />
           <br />
           saepe recusandae obcaecati nesciunt reiciendis. Amet velit ex totam obcaecati facilis, quaerat ullam alias qui, ab ratione sint numquam! Excepturi, quos dicta! Aperiam deleniti tenetur suscipit repudiandae, sint dicta explicabo obcaecati ex esse! Dolore obcaecati dolorum, non animi ducimus nesciunt iusto, voluptates sed nihil ratione officia molestias, laboriosam vitae deleniti accusamus quo illo ex veniam saepe. Ipsum earum vitae asperiores ratione expedita obcaecati et iure labore nemo facilis alias beatae officia veritatis modi aliquid optio tempore repellat dignissimos aspernatur laborum, voluptates consequatur fugit non. Vel, velit, quas exercitationem, quaerat quisquam praesentium corporis officiis possimus veritatis enim architecto! Iste reprehenderit, alias est provident laudantium quo. Minima adipisci blanditiis eos delectus iure quam culpa pariatur eius veritatis cupiditate numquam fuga architecto provident, ipsa eaque at impedit doloribus odit nam beatae possimus quas consequatur alias tenetur. Autem ipsum laudantium voluptatum voluptate, quae architecto ex, possimus minus fugiat exercitationem est sint aut voluptates et voluptas ea sunt!</p>
      </div>
      <Menu />

    </div>

    <Footer />
    </>
  )
}
