import React, { useState } from "react";

const ExperienceInputForm = () => {
  const [comapnies, setCompanies] = useState([]);
  const [formData, setFormData] = useState({
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

  const handleChange = (index, key, value) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index][key] = value;
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experiences: [
        ...formData.experiences,
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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block mb-2">Company Name:</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Location:</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      {formData.experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Position:</label>
          <input
            type="text"
            value={experience.position}
            onChange={(e) => handleChange(index, "position", e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <label className="block mb-2">Skills:</label>
          <input
            type="text"
            value={experience.skills}
            onChange={(e) => handleChange(index, "skills", e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <label className="block mb-2">From:</label>
          <input
            type="date"
            value={experience.fromDate}
            onChange={(e) => handleChange(index, "fromDate", e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <label className="block mb-2">To:</label>
          <input
            type="date"
            value={experience.toDate}
            onChange={(e) => handleChange(index, "toDate", e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddExperience}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Experience
      </button>
      <button
        type="button"
        onClick={handleAddCompany}
        className="mb-4 ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Add Another Company
      </button>
      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ExperienceInputForm;
