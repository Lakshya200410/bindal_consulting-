export const dynamic = "force-dynamic";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section id="about" title="About Bindal Consulting" center>
        Founded by a Mechanical Engineer with <strong>28+ years</strong> of experience across
        Automotive, Steel, Industrial Valve and Manufacturing industries.
        <br /><br />
        Proven leadership roles including COO, Business Excellence Manager and Six Sigma Expert,
        delivering <strong>₹20 Cr savings</strong> and converting negative bottom lines into profitability.
      </Section>


      <Section id="why" title="Why Bindal Consulting?" light center>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}>
          {[
            "Customized TPM, Lean & Six Sigma methodology",
            "Hands-on strategy creation and execution",
            "Experience with blue & white collar workforce",
            "Exposure to Indian & European teams",
            "No Improvement, No Payment"
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring" }}
              style={{
                padding: "30px",
                background: "white",
                borderRadius: "14px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="excellence" title="Operational Excellence">
        Operational Excellence means achieving operational goals with minimum
        effort and resources, resulting in an improved bottom line.
      </Section>

      <Section id="base" title="Base Approach – 6 Months" light center>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px"
        }}>
          {[
            { title: "People", text: "Skill mapping, KPI setup, training calendar, daily reviews" },
            { title: "Process", text: "As-is mapping, gap identification, elimination of NVA steps" },
            { title: "Machine", text: "Preventive maintenance, breakdown analysis, autonomy" },
            { title: "Material", text: "Supplier quality, inventory monitoring & control" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              style={{
                padding: "28px",
                borderRadius: "16px",
                background: "white",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>


      <Section id="advance" title="Advance Approach – 18 Months">
        Value stream mapping, digitisation of information flow, predictive
        maintenance, SMED, supplier benchmarking and logistics cost optimisation.
      </Section>

      <Section id="results" title="Expected Results" center>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
          marginTop: "40px"
      }}>
        {[
          "50–90% Reduction in Quality PPM",
          "85–93% On-time Delivery",
          "10–21% Productivity Improvement",
          "0.5–1.5% Cost Savings",
          "20–40% Inventory Turn Improvement"
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            style={{
              padding: "35px",
              borderRadius: "18px",
              background: "#0b2c4d",
              color: "white",
              fontSize: "18px",
            }}
          >
            {item}
          </motion.div>
          ))}
        </div>
      </Section>


      <Section id="contact" title="Let’s Improve Your Bottom Line" center>
        <p style={{ fontSize: "20px" }}>
          Email us at <strong>contact@bindalconsulting.in</strong><br />
          and start your Operational Excellence journey.
        </p>
      </Section>

      <Footer />
    </>
  );
}
