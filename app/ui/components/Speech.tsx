import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Speech = () => {
  return (
    <motion.div
      className="w-1/2 flex items-end gap-2 justify-between mt-30"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-[80px] bg-white text-gray-700 p-6 rounded-[20px] rounded-br-none shadow-md flex items-center">
        <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Lorem ipsum dolor sit amet lerinat consectetur adipisicing.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img
        src="/profile.svg"
        alt=""
        className="w-12 h-12 rounded-full object-cover bg-pink-600"
      />
    </motion.div>
  );
};

export default Speech;