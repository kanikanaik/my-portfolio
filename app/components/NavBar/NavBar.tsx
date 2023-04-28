"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function NavBar() {
  //     const openButton = document.getElementById('open-offcanvas');
  // const offcanvas = document.getElementById('offcanvas');

  // openButton.addEventListener('click', function()
  // {
  //   offcanvas.classList.toggle('translate-x-full');
  //   offcanvas.classList.toggle('translate-x-0');
  // });

  return (
    <div>
      <div>
        <nav className="grid grid-cols-3  h-16 py-3 fixed w-full bg-neutral-900 border-b-2 border-b-white">
          <div className="text-left justify-start flex w-14 py-2 px-4 ">
            <ul className="text-white  flex gap-10 ">
              <Link href={"/"}>
                <li className=" hover:font-bold cursor-pointer  flex">HOME</li>
              </Link>
              <Link href={"/aboutme"}>
                <li className=" hover:font-bold cursor-pointer  flex">ABOUT</li>
              </Link>
            </ul>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} className="text-center justify-center text-white text-xl py-2 underline">
            <h2>KanikaNaik</h2>
          </motion.div>
          <div className="text-right justify-end flex py-2 px-4">
            <ul className="text-white flex gap-10 ">
              <li className=" hover:font-bold cursor-pointer justify-start flex">
                SKILLS
              </li>
              <Link href={"/contactme"}>
              <button
              
                type="button"
                className=" hover:font-bold cursor-pointer justify-start flex"
                data-hs-overlay="#hs-overlay-right"
              >
                EMAIL ME
              </button>
              </Link>

              {/* <div id="offcanvas" className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-lg p-8 transform translate-x-full transition-transform ease-in-out duration-500">
</div> */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
