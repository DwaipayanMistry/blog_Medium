import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
    const navigate= useNavigate();
    useEffect(()=>{
      const token=localStorage.getItem('token');
      if (token) {
        navigate("/blogs");
      } else{
        navigate("/signin")
      }
    }, [navigate])
    return (
      <></>
    )
}