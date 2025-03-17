import React, { useRef, useState } from "react";
import solveExpression from "./utils/Calculate.js";

const App = () => {
  const [expression, setExpression] = useState('');
  const [ans, setAns] = useState('');


  const inputRef = useRef(null);
  const ansRef = useRef(null);

  const handleButtonClick = (value) =>{
    setExpression(expression+value);
  }

  const handleBackSpace = () =>{
    setExpression(expression.substring(0, expression.length-1));
  }

  const handleEqualButton = () => {
    // Set input font size to 10px
    inputRef.current.style.fontSize = "30px"; 
    inputRef.current.style.color = 'gray';
  
    // Make answer visible
    ansRef.current.style.visibility = "visible"; 
  
    // Update the state and then change font size
    setAns(solveExpression(expression));
  
  };
  

  const handleAcButton = () => {
    inputRef.current.style.color = 'white';
    ansRef.current.style.visibility = "hidden"; 
    setAns('');
    setExpression('');
  }

  return (
    <div className="w-full h-screen relative bg-[#72a1ff]">
      {/* Background */}
      <div className="shadow-2xl shadow-blue-600 absolute bg-blue-600 w-[45%] h-[90%] top-[5%] z-1 left-[10%] rounded-full"></div>
      <div className="relative w-[50%] h-screen z-1 ml-[50%]">
        <div className="shadow-2xl shadow-blue-500 absolute bg-blue-500 w-[50%] h-[50%] z-1 top-[5%] left-[15%] rounded-full"></div>
        <div className="shadow-2xl shadow-blue-700 absolute bg-blue-700 w-[30%] h-[30%] top-[60%] left-[40%]  z-1 rounded-full"></div>
      </div>

      <div className=" backdrop-blur-3xl shadow-2xl shadow-black absolute h-[80%] w-[20%] z-10 left-[40%] rounded-4xl bg-black/75 top-[10%]">
        <div className="h-full w-full flex flex-col z-10 p-7">
          {/* display */}
         
          <div className="flex-col justify-end w-full h-[30%] mt-10 rounded-xl border border-blue-900 p-4 flex items-end">
            <input
              ref={inputRef}
              value={expression}
              type="text"
              className="w-full outline-none text-3xl text-white text-right bg-transparent"
              style={{ verticalAlign: "bottom" }}
            />
            <h1
            ref={ansRef}
            className="text-white text-5xl"
            >
              {ans}
            </h1>
          </div>

          <div className="w-full h-[70%] flex flex-col">
            <div className=" grid grid-cols-4 grid-rows-1 mt-10 gap-3">
              <button
              onClick={(value)=>handleButtonClick('e')} 
              className="w-full bg-gray-800 pb-2 rounded-full text-3xl text-blue-600">
                e
              </button>
              <button 
              onClick={(value)=>handleButtonClick('u')} 
              className="w-full bg-gray-800 pb-2 rounded-full text-2xl text-blue-600">
                &#956;
              </button>
              <button 
              onClick={(value)=>handleButtonClick('sin')} 
              className="w-full bg-gray-800 pb-2 rounded-full text-2xl text-blue-600">
                sin
              </button>
              <button 
              onClick={(value)=>handleButtonClick('deg')} 
              className="w-full bg-gray-800 pb-2 rounded-full text-2xl text-blue-600">
                deg
              </button>
            </div>

            <div className=" grid grid-cols-4 grid-rows-7 gap-4 mt-4">
              <button 
              onClick={()=>handleAcButton()}
              className="w-full bg-gray-700 rounded-2xl text-white/30 text-4xl pb-3 pt-2">
                Ac
              </button>

              <button 
              onClick={()=>handleBackSpace()}
              className="w-full bg-gray-700 rounded-2xl text-white/30 text-4xl pb-3 pt-2">
                &#10094;
              </button>

              <button 
              onClick={(value)=>handleButtonClick('/')} 
              className="w-full bg-blue-700 rounded-2xl text-blue-500 text-4xl font-bold pb-3 pt-2">
                /
              </button>

              <button 
              onClick={(value)=>handleButtonClick('*')} 
              className="w-full bg-blue-700 rounded-2xl text-blue-500 text-4xl font-bold pb-2 pt-3">
                *
              </button>

              <button 
              onClick={(value)=>handleButtonClick('7')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                7
              </button>

              <button 
              onClick={(value)=>handleButtonClick('8')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                8
              </button>

              <button 
              onClick={(value)=>handleButtonClick('9')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                9
              </button>

              <button 
              onClick={(value)=>handleButtonClick('-')} 
              className="w-full bg-blue-700 rounded-2xl text-blue-500 text-4xl font-bold pb-4 pt-1">
                -
              </button>

              <button 
              onClick={(value)=>handleButtonClick('4')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                4
              </button>

              <button 
              onClick={(value)=>handleButtonClick('5')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                5
              </button>

              <button 
              onClick={(value)=>handleButtonClick('6')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                6
              </button>

              <button 
              onClick={(value)=>handleButtonClick('+')} 
              className="w-full bg-blue-700 rounded-2xl text-blue-500 text-4xl font-bold pb-4 pt-1">
                +
              </button>

              <button 
              onClick={(value)=>handleButtonClick('1')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                1
              </button>

              <button 
              onClick={(value)=>handleButtonClick('2')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                2
              </button>

              <button 
              onClick={(value)=>handleButtonClick('7')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2">
                3
              </button>

              <button
              onClick={()=>handleEqualButton()}
              className="w-full shadow-2xl shadow-blue-500/60 bg-blue-500 rounded-2xl text-blue-200 text-4xl font-bold pb-4 pt-1 row-span-2">
                =
              </button>

              <button
               onClick={(value)=>handleButtonClick('0')} 
               className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-semibold pb-3 pt-2 col-span-2">
                0
              </button>

              <button 
              onClick={(value)=>handleButtonClick('.')} 
              className="w-full bg-gray-800 rounded-2xl text-blue-500 text-4xl font-bold pb-4">
                .
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
