const pricingData = {
  plans: [
    {
      name: "Free",
      price: "₹ 0",
      duration: "Lifetime",
      buttonText: "Create Free Account",
      buttonColor: "bg-blue-400",
      users: "1",
      pages: "5 Pages",
      features: [1, 0, 0, 0, 0, 0, 0, 0, 1]
    },
    {
      name: "Premium",
      price: "₹ 849",
      duration: "Month",
      buttonText: "Login to Buy",
      buttonColor: "bg-blue-400",
      users: "2",
      pages: "50 Pages",
      features: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
      name: "Enterprise",
      price: "₹ 4310",
      duration: "Year",
      buttonText: "Login to Buy",
      buttonColor: "bg-blue-400",
      users: "1",
      pages: "Unlimited",
      features: [1, 1, 1, 1, 1, 1, 1, 1, 1]
    }
  ],
  featuresList: [
    "Includes essential features to get started",
    "More advanced features for increased productivity",
    "Designing & Development",
    "Customizable options to meet your specific needs",
    "Secure data storage",
    "Email Support",
    "24/7 customer support",
    "Analytics and reporting",
    "Account Management"
  ]
};

export default pricingData;
