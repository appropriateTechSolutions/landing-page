"use client";
import { motion, useInView } from "framer-motion";
import {
  BarChart2Icon,
  BrainCircuitIcon,
  Clock10Icon,
  MousePointer2,
  PhoneCallIcon,
  Settings2Icon,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already triggered
  const sectionRef = useRef<HTMLDivElement>(null); // Reference to the section
  const isInView = useInView(sectionRef); // Hook to check if section is in view

  useEffect(() => {
    // Trigger animation only once when the section comes into view
    if (isInView && !hasAnimated) {
      setHasAnimated(true); // Mark the animation as triggered
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
      className="py-32 font-poppins bg-black"
    >
      <div id="service" className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className=" font-poppins text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl font-pj"
          >
            Our Work:
          </motion.h2>
          <motion.p
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mt-4 text-base leading-7 text-gray-400 sm:mt-8 font-pj"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis non sed deserunt ab nostrum fuga perspiciatis doloremque labore, reiciendis, eos iste ipsum vero assumenda voluptatem corporis, error voluptate. Fuga esse ducimus, veritatis odit quaerat eaque culpa voluptates cumque debitis animi rem doloremque minus commodi. Culpa id repellat magni eligendi eveniet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-2 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-4 xl:mt-24">
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="p-12 card bg-primary-content"
          >
            <BrainCircuitIcon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fugiat, sunt aperiam tenetur iure error perferendis sit earum! Esse consequatur ad enim ipsum ipsa tenetur sed similique, neque suscipit fugiat.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="p-12 card bg-primary-content"
          >
            <MousePointer2 className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus asperiores nostrum enim explicabo atque sunt, autem magni voluptatem magnam nobis repellendus eum itaque ipsam unde facilis illo natus voluptatum excepturi voluptatibus pariatur sequi repudiandae quas dolorum ratione? Atque, minus eos!
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9 }}
            className="p-12 card bg-primary-content"
          >
            <Settings2Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Lorem ipsum dolor sit amet.
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas a, est id perspiciatis autem magni, explicabo, non quo quisquam natus quia? Iure sit facilis deserunt tenetur aperiam quaerat voluptate, expedita eius tempora cumque quidem, excepturi consequatur quia esse! Soluta, quae.
            </p>
          </motion.div>

          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="p-12 card bg-primary-content"
          >
            <Clock10Icon className="mx-auto" size={32} />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Lorem ipsum dolor sit.
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum facere animi veniam quia sint omnis natus molestiae provident nostrum soluta expedita vel, fuga voluptatum, cumque tempora nemo corporis nam ullam sequi dignissimos quo consequuntur non? Incidunt, libero commodi? Provident, voluptate?
            </p>
          </motion.div>

          
        </div>
      </div>
    </motion.section>
  );
};
