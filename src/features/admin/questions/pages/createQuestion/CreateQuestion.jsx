import React, { useEffect, useState } from "react";

import BasicInformation from "./createQuestionComponents/BasicInformation";
import EnglishQuestion from "./createQuestionComponents/EnglishQuestion";
import HindiQuestion from "./createQuestionComponents/HindiQuestion";
import CorrectAnswer from "./createQuestionComponents/CorrectAnswer";
import Source from "./createQuestionComponents/Source";
import Academic from "./createQuestionComponents/Academic";
import Attachments from "./createQuestionComponents/Attachments";
import TagsAndKeywords from "./createQuestionComponents/TagsAndKeywords";
import Status from "./createQuestionComponents/Status";
import CRUD from "../../../../../api/crud";
import FullScreenLoader from "../../../../../components/FullScreenLoader";

const CreateQuestion = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questionId, setQuestionId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = "/questions/next-question";

        const response = await CRUD.getAll(endpoint);

        // console.log(response.data);
        setQuestionId(response.data.data.questionId);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    questionId: "",
    questionLang: {
      eng: {
        question: "",
        options: [
          { optionId: "", text: "", image: "" },
          { optionId: "", text: "", image: "" },
          { optionId: "", text: "", image: "" },
          { optionId: "", text: "", image: "" },
        ],
        explanation: "",
        hint: "",
      },

      hindi: {
        question: "",
        options: [
          { optionId: "", text: "", image: "" },
          { optionId: "", text: "", image: "" },
          { optionId: "", text: "", image: "" },
          { optionId: "", text: "", image: "" },
        ],
        explanation: "",
        hint: "",
      },
    },

    questionType: "mcq",

    correctAnswers: [],

    difficulty: "medium",

    source: {
      type: "original",
      examId: "",
      year: "",
      shift: "",
      paper: "",
      questionNumber: "",
    },

    academic: {
      subject: {
        id: "",
        name: "",
      },

      chapter: {
        id: "",
        name: "",
      },

      topic: {
        id: "",
        name: "",
      },

      subTopic: {
        id: "",
        name: "",
      },
    },

    tags: [],
    keywords: [],

    status: "draft",

    visibility: "public",

    attachments: [],

    version: 1,

    parentQuestionId: "",

    createdBy: "",

    updatedBy: "",

    approvedBy: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(formData);
      const endpoint = "/questions/create";
      const response = await CRUD.create(endpoint, formData);
      alert(response?.data?.message || "Response Error");
      // const response = await axios.post(
      //     "/api/questions",
      //     formData
      // );
    } catch (err) {
      console.error(err);
      alert(err.response.data.message || "Response error");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {isLoading && <FullScreenLoader />}
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-3xl font-bold mb-8">Create Question</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <BasicInformation
            formData={formData}
            setFormData={setFormData}
            qid={questionId}
          />

          <EnglishQuestion formData={formData} setFormData={setFormData} />

          <HindiQuestion formData={formData} setFormData={setFormData} />

          <CorrectAnswer formData={formData} setFormData={setFormData} />

          <Academic formData={formData} setFormData={setFormData} />

          <Source formData={formData} setFormData={setFormData} />

          <TagsAndKeywords formData={formData} setFormData={setFormData} />

          <Attachments formData={formData} setFormData={setFormData} />

          <Status formData={formData} setFormData={setFormData} />

          <div className="bg-white rounded-xl shadow p-6 flex justify-end gap-4">
            <button
              type="reset"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Reset
            </button>

            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateQuestion;
