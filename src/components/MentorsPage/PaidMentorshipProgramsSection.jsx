import { useState } from "react";

const PaidMentorshipProgramsSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Elite");

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Paid Mentorship Programs</h2>
        <div className="flex justify-center mb-8">
          {plans.map((plan, index) => (
            <button
              key={index}
              className={`px-6 py-2 ${plan === selectedPlan ? "bg-purple-600 text-white" : "bg-white"} ${index === 0 ? "rounded-l-lg" : ""} ${index === plans.length - 1 ? "rounded-r-lg" : ""}`}
              onClick={() => setSelectedPlan(plan)}
            >
              {plan}
            </button>
          ))}
        </div>
        <div className="bg-white flex justify-center w-1/2 items-center rounded-lg shadow-lg p-8">
          <div className="flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">{selectedPlan} Mentorship</h3>
            <p className="text-3xl font-bold text-purple-600 mb-6">{plansDetails[selectedPlan].price}</p>
            <ul className="list-disc list-inside mb-6 space-y-2 text-left">
              {plansDetails[selectedPlan].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 text-base transition-colors duration-200">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const plans = ["Basic", "Pro", "Elite"];

const plansDetails = {
  Basic: {
    price: "$99/month",
    features: [
      "2 one-on-one sessions per month",
      "Access to group workshops",
      "Email support"
    ]
  },
  Pro: {
    price: "$199/month",
    features: [
      "4 one-on-one sessions per month",
      "Priority access to group workshops",
      "24/7 chat support",
      "Resume review and career guidance"
    ]
  },
  Elite: {
    price: "$299/month",
    features: [
      "8 one-on-one sessions per month",
      "Exclusive advanced workshops",
      "24/7 priority support",
      "Personalized project assistance",
      "Job placement assistance"
    ]
  }
};

export default PaidMentorshipProgramsSection;
