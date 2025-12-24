import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "40px",
        background: "#0b2c4d",
        color: "white",
        textAlign: "center"
      }}
    >
      <p>© 2025 Bindal Consulting</p>
      <p>Operational Excellence | Lean | TPM | Six Sigma</p>
    </motion.footer>
  );
}
