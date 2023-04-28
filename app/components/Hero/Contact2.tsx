import React from 'react'

function Contact2() {
  return (
    <div>
    <div className="p-24 text-white">
      <h1 className="text-4xl font-bold">Get in Touch.  </h1>
      <br></br>
      <br></br>
      <div className="flex ">
        <ul className="list-none text-3xl gap-3">
          <li className=" hover:text-zinc-900 hover:bg-white ">
            <div className="flex items-center justify-between border border-white p-3 w-17 pl-96 hover:text-zinc-900 hover:bg-white ">
              <div className=" text-white flex items-center hover:text-zinc-900">
                {/* <GmailIcon/> */}
                <button className="hover:text-zinc-900">Gmail</button>
              </div>
              <div className="flex items-center">
                {/* <ArrowUpRightIcon className="h-6 w-6 text-white hover:text-zinc-900" /> */}
              </div>
            </div>
          </li>
          <li>
            <div className="flex grid-cols-2 border border-white p-3 w-17 px-96 ">
              <div>
                <button className="justify-start">Linked In </button>
              </div>
              <div className="justify-end">
                {/* <ArrowUpRightIcon className="h-6 w-6 text-white" /> */}
              </div>
            </div>
          </li>
          <li>
            <div className="flex grid-cols-2 border border-white p-3 w-17 px-96 ">
              <div>
                <button className="justify-start">Github </button>
              </div>
              <div className="justify-end">
                {/* <ArrowUpRightIcon className="h-6 w-6 text-white" /> */}
              </div>
            </div>
          </li>
          <li>
            <div className="flex grid-cols-2 border border-white p-3 w-17 px-96 ">
              <div>
                <button className="justify-start">Instagram</button>
              </div>
              <div className="justify-end">
                {/* <ArrowUpRightIcon className="h-6 w-6 text-white" /> */}
              </div>
            </div>
          </li>
          <li>
            <div className="flex grid-cols-2 border border-white p-3 w-17 px-96 ">
              <div>
                <button className="justify-start">Twitter</button>
              </div>
              <div className="justify-end">
                {/* <ArrowUpRightIcon className="h-6 w-6 text-white" /> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Contact2
