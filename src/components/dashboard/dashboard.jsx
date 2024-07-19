import React, { useEffect } from "react";
import "../../css/dashboard.css";
import { getCategories } from "../../services/category";
import { getsubCategories } from "../../services/subcategory";
import { getBlogs } from "../../services/blogs";
import { useState } from "react";
const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [total, setTotal] = useState(0);
  const showdata = async () => {
    const data = await getCategories();
    console.log(data);
    setCategories(data.data.data);
  };

  const showsubdata = async () => {
    const subdata = await getsubCategories();
    console.log(subdata);
    setSubCategories(subdata.data.data);
  };
  const showBlogs = async () => {
    const blogdata = await getBlogs();
    console.log(blogdata);
    setBlogs(blogdata.data.data);
  };

  useEffect(() => {
    showdata();
    showsubdata();
    showBlogs();
  }, []);

  useEffect(() => {
    setTotal(categories.length + subcategories.length + blogs.length);
  }, []);

  return (
    <>
      <div className="count-boxes">
        <div className="count-box">
          <h4>CATEGORIES COUNT</h4>
          <h2>{categories.length}</h2>
        </div>
        <div className="count-box">
          <h4>SUBCATEGORIES COUNT</h4>
          <h2>{subcategories.length}</h2>
        </div>
        <div className="count-box">
          <h4>BLOGS COUNT</h4>
          <h2>{blogs.length}</h2>
        </div>
        <div className="count-box">
          <h4>TOTAL COUNT</h4>
          <h2>{total}</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
