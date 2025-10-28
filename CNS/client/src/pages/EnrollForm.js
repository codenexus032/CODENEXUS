// src/pages/EnrollForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    gender: "",
    phone: "",
    college: "",
    qualification: "",
    year: "",
    domain: "",
    source: "",
    linkedin: "",
    telegram: "",
    instagram: "",
    referrals: "",
    agree: false,
  });

  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();


  const genderOptions = ["Male", "Female", "Other"];
  const qualificationOptions = [
    "B.Tech",
    "B.Sc",
    "BCA",
    "BA",
    "M.Sc",
    "MBA",
    "MCA",
    "Other",
  ];
  const yearOptions = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
    "Final Year",
    "Completed",
  ];
  const internshipDomains = [
    "Python",
    "C",
    "C++",
    "Java",
    "Frontend Development",
    "Full Stack Development",
    "App Development",
    "Data Science",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Analytics",
    "Cyber Security",
    "Cloud Computing",
    "DevOps",
    "Blockchain Technology",
    "Internet of Things (IoT)",
    "Graphics Design",
    "UI/UX Design",
  ];
  const sourceOptions = ["Friend", "College", "LinkedIn", "Other"];
  const yesNoOptions = ["Yes", "No"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("❌ Contact number must be exactly 10 digits.");
      return false;
    }

    if (!formData.email.endsWith("@gmail.com")) {
      alert("❌ Please enter a valid Gmail address (must end with @gmail.com).");
      return false;
    }

    const allFilled = Object.entries(formData).every(([key, value]) => {
      if (key === "agree") return value === true;
      return value.trim() !== "";
    });

    if (!allFilled) {
      alert("⚠️ Please fill in all required fields before submitting.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/api/enroll/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          acceptedTerms: formData.agree,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Internship registration submitted successfully!");
        setFormData({
          name: "",
          dob: "",
          email: "",
          gender: "",
          phone: "",
          college: "",
          qualification: "",
          year: "",
          domain: "",
          source: "",
          linkedin: "",
          telegram: "",
          instagram: "",
          referrals: "",
          agree: false,
        });
        navigate('/');

      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error("Enrollment Error:", error);
      alert("❌ Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-3xl relative">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Internship Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>
               {/* Date of Birth */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Gmail address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <small className="text-gray-500 text-xs mt-1">
              Must end with <strong>@gmail.com</strong>
            </small>
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option value="">Select Gender</option>
              {genderOptions.map((g, i) => (
                <option key={i} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Contact Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10-digit phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              maxLength={10}
              pattern="[0-9]{10}"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* College */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">College Name *</label>
            <input
              type="text"
              name="college"
              placeholder="Enter your college/university"
              value={formData.college}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Qualification */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Highest Academic Qualification *</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option value="">Select Qualification</option>
              {qualificationOptions.map((q, i) => (
                <option key={i} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Current Year of Study *</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option value="">Select Year</option>
              {yearOptions.map((y, i) => (
                <option key={i} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Domain */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Internship Domain *</label>
            <select
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option value="">Select a Domain</option>
              {internshipDomains.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Source */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">
              Where did you hear about Code Nexus? *
            </label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            >
              <option value="">Select an Option</option>
              {sourceOptions.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col space-y-4">
            <label className="font-semibold text-gray-700">Follow our Social Media Pages *</label>

            {/* LinkedIn */}
            <div>
              <span>
                LinkedIn –{" "}
                <a
                  href="https://www.linkedin.com/in/code-nexus-0a511b386/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold underline"
                >
                  Click here
                </a>
              </span>
              <select
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                required
                className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Followed LinkedIn Page?</option>
                {yesNoOptions.map((o, i) => (
                  <option key={i} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Telegram */}
            <div>
              <span>
                Telegram –{" "}
                <a
                  href="https://t.me/CODENexus032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold underline"
                >
                  Click here
                </a>
              </span>
              <select
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                required
                className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Joined Telegram Page?</option>
                {yesNoOptions.map((o, i) => (
                  <option key={i} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            {/* Instagram */}
            <div>
              <span>
                Instagram –{" "}
                <a
                  href="https://www.instagram.com/codenexus032/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold underline"
                >
                  Click here
                </a>
              </span>
              <select
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                required
                className="mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Followed Instagram Page?</option>
                {yesNoOptions.map((o, i) => (
                  <option key={i} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Referrals */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Refer Any 2 (Name, Phone No.) *</label>
            <textarea
              name="referrals"
              placeholder="Example: John - 9876543210, Priya - 9123456789"
              value={formData.referrals}
              onChange={handleChange}
              required
              className="p-3 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none resize-none"
              rows="2"
            ></textarea>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              className="mt-1 w-5 h-5 text-pink-500 focus:ring-pink-400 border-gray-300 rounded"
            />
            <label className="text-sm text-gray-700">
              I agree to the{" "}
              <button
                type="button"
                onClick={() => setShowTerms(true)}
                className="text-pink-600 font-semibold hover:underline"
              >
                Terms & Conditions
              </button>{" "}
              and confirm all details are correct.
            </label>
          </div>

          {/* Submit */}
          <button
          onClick={handleSubmit}
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg hover:scale-105 transition"
          >
            Submit Application
          </button>
        </form>

        {/* Terms Modal */}
        {showTerms && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
              <h3 className="text-2xl font-bold text-pink-600 mb-4">
                Terms & Conditions
              </h3>
              <div className="text-gray-700 text-sm space-y-3 max-h-80 overflow-y-auto">
                <p>1. Provide accurate and verifiable information.</p>
                <p>2. Duration: 1 month with 3+ projects.</p>
                <p>3. Offer letter within 24–48 hours post submission.</p>
                <p>4. Certificates and LOR based on performance.</p>
                <p>5. Following LinkedIn, Telegram, Instagram is mandatory.</p>
                <p>6. Multiple applications for same domain = invalid.</p>
                <p>7. Communication through registered email.</p>
                <p>8. Professional conduct expected during internship.</p>
                <p>9. Social Media Links:</p>
                <ul className="list-disc list-inside text-blue-600">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/code-nexus-0a511b386/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/CODENexus032"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/codenexus032/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@CODENexus-032"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/CODENexus032"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      X (Twitter)
                    </a>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setShowTerms(false)}
                className="mt-5 w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollForm;
