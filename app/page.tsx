export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif",
      padding: "2rem"
    }}>
      <section style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: "2.5rem 2rem",
        maxWidth: "800px",
        width: "100%"
      }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>         
          <img
            src="https://avatars.githubusercontent.com/u/124218367?s=400&u=b9dcb564fb16d9935f021180a1d0e8ea55fe76af&v=4"
            alt="Andhika Wahyu"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "1rem",
              border: "3px solid #0077B5"
            }}
          />
          <h1 style={{ margin: "0.5rem 0", color: "#222" }}>Andhika Wahyu</h1>
          <h2 style={{ margin: "0.25rem 0", color: "#0077B5", fontSize: "1.1rem", fontWeight: 500 }}>Mobile Developer</h2>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }}>
            <a href="mailto:andhikaw61@gmail.com" style={{ color: "#0077B5", textDecoration: "none", fontWeight: 500 }}>Email</a>
            <a href="https://www.linkedin.com/in/andhikaw/" target="_blank" rel="noopener noreferrer" style={{ color: "#0077B5", textDecoration: "none", fontWeight: 500 }}>LinkedIn</a>
            <a href="https://github.com/AndhikaaW" target="_blank" rel="noopener noreferrer" style={{ color: "#0077B5", textDecoration: "none", fontWeight: 500 }}>GitHub</a>
          </div>
        </div>

         <div style={{ textAlign: "left" }}>
          <h3 style={{ color: "#333", borderBottom: "2px solid #0077B5", paddingBottom: "0.5rem" }}>Experience</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#0077B5", margin: "0.5rem 0" }}>Mobile Developer - PT Datamax Technology</h4>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>Feb 2023 - Present</p>
            <ul style={{ color: "#444", paddingLeft: "1.2rem" }}>
              <li>Developing cross-platform mobile applications using React Native</li>
              <li>Implementing responsive UI/UX designs and mobile-first approaches</li>
              <li>Integration with RESTful APIs and mobile-specific features</li>
              <li>Performance optimization for mobile devices</li>
            </ul>
          </div>

          <h3 style={{ color: "#333", borderBottom: "2px solid #0077B5", paddingBottom: "0.5rem" }}>Education</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#0077B5", margin: "0.5rem 0" }}>Politeknik Negeri Madiun</h4>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>Bachelor's degree, Information Systems • 2019 - 2023</p>
          </div>

          <h3 style={{ color: "#333", borderBottom: "2px solid #0077B5", paddingBottom: "0.5rem" }}>Skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
            {[
              "React Native",
              "JavaScript",
              "TypeScript",
              "Mobile UI/UX",
              "Redux",
              "REST APIs",
              "Git",
              "Android Development",
              "iOS Development",
              "Cross-platform Development"
            ].map((skill) => (
              <span key={skill} style={{
                background: "#e1f0ff",
                color: "#0077B5",
                padding: "0.3rem 0.8rem",
                borderRadius: "15px",
                fontSize: "0.9rem"
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
