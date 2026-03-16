import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, desc });

    setTask(copyTask);

    setTitle("");
    setDesc("");
  };

  const deleteNote = (index) => {
    const copyTask = [...task];

    copyTask.splice(index, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-black text-white  ">
      <form
        onSubmit={(e) => {
          formSubmit(e);
        }}
        className="flex flex-rowp-10 text-2xl  p-15 "
      >
        <div className="flex flex-row justify-between w-full   ">
          <div className="flex flex-col gap-4 items-start  w-full xl:w-4/6">
            <h1 className="text-3xl font-semibold">Add Notes</h1>
            <input
              className="px-5 py-2 w-full font-medium border-2 rounded outline-none "
              type="text"
              placeholder="Enter Notes Heading"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <textarea
              className="px-5 py-2  w-full font-medium border-2 rounded h-30 outline-none "
              type="text"
              placeholder="Write Description "
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <button className="bg-white text-black font-medium w-full px-5 py-2 border-2 rounded outline-none active:scale-95 ">
              Add Note
            </button>
          </div>
          <div className="flex items-center ">
            <img
              className="rotate-y-180 h-80 hidden xl:block"
              src="https://imgs.search.brave.com/yYZbe2je2gGM2utwDlhxniTUrTSF8JaBGSeGMcF6_8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw"
              alt=""
            />
          </div>
        </div>
      </form>
      <div className="  p-12 flex flex-col border-t-2 space-y-4 ">
        <h1 className="text-3xl font-semibold">Recent Notes!!!</h1>
        <div className="flex flex-wrap md:justify-between xl:justify-start  gap-5 md:gap-10 xl:gap-5    ">
          {task.map((item, index) => {
            return (
              <div
                key={index}
                className="notes-card relative flex flex-col  w-full  md:w-85 md:h-90 xl:h-80 xl:w-70 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover rounded text-black p-8 overflow-auto space-y-8  "
              >
                <h2 className="absolute top-8 right-5 bg-red-400 rounded-full text-white cursor-pointer active:scale-30 ">
                  <X
                    onClick={() => {
                      deleteNote(index);
                    }}
                    size={30}
                    strokeWidth={2.25}
                  />
                </h2>
                <h3 className="text-3xl font-bold  leading-tight ">
                  {item.title}
                </h3>
                <p className="text-lg items-center font-medium leading-[1.7] text-gray-700">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
