import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const VocabCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

//   console.log(categories);

  return (
    <div>
      {/* <h1>VocabCategories:{categories.length}</h1> */}
      <div className="flex flex-col md:flex-row gap-5">
        {categories && categories.map((category) => (
          <NavLink
            to={`/learning/${category.category}`}
            className={({ isActive }) =>
                  `text-xl font-bold ${isActive ? "text-red-500 border-b-2 border-cyan-700 rounded p-1" : "text-gray-400 hover:text-cyan-950 p-1"}`
                }
            key={category.id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VocabCategories;
