import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Section id="about" title="About Bindal Consulting">
        Founded by a Mechanical Engineer with 28+ years of experience across
        Automotive, Steel, Industrial Valve and Manufacturing industries.
        Leadership roles include COO, Business Excellence Manager, TPM Leader and
        Six Sigma Expert. Delivered ₹20 Cr savings, 21% manpower optimisation and
        turned negative bottom lines into +5% profitability.
      </Section>

      <Section id="why" title="Why Bindal Consulting?" light>
        <ul>
          <li>Customized TPM, Lean & Six Sigma methodology</li>
          <li>Hands-on strategy creation and execution</li>
          <li>Experience with blue & white collar workforce</li>
          <li>Exposure across Indian and European teams</li>
          <li><strong>No Improvement, No Payment</strong></li>
        </ul>
      </Section>

      <Section id="excellence" title="Operational Excellence">
        Operational Excellence means achieving operational goals with minimum
        effort and resources, resulting in an improved bottom line.
      </Section>

      <Section id="base" title="Base Approach – 6 Months" light>
        <h4>People</h4>
        <p>Skill mapping, training calendar, KPI setup, daily review meetings.</p>
        <h4>Process</h4>
        <p>As-is mapping, gap identification, elimination of non-value-added steps.</p>
        <h4>Machine</h4>
        <p>Preventive maintenance, breakdown analysis, autonomous maintenance.</p>
        <h4>Material</h4>
        <p>Supplier quality analysis, inventory monitoring and control.</p>
      </Section>

      <Section id="advance" title="Advance Approach – 18 Months">
        Value stream mapping, digitisation of information flow, predictive
        maintenance, SMED, supplier benchmarking and logistics cost optimisation.
      </Section>

      <Section id="results" title="Expected Results" light>
        <ul>
          <li>50–90% reduction in Quality PPM</li>
          <li>85–93% on-time delivery</li>
          <li>10–21% productivity improvement</li>
          <li>0.5–1.5% cost saving on revenue</li>
          <li>20–40% improvement in inventory turns</li>
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        Email: contact@bindalconsulting.in
      </Section>

      <Footer />
    </>
  );
}
