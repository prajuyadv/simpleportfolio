import React from "react";
import person from "../assets/person.png";
import Navbar from "../components/navBar";

const About = ({ isFromHome }) => {
  return (
    <>
      {!isFromHome && <Navbar />}

      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-sm font-medium text-gray-700 mb-4 shadow-sm">
            <img src={person} alt="person icon" className="h-4 w-4" />
            About Me
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Who I Am</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I’m a passionate Frontend and Mobile Developer with hands-on experience building modern, responsive, and user-focused applications using React, React Native, TypeScript, JavaScript, Tailwind CSS, and Supabase. I enjoy transforming ideas and Figma designs into clean, intuitive interfaces and solving real-world problems through smart UI/UX and scalable architecture.

I’m currently pursuing my Master’s in MIS at Auburn University at Montgomery and actively building multiple full-stack projects, including e-commerce platforms, dashboards, and mobile apps with real-time features. I love learning new technologies, improving performance, and collaborating with teams to deliver polished, production-quality products.
          </p>
        </div>

        {/* Skill Sections */}
        <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">
            I’m a Frontend Developer skilled in building modern, responsive, and high-performance web applications using React, JavaScript/TypeScript, HTML, CSS, and Tailwind. I enjoy converting complex ideas and Figma designs into clean, intuitive user interfaces that deliver a smooth and engaging user experience.

I have hands-on experience working with component-based architecture, state management (Zustand, Redux Toolkit), API integration, and building real-world applications like dashboards, e-commerce platforms, and admin portals. I focus on writing clean, maintainable code and continuously improving performance, accessibility, and design consistency.

I’m passionate about learning new technologies, solving UI challenges, and collaborating with teams to create polished, production-ready products.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
            I’m a Backend Developer with hands-on experience building scalable APIs, secure authentication systems, and data-driven applications using Node.js, Express, Supabase, Firebase, and SQL/NoSQL databases. I enjoy designing clean backend architectures, optimizing database queries, and ensuring smooth interaction between the frontend and backend.

My work includes developing RESTful APIs, integrating third-party services, implementing role-based access control, and handling real-time features using WebSockets. I focus on writing efficient, maintainable code and building systems that are reliable, secure, and easy to scale.

I’m passionate about backend optimization, system design, and creating seamless data flows that power great user experiences end-to-end.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
            I’m a developer who enjoys breaking down complex problems into simple, structured solutions. Whether it’s debugging tricky issues, optimizing performance, or designing new features, I approach every challenge with a clear plan: understand the root cause, evaluate possible solutions, test carefully, and deliver clean, scalable results.

I’m comfortable working through ambiguity, asking the right questions, and exploring multiple approaches until I find the most efficient one. I use logical thinking, attention to detail, and real-world experimentation to ensure my solutions are not only correct, but practical and reliable in production.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
              "Express", "MongoDB", "PostgreSQL", "HTML/CSS", "Tailwind CSS",
              "Git", "Docker", "AWS", "CI/CD", "Jest", "React Testing Library",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-sm text-gray-700 font-medium px-4 py-1 rounded-full hover:bg-gray-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
