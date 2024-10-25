import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("http://localhost:3000/api/blog");
    const data = await res.data;
    setBlogs(data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={blog.user.name}
          isUser={localStorage.getItem("userId") === blog.user}
        />
      ))}
    </div>
  );
};

export default Blogs;
