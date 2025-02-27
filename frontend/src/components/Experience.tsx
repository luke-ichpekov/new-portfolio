import { motion } from "framer-motion";

const companies = ["comp1", "comp2", "comp3", "comp4", "comp5"];

export default function Experience() {
  return (
    <section id="experience" className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
      <motion.div
        className="flex space-x-10 overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {companies.map((company, index) => (
          <div key={index} className="bg-gray-200 px-6 py-3 rounded-md shadow-md">
            {company}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
