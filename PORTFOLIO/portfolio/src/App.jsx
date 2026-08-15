
// import { useEffect, useState } from "react";
// import Background from "./Background";
// import CursorGlow from "./CursorGlow";
// import Projects from "./Projects";

// export default function App() {
//   return (
//     <div className="text-white font-sans min-h-screen">

//       {/* Background Effects */}
//       <Background />
//       <CursorGlow />

//       {/* HERO SECTION */}
//       <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
        
//         <h1 className="text-5xl md:text-6xl font-bold mb-4">
//           Avantika Yadav
//         </h1>

//         <p className="text-lg md:text-xl text-gray-300">
//           Aspiring Software Developer
//         </p>

//         {/* BUTTONS */}
//       <div className="text-center mt-6 space-x-4">

//   {/* Projects Button */}
//   <a
//     href="#projects"
//     className="px-7 py-3 bg-cyan-500 rounded-xl font-medium hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
//   >
//     View Projects →
//   </a>

//   {/* Resume Button */}
//   <a
//     href="/resume.pdf"
//     target="_blank"
//     rel="noreferrer"
//     className="px-7 py-3 border border-gray-400 rounded-xl hover:bg-white hover:text-black transition"
//   >
//     Download Resume
//   </a>

// </div>
//       </section>

//       {/* ABOUT SECTION */}
//       <section className="max-w-4xl mx-auto px-4 py-16 text-center">
//         <div className="glass p-8">
//           <h2 className="text-3xl mb-4 font-semibold">About Me</h2>
//           <p className="text-gray-300">
//            I am a B.Tech Computer Science student interested in software development and technology. 
//            I have basic knowledge of Python, Java, HTML, CSS, 
//            and JavaScript and have worked on projects like a Weather App, AI Resume Analyzer, and Portfolio Website.
//            I am a responsible, hardworking, and quick learner who enjoys learning new skills and working in a team.
//           </p>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <Projects />
//       {/* CONTACT */}
// <section className="max-w-3xl mx-auto px-4 py-16 text-center">
//   <div className="glass p-8">
//     <h2 className="text-3xl mb-4 font-semibold">Contact Me</h2>

//     <p className="mt-2">
//       <a href="mailto:yavantika165@gmail.com" className="text-cyan-400 hover:underline">
//         yavantika165@gmail.com
//       </a>
//     </p>

//     <p className="mt-2">
//       <span className="text-gray-400">GitHub:</span>{" "}
//       <a
//         href="https://github.com/yavantika13"
//         target="_blank"
//         rel="noreferrer"
//         className="text-cyan-400 hover:underline"
//       >
//         yavantika13
//       </a>
//     </p>

//     <p className="mt-2">
//       <span className="text-gray-400">LinkedIn:</span>{" "}
//       <a
//         href="https://www.linkedin.com/in/avantika-yadav13"
//         target="_blank"
//         rel="noreferrer"
//         className="text-cyan-400 hover:underline"
//       >
//         avantika-yadav13
//       </a>
//     </p>
//   </div>
// </section>

//     </div>
//   );
// }

import Background from "./Background";
import CursorGlow from "./CursorGlow";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="text-white font-sans min-h-screen">

      {/* Background Effects */}
      <Background />
      <CursorGlow />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Avantika Yadav
        </h1>

        <p className="text-lg md:text-xl text-gray-300">
          Aspiring Software Developer
        </p>

        {/* BUTTONS */}
        <div className="text-center mt-6 space-x-4">

          {/* Projects Button */}
          <a
            href="#projects"
            className="px-7 py-3 bg-cyan-500 rounded-xl font-medium hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
          >
            View Projects →
          </a>

         {/* Resume Button */}
         <a
          href="/Avantika-Yadav-Resume.pdf"
          download="Avantika-Yadav-Resume.pdf"
          className="px-7 py-3 border border-gray-400 rounded-xl hover:bg-white hover:text-black transition"
         >
          Download Resume
         </a>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="glass p-8">
          <h2 className="text-3xl mb-4 font-semibold">
            About Me
          </h2>

          <p className="text-gray-300">
            I am a B.Tech Computer Science student interested in software
            development and technology. I have basic knowledge of Python,
            Java, HTML, CSS, and JavaScript and have worked on projects like
            a Weather App, AI Resume Analyzer, and Portfolio Website.
            I am a responsible, hardworking, and quick learner who enjoys
            learning new skills and working in a team.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <Projects />

      {/* INTERNSHIPS SECTION */}
      <section
        id="internships"
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Internships
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Microsoft Internship */}
          <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-2">
              Microsoft Elevate – AICTE Internship
            </h3>

            <p className="text-cyan-400 font-medium mb-2">
              Microsoft × Edunet Foundation
            </p>

            <p className="text-gray-400 mb-4">
              📅 January 2026
            </p>

            <p className="text-gray-300 leading-relaxed">
              Completed an AI and Cloud focused internship with learning
              modules, practical activities, and hands-on exposure to
              Artificial Intelligence and Azure fundamentals.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                AI
              </span>

              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                Azure
              </span>

              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                Cloud
              </span>
            </div>

          </div>

          {/* Python Internship */}
          <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-semibold mb-2">
              Python Full Stack Development With Project
            </h3>

            <p className="text-cyan-400 font-medium mb-2">
              EduSkills Academy × AICTE
            </p>

            <p className="text-gray-400 mb-4">
              📅 April – June 2026 | 8 Weeks
            </p>

            <p className="text-gray-300 leading-relaxed">
              Successfully completed an 8-week virtual internship focused on
              Python Full Stack Development with project-based learning and
              web application development.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                Python
              </span>

              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                Full Stack
              </span>

              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                Web Development
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
<section
  id="education"
  className="max-w-6xl mx-auto px-4 py-16"
>
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
    Education
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* B.Tech */}
    <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-3">
        B.Tech – Computer Science & Engineering
      </h3>

      <p className="text-cyan-400 font-medium mb-2">
        Baderia Global Institute of Engineering and Management
      </p>

      <p className="text-gray-400 mb-4">
        RGPV University
      </p>

      <p className="text-gray-300">
        📅 2023 – 2027
      </p>
    </div>

    {/* 12th */}
    <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-3">
        Higher Secondary (12th)
      </h3>

      <p className="text-cyan-400 font-medium mb-2">
        Wonder World Higher Secondary School
      </p>

      <p className="text-gray-400 mb-4">
        MP Board
      </p>

      <p className="text-gray-300">
        📅 2023
      </p>
    </div>

    {/* 10th */}
    <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold mb-3">
        High School (10th)
      </h3>

      <p className="text-cyan-400 font-medium mb-2">
        Wonder World Higher Secondary School
      </p>

      <p className="text-gray-400 mb-4">
        MP Board
      </p>

      <p className="text-gray-300">
        📅 2021
      </p>
    </div>

  </div>
</section>

    {/* CERTIFICATIONS SECTION */}
<section
  id="certifications"
  className="max-w-6xl mx-auto px-4 py-16"
>
  <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Python Essentials 1 */}
    <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">
        Python Essentials 1
      </h3>

      <p className="text-cyan-400 font-medium mb-2">
        Cisco Networking Academy
      </p>

      <p className="text-gray-400 mb-4">
        Python Institute
      </p>

      <p className="text-gray-300">
        📅 Completed: 08 April 2026
      </p>
    </div>

    {/* Java Basic */}
    <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">
        Java (Basic)
      </h3>

      <p className="text-cyan-400 font-medium mb-2">
        HackerRank
      </p>

      <p className="text-gray-300">
        📅 Earned: 23 February 2026
      </p>
    </div>

    {/* Python Basic */}
    <div className="glass p-8 rounded-2xl hover:scale-105 transition duration-300">
      <h3 className="text-xl font-semibold mb-3">
        Python (Basic)
      </h3>

      <p className="text-cyan-400 font-medium mb-2">
        HackerRank
      </p>

      <p className="text-gray-300">
        📅 Earned: 24 January 2026
      </p>
    </div>

  </div>
</section>

      {/* CONTACT SECTION */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="glass p-8">

          <h2 className="text-3xl mb-4 font-semibold">
            Contact Me
          </h2>

          <p className="mt-2">
            <a
              href="mailto:yavantika165@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              yavantika165@gmail.com
            </a>
          </p>

          <p className="mt-2">
            <span className="text-gray-400">
              GitHub:
            </span>{" "}

            <a
              href="https://github.com/yavantika13"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              yavantika13
            </a>
          </p>

          <p className="mt-2">
            <span className="text-gray-400">
              LinkedIn:
            </span>{" "}

            <a
              href="https://www.linkedin.com/in/avantika-yadav13"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 hover:underline"
            >
              avantika-yadav13
            </a>
          </p>

        </div>
      </section>

    </div>
  );
}