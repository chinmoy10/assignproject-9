const WordDetails = ({ lessonWord }) => {

    const { word, pronunciation, meaning, part_of_speech, difficulty, when_to_say, example} = lessonWord || {};

  return (
    <>
      <div>
        <div className="card bg-base-300 w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{word}</h2>
            <p>We are using cookies for no reason.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-ghost">Deny</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordDetails;
