import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [img, setImg] = useState();
  const [input, setInput] = useState("");
  const [clicked, setClicked] = useState(false);
  async function getImg() {
    try {
      const res = await axios.get("https://yesno.wtf/api");
      setImg(res.data.image);
      setInput("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-[16px]">
      <div className="bg-white p-5 rounded-2xl text-center md:w-[500px] md:h-[500px]  flex flex-col justify-center items-center shadow">
        <h1 className="text-2xl font-bold mb-4">Idk what this is</h1>
        <div>
          <input
            type="text"
            placeholder="Yes or No question"
            value={input}
            className="border border-gray p-2 rounded mr-3"
            onChange={(e) => {
              setInput(e.target.value);
              setImg(null);
            }}
          />
          <button
            className="text-white bg-red-500 font-bold p-2 mt-3 rounded-xl cursor-pointer"
            onClick={() => {
              getImg();
              setClicked(true);
            }}
          >
            {!clicked ? "Ask" : "Ask again"}
          </button>
        </div>

        {img && (
          <div className="flex justify-center items-center">
            <img
              className=" w-[300px] h-[300px] mt-5 object-cover object-center rounded-lg shadow-lg flex justify-center items-center"
              src={img}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
