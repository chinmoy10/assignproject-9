import { AiFillSound } from "react-icons/ai";

const WordDetails = ({ lessonWord }) => {
  const {
    id,
    word,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    language,
    when_to_say,
    example,
  } = lessonWord || {};

  const vocabSound = (word) =>{
    const utterance = new SpeechSynthesisUtterance(word);
    if(language == "JP"){
        utterance.lang = 'ja-JP'; // Japanese
    }else{
        utterance.lang = 'zh-CN'; // Chinese
    }
      window.speechSynthesis.speak(utterance);
  }

  return (
    <>
      <div>
        <div
          className={`card rounded ${
            difficulty === "easy"
              ? "bg-blue-200"
              : difficulty === "medium"
              ? "bg-yellow-200"
              : difficulty === "difficult"
              ? "bg-red-200"
              : "bg-base-300"
          } `}
        >
          <div className="card-body">
            <h2 className="card-title text-center text-2xl">{word}</h2>
            <div className="text-justify text-base">
              <p>Meaning: {meaning}</p>
              <p>Pronunciation: {pronunciation}</p>
              <p>Part_of_speech: {part_of_speech}</p>
              {/* <p>{example}</p> */}
            </div>
            <div className="card-actions justify-between flex-col md:flex-row">
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-cyan-950 text-white border-none shadow-none"
                onClick={() =>
                  document.getElementById(id).showModal()
                }
              >
                When to say
              </button>
              <dialog id={id} className="modal">
                <div className="modal-box w-11/12 max-w-3xl">
                  <h3 className="font-bold text-lg">{word}</h3>
                  <div className="text-justify text-base">
                    <p>Meaning: {meaning}</p>
                    <p>When_to_say: {when_to_say}</p>
                    <p>Example: {example}</p>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <button onClick={()=> vocabSound(word)} className="btn bg-cyan-950 border-none shadow-none rounded-full text-white"><AiFillSound size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordDetails;
