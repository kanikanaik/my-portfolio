"use client";
import React from "react";
import { motion } from "framer-motion";

function Cards() {
  return (
    <main className="flex min-h-screen p-24">
      <motion.div
        className="px-14"
        transition={{
         
          ease: "easeInOut",
          
        }}
        drag
        dragConstraints={{
          top: 0,
          left: -50,
          right: 500,
          bottom: 500,
        }}
      >
        {/* <h1>Hello WAssup my man</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolorem
          odit iste impedit deleniti eaque natus magnam iure consequatur rem
          odio omnis molestias. Vitae voluptates totam id, animi blanditiis rem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident hic pariatur culpa placeat iure alias, itaque sequi in!
          Veniam porro deleniti pariatur esse vero non eos perspiciatis
          provident numquam.
        </p> */}
        <div className="max-w-sm p-5 bg-yellow-300 my-8">
          <a href="#">
            <h5 className="mb-2 w-15 text-xl font-bold tracking-tight text-black dark:text-white">
              Kanika Naik, a <br></br>Computer Science student <br></br> in
              Mumbai
            </h5>
          </a>
          <div className="grig grid-row-2">
            {/* <div className="row-span-3 text-left justify">Modern Art</div> */}
            <div>
              <p className="text-right text-sm font-bold text-black dark:text-gray-400">
                Lorem ipsum dolor, sit amet <br></br>consectetur vel tenetur,
                labo <br></br>quae fugiat repudiandae. ka<br></br> dolorum
                impedit um autem?
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Cards;
