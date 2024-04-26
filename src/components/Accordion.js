import React, { useState } from "react";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="cursor-pointer px-[24px] py-[17px] rounded-[12px] border border-solid border-gradient my-6 w-[50%]">
      <div onClick={() => setShow(!show)} className="flex items-center justify-between">
        <h1 className="font-sans text-base font-semibold text-[#28262C]">
          {question}
        </h1>
        <span>
            {
                show ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>
            }
        </span>
      </div>
     { show && <p className="my-2">{answer}</p>}
    </div>
  );
};

export default Accordion;
