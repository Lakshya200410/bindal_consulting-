"use client";
import { motion } from "framer-motion";

export default function Section({ id, title, children, light, center }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "90px 60px",
        background: light ? "#f5f7fa" : "white",
        textAlign: center ? "center" : "left",
      }}
    >
      <h2 style={{ fontSize: "38px", marginBottom: "25px" }}>{title}</h2>
      <div
        style={{
          maxWidth: "900px",
          margin: center ? "0 auto" : "0",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        {children}
      </div>
    </motion.section>
  );
}
