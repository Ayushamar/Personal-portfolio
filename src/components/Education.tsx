import React from "react";

const educationTimeline = [
  {
    degree: "Bachelor of Technology (B.Tech) — Computer Science & Engineering",
    institution: "Dr. C.V. Raman University, Vaishali, Bihar",
    period: "Graduation Year: 2025",
  },
  {
    degree: "Intermediate (I.Sc) — Science Stream",
    institution: "D.N. High School, Muzaffarpur, Bihar",
    period: "Year of Completion: 2021",
  },
  {
    degree: "Matriculation — 10th Standard",
    institution: "DAV Public School, Muzaffarpur, Bihar",
    period: "Year of Completion: 2019",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-white to-softBlue py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title mb-8 flex items-center gap-2">
          <span className="text-3xl">🎓</span> Education
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {educationTimeline.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-md bg-white border border-blue-200 p-6 flex flex-col h-full"
            >
              <h3 className="font-bold text-lg mb-2">{item.degree}</h3>
              <div className="text-foreground/70 mb-1">{item.institution}</div>
              <div className="text-sm text-foreground/50">{item.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
