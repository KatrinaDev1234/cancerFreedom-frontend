import React from "react";
import Layout from "../../components/Layout";
import MainHeading from "../../components/MainHeading";
import { useNavigate } from "react-router-dom";

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
  function handleSubmit(e) {
    e.preventDefault();
    nav("/selectReport");
  }
  return (
    <div className="p-8 bg-white/40 backdrop-blur-sm max-w-96 rounded-3xl">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Email"
          className="w-full  border-none outline-none bg-white px-2 py-4 rounded-full placeholder:font-bold"
        />
        <input
          type="date"
          placeholder="DD/MM/YYYY"
          className="w-full  border-none outline-none bg-white px-2 py-4 rounded-full placeholder:font-bold "
        />
        <button
       
          onClick={handleSubmit}
          className="bg-primary w-full rounded-full py-4 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
