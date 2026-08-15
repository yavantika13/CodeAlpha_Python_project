import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-sky-400 opacity-20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -150, 150, 0], y: [0, 150, -150, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"
      />

    </div>
  );
}