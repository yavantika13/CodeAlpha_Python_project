import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const allProjects = [
    {
      title: "AI Resume Analyzer",
      type: "AI",
      desc: "AI-powered resume analyzer built using Python and Streamlit that evaluates resumes and provides improvement suggestions.",
      tech: "Python, Streamlit",
      github: "https://github.com/yavantika13/AI_RESUME_ANALYZER",
      live: "https://airesumeanalyzer-wpxqbrdvmx7jtbzwbziugf.streamlit.app/",
    },
    {
      title: "Restaurant Website",
      type: "Web",
      desc: "Responsive restaurant website with modern UI, menu sections, and interactive design.",
      tech: "HTML, CSS",
      github: "https://github.com/yavantika13/restaurant-website",
      live: "https://github.com/yavantika13/Restaurant-website",
    },
    {
      title: "Weather App",
      type: "Web",
      desc: "Real-time weather app using OpenWeather API to display temperature, humidity, and wind details.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/yavantika13/Weather-app",
      live: "https://weather-ew8y2ysir-avantika7.vercel.app",
    },
  ];

  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Web", "AI"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full border ${
              filter === type
                ? "bg-cyan-500 text-white"
                : "border-gray-500 text-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* PROJECT CARDS */}
     <div className="glass p-6 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 transition duration-300">
        {filtered.map((p, i) => (
          <div key={i} className="glass p-6 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

            <p className="text-sm text-gray-300">{p.desc}</p>

            <p className="text-sm text-slate-400 mt-3">
              Tech: {p.tech}
            </p>

            {/* LINKS */}
            <div className="mt-4 flex gap-4">
              
              {/* GitHub */}
              {p.github === "#" ? (
                <span className="text-gray-400 text-sm">
                  GitHub: Coming Soon
                </span>
              ) : (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub →
                </a>
              )}

              {/* Live */}
              {p.live === "#" ? (
               <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
  In Progress
</span>
              ) : (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:underline"
                >
                  Live →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}