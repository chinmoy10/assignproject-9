import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const VocabCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("../category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      {/* <h1>VocabCategories:{categories.length}</h1> */}
      <div className="flex flex-col md:flex-row gap-5">
        {
            categories.map((category)=><NavLink to={`/category/${category.category}`} className="btn text-xl text-red-500 shadow-none border-none font-light bg-cyan-950" key={category.id}>{category.category_name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default VocabCategories;
