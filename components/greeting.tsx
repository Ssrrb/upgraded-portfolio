import { motion } from 'framer-motion';
import Image from 'next/image';

export const Greeting = () => {
  return (
    <div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20 px-8 size-full flex flex-col justify-center"
    >
      <div className="flex items-center mb-4">
        <div className="relative flex justify-center items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 w-[60px] h-[60px] mr-4 text-white text-xl font-bold">
          SR
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-semibold"
          >
            Hola! Soy el Asistente AI de Sebastián Rojas
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
        className="text-2xl text-zinc-500"
      >
        ¿Cómo puedo ayudarte hoy? Puedes preguntarme sobre su experiencia, proyectos o CV.
      </motion.div>
    </div>
  );
};
