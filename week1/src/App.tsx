import { useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from 'react-markdown'
import { FiLoader } from "react-icons/fi";

const api_key=process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(api_key as unknown as string);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

function App() {
  const [gemini_data, setGemini_data] = useState("");
    const [loading, setLoading] = useState(false);
    const [fetch_gemini_data, setFetch_gemini_data] = useState("");

    const handleInput3 = (event:any) => {
      const name = event.target.name;
      // console.log(event.target.value);
      const value = event.target.value;
      console.log(name, value);
      if (name == "gem") setGemini_data(value);
  };

  async function fetchDataFromGemini() {
      try {
          setLoading(true)
          setFetch_gemini_data("");
          const prompt = gemini_data;
          const result = await model.generateContent(prompt);
          const response = result.response;
          const text = response.text();
          console.log(text);
          setLoading(false);
          setFetch_gemini_data(text);
      } catch (e) {
          setLoading(false);
          console.log(e);
      }
  }
  return <div className="flex flex-col items-center justify-center mt-40">
      <div className="text-6xl font-sem ibold">AI Chatbot</div>
      <div className="text-lg text-black/50 mb-5">Ask away your questions</div>

      <div className="flex flex-col gap-10 rounded-2xl items-center justify-center">
          <div className="flex flex-row gap-2">
              <input
                  placeholder="Text"
                  type="text"
                  autoComplete="off"
                  value={gemini_data}
                  onChange={handleInput3}
                  name="gem"
                  id="gem"
                  className="w-[900px] h-16 p-2 rounded-md border border-black outline-none"
              ></input>

              <button
                  className="border border-black bg-orange-500 hover:scale-105 active:scale-95 transition-all duration-200 px-3 rounded-md font-bold text-lg"
                  onClick={fetchDataFromGemini}
              >
                  Response
              </button>

          </div>
          -----------------------------
          <div className="break-all w-[1200px] border border-black p-10">
              {loading?<FiLoader size={26} className="animate-spin"/>:""}
              <Markdown>{fetch_gemini_data}
              </Markdown>
          </div>
      </div>
  </div>
}

export default App
