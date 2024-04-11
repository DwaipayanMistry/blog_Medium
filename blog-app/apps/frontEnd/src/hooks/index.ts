import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { BACKEND_URL } from "../config";

export interface Blog {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
}
// TODO: Add caching to useBlog
export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    async function getBlog() {
      const response = await axios.get(`${BACKEND_URL}api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setLoading(false);
      setBlog(response.data.post);
    }
    getBlog();
  }, []);
  return {
    loading,
    blog,
  };
};
// TODO: Add caching to useBlogs
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await axios.get(`${BACKEND_URL}api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      setBlogs(response.data.posts);
      setLoading(false);
    }
    fetchBlogs();
  }, []);
  return {
    loading,
    blogs,
  };
};

// -----------------------------------------------------
