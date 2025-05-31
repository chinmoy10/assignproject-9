import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import WordDetails from "../components/WordDetails";

const SingleLesson = () => {
  const wordData = useLoaderData();
//   console.log(wordData);
  const { lesson_no } = useParams();
  // console.log(lesson_no);

  const [lessonWords, setLessonWords] = useState([]);

  useEffect(() => {
    if (lesson_no) {
      const singleLessonData = [...wordData].filter(
        (lessonData) => lessonData.lesson_no == lesson_no
      );
      setLessonWords(singleLessonData);
    }
  }, [wordData, lesson_no]);

  console.log(lessonWords);

  return (
    <div>
      <section className="banner">
        <div className="hero min-h-full bg-[#042E45]/75">
          <div className="hero-content text-center">
            <div className="py-16">
              <h1 className="text-5xl font-bold text-white">
                Lesson<span className="text-lg font-medium text-red-400">({lesson_no.slice(0, 2)})</span>- {lesson_no.slice(2, 3)}
              </h1>
            </div>
          </div>
        </div>
      </section>
      {lessonWords.map((lessonWord) => <WordDetails key={lessonWord.id} lessonWord={lessonWord}></WordDetails> )}
    </div>
  );
};

export default SingleLesson;
