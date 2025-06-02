import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import WordDetails from "../components/WordDetails";
import { FaArrowRight } from "react-icons/fa";

const SingleLesson = () => {
  const navigate = useNavigate();
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
    <div className="mb-10">
      <section className="banner">
        <div className="hero min-h-full bg-[#042E45]/75">
          <div className="hero-content text-center">
            <div className="py-16">
              <h1 className="text-5xl font-bold text-white">
                Lesson
                <span className="text-lg font-medium text-red-400">
                  ({lesson_no.slice(0, 2)})
                </span>
                - {lesson_no.slice(2, 4)}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-10/12 mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {lessonWords &&
            lessonWords.map((lessonWord) => (
              <WordDetails
                key={lessonWord.id}
                lessonWord={lessonWord}
              ></WordDetails>
            ))}
        </div>
        <button
          className="btn bg-[#042E45]/80 border-none shadow-none text-red-500 text-lg mt-10"
          onClick={() => navigate("/learning")}
        >
          Back to Lesson <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default SingleLesson;
