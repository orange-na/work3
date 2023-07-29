import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });



export default function Write() {
  const router = useRouter();
  const [value, setValue] = useState(router.query?.desc || '');
  const [title, setTitle] = useState(router.query?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(router.query?.cat || '');
  const [currentUser, setCurrentUser] = useState({});

  

  console.log(router.query);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('https://social-app-express.onrender.com/api/upload', formData)
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || null);
    setCurrentUser(storedUser);
  },[])



  console.log(value);
  console.log(title);
  console.log(file);
  console.log(cat);


  const handlePublish = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      router.query.id ? await axios.put(`https://social-app-express.onrender.com/api/posts/${ router.query.id }`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : '',
      })
      : await axios.post('https://social-app-express.onrender.com/api/posts/', {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : '',
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        uid: currentUser.id,
      })
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  }

  

    return (
      <>
      <Navbar />

      <div className="flex w-10/12 mx-auto py-5 mb-20 pt-28 min-h-screen">
        <div className="w-2/3">
          <input type="text" value={ title } placeholder="title" className="border-2 p-3 w-full mb-4" onChange={ (e) => setTitle(e.target.value) }/>
          <div className="h-72">
            <ReactQuill className="h-full" value={value} onChange={setValue}/>
          </div>
        </div>
        <div className="ml-6">
          <div className="py-5 px-10 flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center">Upload</h1>

            <input className="hidden" type="file" id="file" onChange={ (e) => setFile(e.target.files[0]) }/>
            { file ? 
            <label htmlFor="file" className="border-2 py-2 px-4 text-center rounded-lg duration-200 bg-green-300 cursor-pointer text-white">Uploded</label>
            : <label htmlFor="file" className="border-2 py-2 px-4 text-center rounded-lg duration-200 hover:bg-gray-100 cursor-pointer">Select Picture</label>
            }

            <h1 className="text-2xl font-bold mb-1 text-center mt-3">Category</h1>
            <div className="p-3 px-10 border-2 flex flex-col gap-1 rounded-md">
              <div className="">
                <input className="mr-2 cursor-pointer" type="radio" checked={ cat === 'art' } name="cat" value='art' id="art" onChange={ (e) => setCat(e.target.value) } />
                <label className="cursor-pointer" htmlFor="art">art</label>
              </div>
              <div className="">
                <input className="mr-2 cursor-pointer" type="radio" checked={ cat === 'sience' } name="cat" value='sience' id="sience" onChange={ (e) => setCat(e.target.value) } />
                <label className="cursor-pointer" htmlFor="sience">sience</label>
              </div>
              <div className="">
                <input className="mr-2 cursor-pointer" type="radio" checked={ cat === 'technology' } name="cat" value='technology' id="technology" onChange={ (e) => setCat(e.target.value) } />
                <label className="cursor-pointer" htmlFor="technology">technology</label>
              </div>
              <div className="">
                <input className="mr-2 cursor-pointer" type="radio" checked={ cat === 'cinema' } name="cat" value='cinema' id="cinema" onChange={ (e) => setCat(e.target.value) } />
                <label className="cursor-pointer" htmlFor="cinema">cinema</label>
              </div>
              <div className="">
                <input className="mr-2 cursor-pointer" type="radio" checked={ cat === 'design' } name="cat" value='design' id="design" onChange={ (e) => setCat(e.target.value) } />
                <label className="cursor-pointer" htmlFor="design">design</label>
              </div>
              <div className="">
                <input className="mr-2 cursor-pointer" type="radio" checked={ cat === 'food' } name="cat" value='food' id="food" onChange={ (e) => setCat(e.target.value) } />
                <label className="cursor-pointer" htmlFor="food">food</label>
            </div>
          </div>
          <div className="mt-3">
              <button className="bg-blue-400 border-2 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-500 w-full" onClick={ handlePublish }>Publish</button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      </>
    ) 
  }
  