import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const Lessons = () => {
  const { category } = useParams();
  const lessonData = useLoaderData();

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    if (category) {
      const singleLesson = [...lessonData].filter(
        (lesson) => lesson.category == category
      );
      setLessons(singleLesson);
    } else {
      setLessons(lessonData.slice(0, 10));
    }
  }, [lessonData, category]);


  return (
    <>
      <div>
        {/* <h1>All Lessons: {lessons.length}</h1> */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {
                lessons && lessons.map((lesson)=><NavLink to={`/lesson/${lesson.lesson_no}`} className="w-full text-2xl text-center text-white border-none font-bold bg-gradient-to-b from-cyan-800/95 to-cyan-950/95 px-5 py-10 rounded overflow-hidden " key={lesson.lesson_no}>Lesson<span className="text-xs font-light text-red-300">({lesson.category})</span> - {lesson.lesson_no.slice(2, 4)}</NavLink>)
            }
        </div>
      </div>
    </>
  );
};

export default Lessons;
