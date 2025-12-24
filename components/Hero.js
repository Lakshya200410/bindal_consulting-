import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ padding: "140px 60px", background: "#0b2c4d", color: "white" }}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "56px", maxWidth: "800px" }}
      >
        Improved Bottom Line through Operational Excellence
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "20px", maxWidth: "650px", marginTop: "20px" }}
      >
        Helping MSMEs scale sustainably using TPM, Lean and Six Sigma frameworks
      </motion.p>
    </section>
  );
}
