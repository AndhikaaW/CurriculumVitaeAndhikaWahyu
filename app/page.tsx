export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      <section style={{
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: "2.5rem 2rem",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center"
      }}>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Foto Profil"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
            border: "3px solid #4f8cff"
          }}
        />
        <h1 style={{ margin: "0.5rem 0", color: "#222" }}>Andi Pratama</h1>
        <h2 style={{ margin: "0.25rem 0", color: "#4f8cff", fontSize: "1.1rem", fontWeight: 500 }}>Frontend Developer</h2>
        <p style={{ color: "#555", fontSize: "0.98rem", margin: "1rem 0" }}>
          Saya adalah seorang pengembang web yang berfokus pada pembuatan antarmuka pengguna yang menarik dan responsif menggunakan React & Next.js.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1rem" }}>
          <a href="mailto:andi.pratama@email.com" style={{ color: "#4f8cff", textDecoration: "none", fontWeight: 500 }}>Email</a>
          <a href="https://linkedin.com/in/andipratama" target="_blank" rel="noopener noreferrer" style={{ color: "#4f8cff", textDecoration: "none", fontWeight: 500 }}>LinkedIn</a>
          <a href="https://github.com/andipratama" target="_blank" rel="noopener noreferrer" style={{ color: "#4f8cff", textDecoration: "none", fontWeight: 500 }}>GitHub</a>
        </div>
        <div style={{ textAlign: "left", marginTop: "1.5rem" }}>
          <h3 style={{ color: "#333", fontSize: "1rem", marginBottom: "0.5rem" }}>Keahlian:</h3>
          <ul style={{ paddingLeft: "1.2rem", color: "#444", fontSize: "0.97rem", margin: 0 }}>
            <li>React.js, Next.js</li>
            <li>TypeScript, JavaScript</li>
            <li>HTML, CSS, Tailwind</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
