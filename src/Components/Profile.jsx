import React, { useState } from "react";
 
import QRCode from "react-qr-code";

const UPI_ID = "naveenbsc.mca1518-1@okicici";  
const PLANS = [
  { name: "One Week Plan", amount: 20 },
  { name: "One Month Plan", amount: 200 },
  { name: "One Year Plan", amount: 1000 },
];

const QRCodeGenerator = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const generateUPILink = (amount) => {
    return `upi://pay?pa=${UPI_ID}&pn=naveen&am=${amount}&cu=INR&tn=SubscriptionPayment`;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {PLANS.map((plan, index) => (
          <button
            key={index}
            onClick={() => setSelectedPlan(plan)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
             {plan.name} - ₹{plan.amount}
          </button>
        ))}
      </div>
      {selectedPlan && (
        <div className="flex flex-col items-center mt-4">
          <h2 className="text-xl font-semibold mb-2">Scan to Pay</h2>
          <QRCode value={generateUPILink(selectedPlan.amount)} size={200} />

        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;







// import { useState, useEffect } from "react";
// import moment from "moment";
// import { Button } from "react-bootstrap";
// import { useAuth } from "./Auth"; // Assuming this is your auth context

// const UserProfile = ({ userData }) => {
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [expiryDate, setExpiryDate] = useState(null);

//   useEffect(() => {
//     if (userData?.subscription_date) {
//       const subscriptionDate = moment(userData.subscription_date, "M/D/YYYY h:mm A");
//       const today = moment();
//       const durationInDays =
//         userData.subscription_plan === "1 Week"
//           ? 7
//           : userData.subscription_plan === "1 Month"
//           ? 30
//           : userData.subscription_plan === "1 Year"
//           ? 365
//           : 0;

//       const calculatedExpiryDate = subscriptionDate.clone().add(durationInDays, "days");

//       if (today.isBefore(calculatedExpiryDate)) {
//         setIsSubscribed(true);
//         setExpiryDate(calculatedExpiryDate.format("M/D/YYYY h:mm A"));
//       }
//     }
//   }, [userData]);

//   return (
//     <div>
//       {isSubscribed ? (
//         <div className="subscribed-card">
//           <h3>You're Subscribed!</h3>
//           <p className="plan-name">{userData.subscription_plan} Plan</p>
//           <p className="plan-price">
//             ₹{userData.subscription_amount} / {userData.subscription_plan}
//           </p>
//           <p>Subscription valid until: {expiryDate || "N/A"}</p>
//           <Button variant="danger" onClick={() => alert("Cancel Subscription Coming Soon!")}>
//             Cancel Subscription
//           </Button>
//         </div>
//       ) : (
//         <div className="sub-container">
//           <h3>Choose a Subscription Plan</h3>
//           <div className="plans">
//             <div className="plan-card">
//               <h5>1 Week Trial Pack</h5>
//               <p>₹20</p>
//               <Button variant="success" onClick={() => handleBuyNow(20)}>
//                 Buy Now
//               </Button>
//             </div>
//             <div className="plan-card">
//               <h5>1 Month Pack</h5>
//               <p>₹200</p>
//               <Button variant="success" onClick={() => handleBuyNow(200)}>
//                 Buy Now
//               </Button>
//             </div>
//             <div className="plan-card">
//               <h5>1 Year Pack</h5>
//               <p>₹1000</p>
//               <Button variant="success" onClick={() => handleBuyNow(1000)}>
//                 Buy Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;
