import { motion } from "framer-motion";

export default function Section({ id, title, children, light }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "80px 60px",
        background: light ? "#f5f7fa" : "white"
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>{title}</h2>
      <div style={{ maxWidth: "900px", fontSize: "18px", lineHeight: "1.7" }}>
        {children}
      </div>
    </motion.section>
  );
}
