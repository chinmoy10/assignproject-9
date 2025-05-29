import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const Lessons = () => {
  const { category } = useParams();
  // console.log(category);
  const lessonData = useLoaderData();
  // console.log(lessonData);

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (category) {
      const singleLesson = [...lessonData].filter(
        (lesson) => lesson.category == category
      );
      setLessons(singleLesson);
    } else {
      setLessons(lessonData);
    }
  }, [lessonData, category]);

  return (
    <>
      <div>
        {/* <h1>All Lessons: {lessons.length}</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {
                lessons.map((lesson)=><NavLink to={`/lesson/${lesson.lesson_no}`} className="text-2xl text-center text-white border-none font-bold bg-cyan-800 py-10 rounded-2xl transition hover:scale-105 overflow-hidden" key={lesson.lesson_no}>Lesson<span className="text-xs font-extralight">({lesson.category})</span> - {lesson.lesson_no}</NavLink>)
            }
        </div>
      </div>
    </>
  );
};

export default Lessons;
