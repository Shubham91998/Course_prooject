import React from 'react'

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Professional Growth",
      items: [
        "Skill development workshops",
        "One-on-one mentorship programs",
        "Hands-on experience with latest technologies",
      ],
    },
    {
      title: "Career Advancement",
      items: [
        "Potential job offers for outstanding performers",
        "Networking opportunities with industry professionals",
        "Build a strong professional portfolio",
      ],
    },
    {
      title: "Academic Benefits",
      items: [
        "Earn academic credits for your internship work",
        "Apply classroom knowledge to real-world projects",
        "Gain insights for future research opportunities",
      ],
    },
    {
      title: "Compensation",
      items: [
        "Competitive stipends to support living expenses",
        "Performance-based bonuses",
        "Travel and accommodation allowances for relocating interns",
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Benefits of Interning with Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">{benefit.title}</h3>
              <ul className="space-y-2">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection
