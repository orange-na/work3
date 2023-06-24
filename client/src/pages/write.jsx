import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { useState } from "react";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });



export default function Write() {
  const [value, setValue] = useState('');
  console.log(value);
  

    return (
      <>
      <Navbar />

      <div className="flex w-10/12 mx-auto py-5 mb-20">
        <div className="w-2/3">
          <input type="text" placeholder="title" className="border-2 p-3 w-full mb-4" />
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
            <input className="hidden" type="file" id="file"/>
            <label htmlFor="file" className="underline">Upload file</label>
            <div className="">
              <button className="bg-white border-2 border-green-500 text-green-500 px-4 py-2 rounded-lg mr-24">Save as a draft</button>
              <button className="bg-green-500 border-2 text-white px-4 py-2 rounded-lg">Upload</button>
            </div>
          </div>
          <div className="p-5 border-2 flex flex-col gap-1 mt-5">
            <h1 className="text-3xl font-bold mb-3">Category</h1>
            <div className="">
            <input className="mr-2" type="radio" name="cat" value='art' id="art" />
            <label htmlFor="art">art</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" name="cat" value='sience' id="sience" />
            <label htmlFor="sience">sience</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" name="cat" value='technology' id="technology" />
            <label htmlFor="technology">technology</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" name="cat" value='cinema' id="cinema" />
            <label htmlFor="cinema">cinema</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" name="cat" value='design' id="design" />
            <label htmlFor="design">design</label>
            </div>
            <div className="">
            <input className="mr-2" type="radio" name="cat" value='food' id="food" />
            <label htmlFor="food">food</label>
          </div>
          </div>
        </div>
      </div>

      <Footer />
      </>
    )
  }
  