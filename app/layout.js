export const metadata = {
  title: "Bindal Consulting | Operational Excellence",
  description: "Improved Bottom Line through TPM, Lean and Six Sigma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
