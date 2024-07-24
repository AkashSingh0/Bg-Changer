import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");
  const [heading, setHeading]= useState("I am Pink")

  const setMe=(color, heading)=>{
    setColor(color);
    setHeading(heading);
  }

  return (
    <div
      className="w-full h-screen transition-colors duration-200 flex items-center justify-center text-white"
      style={{ backgroundColor: color }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">{heading}</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
            onClick={() => setMe("Turquoise", "Hello! I am Turquoise")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Turquoise" }}
          >
            Turquoise
          </button>
          <button
            onClick={() => setMe("red", "Hello! I am Red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setMe("blue", "Hello! I am Blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setMe("green", "Hello! I am Green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setMe("yellow", "Hello! I am Yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setMe("Orange", "Hello! I am Orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setMe("Pink", "Hello! I am Pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setMe("Coral", "Hello! I am Coral")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Coral" }}
          >
            Coral
          </button>
          <button
            onClick={() => setMe("Teal", "Hello! I am Teal")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setMe("indigo", "Hello! I am Indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            indigo
          </button>
          <button
            onClick={() => setMe("Black", "Hello! I am Black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Black" }}
          >
            Black
          </button>
          <button
            onClick={() => setMe("Chartreuse", "Hello! I am Chartreuse")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Chartreuse" }}
          >
            Chartreuse
          </button>
          <button
            onClick={() => setMe("Grey", "Hello! I am Grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "Grey" }}
          >
            Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

