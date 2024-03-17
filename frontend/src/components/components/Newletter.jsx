import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";
const Newletter = () => {
  return (
    <div>
      <div className="">
        <h3 className="text0-lg font-bold mb-2 flex items-center gap-2 ">
          <FaEnvelopeOpenText />
          Email me for hobs
        </h3>

        <p className="text-primary/75 text-base m-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem aspernatur quaerat magnam libero atque quis.
        </p>

        <div className="w-full space-y-4 mt-10">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />

          <input
            type="submit"
            value={"Subscribe"}
            name=""
            id=""
            className="w-full py-2 ol-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text0-lg font-bold mb-2 flex items-center gap-2 ">
          <FaEnvelopeOpenText />
          Get Noticed Faster
        </h3>

        <p className="text-primary/75 text-base m-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem aspernatur quaerat magnam libero atque quis.
        </p>

        <div className="w-full space-y-4">
          <input
            type="submit"
            value={"Subscribe"}
            name=""
            id=""
            className="w-full py-2 ol-3 border focus:outline-none bg-blue-500 rounded-sm text-white cursor-pointer font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default Newletter;
