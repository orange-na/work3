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
  const router = useRouter().query;
  const [value, setValue] = useState(router?.desc || '');
  const [title, setTitle] = useState(router?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(router?.cat || '');
  const [currentUser, setCurrentUser] = useState({});

  

  console.log(router);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('http://localhost:8800/api/upload', formData)
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user') || null);
    setCurrentUser(storedUser);
  },[])

  console.log(currentUser.id);


  console.log(value);
  console.log(title);
  console.log(file);
  console.log(cat);


  const handlePublish = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      router.id ? await axios.put(`http://localhost:8800/api/posts/${ router.id }`, {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : '',
      })
      : await axios.post('http://localhost:8800/api/posts/', {
        title,
        desc: value,
        cat,
        img: file ? imgUrl : '',
        date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        uid: currentUser.id,
      })
    } catch (err) {
      console.log(err);
    }
  }

  

    return (
      <>
      <Navbar />

      <div className="flex w-10/12 mx-auto py-5 mb-20">
        <div className="w-2/3">
          <input type="text" value={ title } placeholder="title" className="border-2 p-3 w-full mb-4" onChange={ (e) => setTitle(e.target.value) }/>
          <div className="h-72">
            <ReactQuill className="h-full" value={value} onChange={setValue}/>
          </div>
        </div>
        <div className="ml-6">
          <div className="p-5 border-2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold">Publish</h1>
            <span>
              Status: Draft
            </span>
            <span>
              visibility: Draft
            </span>
            <input className="hidden" type="file" id="file" onChange={ (e) => setFile(e.target.files[0]) }/>
            <label htmlFor="file" className="underline">Upload file</label>
            <div className="">
              <button className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg mr-24">Save as a draft</button>
              <button className="bg-green-500 border-2 text-white px-4 py-2 rounded-lg" onClick={ handlePublish }>Publish</button>
            </div>
          </div>
          <div className="p-5 border-2 flex flex-col gap-1 mt-5">
            <h1 className="text-3xl font-bold mb-3">Category</h1>
            <div className="">
            <input className="mr-2" type="radio" checked={ cat === 'art' } name="cat" value='art' id="art" onChange={ (e) => setCat(e.target.value) } />
            <label htmlFor="art">art</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" checked={ cat === 'sience' } name="cat" value='sience' id="sience" onChange={ (e) => setCat(e.target.value) } />
            <label htmlFor="sience">sience</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" checked={ cat === 'technology' } name="cat" value='technology' id="technology" onChange={ (e) => setCat(e.target.value) } />
            <label htmlFor="technology">technology</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" checked={ cat === 'cinema' } name="cat" value='cinema' id="cinema" onChange={ (e) => setCat(e.target.value) } />
            <label htmlFor="cinema">cinema</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" checked={ cat === 'design' } name="cat" value='design' id="design" onChange={ (e) => setCat(e.target.value) } />
            <label htmlFor="design">design</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" checked={ cat === 'food' } name="cat" value='food' id="food" onChange={ (e) => setCat(e.target.value) } />
            <label htmlFor="food">food</label>
          </div>
          </div>
        </div>
      </div>

      <Footer />
      </>
    )
  }
  