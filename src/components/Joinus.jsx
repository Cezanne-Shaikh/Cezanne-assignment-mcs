import React from "react";
import Forms from "./Forms";

const Joinus = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-black text-3xl lg:text-6xl font-bold ">
          Want to{" "}
          <span className="text-sky-600 text-3xl lg:text-6xl font-bold">
            Join
          </span>{" "}
          us?
        </p>
        <p className="text-black text-lg lg:text-6xl font-normal mt-10">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="flex gap-0 lg:gap-10 items-center text-center justify-center flex-wrap">
        <Forms
          title="Commencement of business "
          description=" Invested shareholders must confirm payment and office address"
          days={"Within 180 days"}
          fees={"₹50,000"}
          whom={"for the company"}
        />
        <Forms
          title={"Auditor Appointment"}
          description={
            "Company informs new auditor and submits ADT.1 form to ROC."
          }
          days={"Within 30 days"}
          fees={"₹300"}
          whom={"per month"}
        />
        <Forms
          title={"DIN eKYC"}
          description={
            "Directors share personal information for identification & verification "
          }
          days={"Every Year"}
          fees={"₹5000"}
          whom={"one time"}
        />
        <Forms
          title={"DPT-3"}
          description={
            "Companies report money taken from people to ROC auditors confirm details."
          }
          days={"Within 30 days"}
          fees={"₹300"}
          whom={"per month"}
        />
        <Forms
          title={"MCA Form AOC-4"}
          description={
            "It's like an official report card for a company's documents"
          }
          days={"On or Before 30th November "}
          fees={"₹200"}
          whom={"per day (No upper Limit)"}
        />
        <Forms
          title={"MCA Form MGT-7"}
          description={
            "Companies must annually report activities and finances to the registrar."
          }
          days={"On or Before 31st December"}
          fees={"₹200"}
          whom={"per day (No upper Limit)"}
        />
      </div>

      <div className="mt-10 text-base font-normal flex justify-center items-center">
        <p>
          * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200{" "}
          <span className="font-bold">every day</span> until you file the form .
          There is no maximum penalty amount. So, if you don't file the form for
          a year, you will owe ₹73,000 per form
        </p>
      </div>
    </div>
  );
};

export default Joinus;
