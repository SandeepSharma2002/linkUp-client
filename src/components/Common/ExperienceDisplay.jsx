import React, { useState } from "react";

const ExperienceDisplay = ({ formData2 }) => {
  const [comapnies, setCompanies] = useState([]);
  const [editData, setEditData] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "Company A",
    location: "Location A",
    experiences: [
      {
        position: "Position A",
        skills: "Skill A",
        fromDate: "01/01/2021",
        toDate: "01/01/2022",
      },
    ],
  });

  const handleChange = (index, key, value) => {
    const newExperiences = [...formData?.experiences];
    newExperiences[index][key] = value;
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData?.experiences,
        { position: "", skills: "", fromDate: "", toDate: "" },
      ],
    });
  };

  const handleAddCompany = () => {
    const companyData = formData;
    setCompanies((prev) => [...prev, companyData]);
    setFormData({
      companyName: "",
      location: "",
      experiences: [
        {
          position: "",
          skills: "",
          fromDate: "",
          toDate: "",
        },
      ],
    });
  };
  console.log(comapnies);

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyData = [...comapnies, formData];
    console.log(companyData);
  };

  return (
    <div>
      <div className="ps-2 my-2 first:mt-0">
        <input
          type="text"
          disabled = {editData}
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          className="w-full font-medium uppercase text-gray-500 dark:text-gray-400 border-b pb-1 border-gray-300 focus:outline-none focus:border-blue-500 disabled:bg-white disabled:border-0 disabled:pb-0"
        />
         <input
          type="text"
          value={formData.location}
          disabled = {editData}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          className="w-full mt-1 text-sm text-text-l-500 dark:text-gray-400 pb-1 border-b border-gray-300 focus:outline-none focus:border-blue-500 disabled:bg-white disabled:border-0 disabled:pb-0"
        />
      </div>
      {formData?.experiences.map((experience, index) => (
        <div key={index} className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-text-l-500"></div>
            </div>
          </div>
          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              {experience.position}
            </h3>
            <p className="mt-1 text-sm text-text-l-500 dark:text-gray-400">
              {experience.fromDate} - {experience.toDate}
            </p>
            <p className="mt-1 text-sm text-text-l-500 dark:text-gray-400">
              {experience.skills}
            </p>
            <button type="button" onClick={()=>setEditData(!editData)}>Edit</button>
          </div>
        </div>
      ))}
      <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-text-l-500"></div>
            </div>
          </div>
          <div className="grow pt-0.5 pb-8">
          <button type="button">Add new</button>
          </div>
        </div>
    </div>
  );
};

export default ExperienceDisplay;
