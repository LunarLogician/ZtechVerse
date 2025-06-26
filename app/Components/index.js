import { motion } from "framer-motion";

 <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.2
            }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <img 
              src="2.png" 
              alt="Profile Picture"
              className="w-60 h-60 md:w-40 md:h-40 lg:w-60 border-2 lg:h-60 rounded-full border-primary/30 object-cover"
            />
          </motion.div>