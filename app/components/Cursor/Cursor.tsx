"use client"

import dynamic from "next/dynamic"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {ssr: false,});

function Cursor() {
  return (
    <div> 
     <AnimatedCursor
     innerSize={30} 
     outerSize={30} 
     outerAlpha={0.5} 
     innerScale={0.5} 
     outerScale={2} 
     clickables={[
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link",
    ]}
    />
    </div>
  )
}

export default Cursor




