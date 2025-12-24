import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        background: "white",
        borderBottom: "1px solid #eee"
      }}
    >
      <strong>Bindal Consulting</strong>
      <div style={{ display: "flex", gap: "25px" }}>
        <a href="#about">About</a>
        <a href="#why">Why Us</a>
        <a href="#base">Approach</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}
