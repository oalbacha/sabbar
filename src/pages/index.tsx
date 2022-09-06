import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { trpc } from "../utils/trpc";
import QuestionCreator from "../components/QuestionCreator";

const Home: NextPage = () => {
  const { isLoading, data } = trpc.useQuery(["questions.get-all"]);
  console.log("data:", data);
  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <div className="text-2xl font-bold">Questions:</div>
        {data.map((question) => (
          <Link href={`/question/${question.id}`} key={question.id}>
            <a className="block">{question.question}</a>
          </Link>
        ))}
      </div>
      <QuestionCreator query="get-all" />
    </div>
  );
};

export default Home;
