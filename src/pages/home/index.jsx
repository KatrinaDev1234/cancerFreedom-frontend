import React, { useState } from "react";
import Layout from "../../components/Layout";
import MainHeading from "../../components/MainHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASEURL } from "../../utils/constants";

export default function Home() {
  return (
    <Layout
      className={"flex flex-col gap-4 items-center justify-center relative"}
    >
      <MainHeading className={"text-lime-400 font-bold"}>
        Join The Cancer Freedom Movement
      </MainHeading>
      <Form />
      <div className="text-center absolute bottom-8 text-lg">
        <p>Thank You for your interest in joining the program</p>
        <p>
          Before we can get going, I need to know a little more about you and if
          you're a good fit for what we offer.
        </p>
      </div>
    </Layout>
  );
}
function Form() {
  const nav = useNavigate();
  const [data, setData] = useState({
    email: "",
    dob: "",
  });
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 16);
  const minDateString = minDate.toISOString().split("T")[0];

  async function handleSubmit(e) {
    e.preventDefault();
    if(data?.email.includes("@") === false) {
      alert("Please enter a valid email address");
      return;
    }
    if(data?.dob === "") {
      alert("Please enter your date of birth");
      return;
    }

    setLoading(true); // Set loading to true when the request starts
    try {
      const res = await axios.post(`${API_BASEURL}/auth/signin`, data); 
      localStorage.setItem("token", res.data.data.token);
      
      nav("/selectReport");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false); // Set loading to false when the request ends
    }
  }
  
  return (
    <div className="p-8 bg-white/40 backdrop-blur-sm max-w-96 rounded-3xl">
      <div className="space-y-2">
        <input
          type="email"
          placeholder="Email"
          onChange={(e)=> setData({...data, email: e.target.value})}
          className="w-full  border-none outline-none bg-white px-2 py-4 rounded-full placeholder:font-bold"
        />
        <input
          type="date"
          onChange={(e)=> setData({...data, dob: e.target.value})}
          max={minDateString} // Disable future dates and dates less than 16 years ago
          placeholder="DD/MM/YYYY"
          className="w-full  border-none outline-none bg-white px-2 py-4 rounded-full placeholder:font-bold "
        />
        <button
          onClick={handleSubmit}
          className="bg-primary w-full rounded-full py-4 text-white"
          disabled={loading} // Disable button when loading
        >
          {loading ? "Loading..." : "Next"} 
        </button>
      </div>
    </div>
  );
}
