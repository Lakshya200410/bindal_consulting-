"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        padding: "120px 60px",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "60px",
        alignItems: "center",
        background: "linear-gradient(135deg, red, orange)",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ fontSize: "54px", lineHeight: "1.2" }}>
          Improved Bottom Line<br />Through Operational Excellence
        </h1>

        <p style={{ fontSize: "20px", marginTop: "25px", maxWidth: "520px" }}>
          Helping MSMEs achieve sustainable profitability using Lean, TPM and Six Sigma frameworks.
        </p>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
        alt="Operational Excellence"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          borderRadius: "16px",
        }}
      />
    </section>
  );
}
