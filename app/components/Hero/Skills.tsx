"use client";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div>
      <motion.div className="text-gray-900 pb-28 p-4">
        <div className=" absolute right-[60%] w-24 h-24 bg-red-400 rounded-full text-align-center items-center p-5">
          NodeJS
        </div>
        <div className="  w-36 h-36 bg-orange-300 rounded-full justify-center text-align-center items-center p-10">
          Figma
        </div>
        <div className=" absolute left-[70%] top-[120%] w-36 h-36 bg-lime-300  text-align-center items-center p-10">
          Canva
        </div>
        <div className=" absolute right-[60%] w-24 h-24 bg-red-400 rounded-full text-align-center items-center p-5">
          C#
        </div>
        <div className=" absolute right-[80%] w-24 h-24 bg-cyan-500 rounded-lg text-align-center items-center p-5">
          CSS
        </div>
        <div className=" absolute right-[60%] w-24 h-24 bg-red-400 rounded-full text-align-center items-center p-5">
          Python
        </div>
        <div className="absolute w-36 h-36 bg-pink-400 flex justify-center text-align-center items-center p-5">
          HTML
        </div>
        <div className="w-36 h-36 bg-violet-500 rounded-full flex justify-center text-align-center items-center p-5">
          Tailwind CSS
        </div>
        <div className="absolute right-10 w-36 h-36 py-17 bg-yellow-300 rounded-full flex justify-center text-align-center items-center p-5">
          Java
        </div>
        <div className="absolute right-40 w-36 h-36 bg-blue-400 flex justify-center text-align-center items-center p-5">
          HTML
        </div>

        {/* <div className="w-36 h-36 bg-green-400 rounded-full"></div> */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
          className="   absolute z-[8] top-[130%] left-[45%] w-36 h-36 bg-stone-800 outline outline-white outline-4 text-white rounded-full flex justify-center items-center text-center p-5 hover:bg-white hover:text-zinc-950"
        >
          SKILLS.
        </motion.div>
        {/* <button className=" text-center absolute z-[8] top-[150%] left-[50%] dark:hover:bg-white dark:hover:text-black dark:active:bg-black dark:active:text-white coloured:hover:bg-pink coloured:active:bg-blue dark:bg-neutral-800 dark:text-white text-white bg-black hover:bg-yellowDark active:bg-black md:text-xl uppercase w-[160px] h-[160px] md:w-[180px] md:h-[180px] md:normal-case md:px-8 md:py-3 rounded-full ">
          Skills and tecnologies. Click me!
        </button> */}
        <div className=" w-24 h-24 justify-center text-align-center items-center p-5 bg-red-400 rounded-full">
          React JS
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellat eaque iste quisquam ea earum nulla veniam. Blanditiis voluptates voluptatibus vero maiores fugit enim quaerat, reiciendis nostrum, cupiditate officiis nihil.</p> */}
        {/* <h1 className="6xl">HElooo Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae minima distinctio voluptate fugit, quibusdam deleniti quo. Repudiandae distinctio voluptatem ipsa ea illum repellendus sit illo iste? Harum reprehenderit ullam atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere laborum sed fuga, asperiores reiciendis, magni ex, optio eius quae eaque nihil eveniet molestiae. Quo suscipit delectus doloremque officiis quos inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam id pariatur mollitia magni distinctio itaque modi perspiciatis rerum harum fugit eveniet quasi, dolorem delectus atque beatae nostrum eos tempora doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cupiditate nisi quaerat sunt dicta sapiente placeat voluptates quidem amet quae, commodi ratione! Eveniet magni delectus exercitationem dicta excepturi voluptatibus iusto</h1> */}
      </motion.div>
      <hr></hr>
    </div>
  );
}

export default Skills;
