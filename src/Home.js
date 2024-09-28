import { useContext, useState } from "react";
import userContext from "./Contextlogin";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./home.css";

export default function Home() {
  const { name, gmail, password } = useContext(userContext);
  const [search, setSearch] = useState("");
  const [item, setItem] = useState("");
  const API_KEY = "AIzaSyAXM_IR_MTOtGE0yW6cOV-V1re0RDah1Ok";
  async function clicking() {
    try {
      // Make sure to include these imports:
      // import { GoogleGenerativeAI } from "@google/generative-ai";
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(search);
      setItem(result.response.text());
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="Home">
      <div className="Heading">
        <h1>Welcome to the world of gemina api</h1>
        <h2> Please go to login page to have the access of the Api world</h2>
      </div>
      <div className="main_part">
        {name && gmail && password && (
          <div className="Api_part">
            <div className="inf0_user">
              <p>your username is saved: {name}</p>
              <p>your passoword is saved:....</p>
              <p>your gmail is saved: {gmail}</p>
            </div>
            <div className="api_handling">
              <div className="input_filed">
                <input
                  type="text"
                  placeholder="enter the text to search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={clicking}>Search</button>
              </div>
            </div>
          </div>
        )}
        <div className="mai_cont">{item}</div>
      </div>
    </div>
  );
}
