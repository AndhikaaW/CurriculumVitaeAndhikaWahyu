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
          <h3 style={{ color: "#333", borderBottom: "2px solid #0077B5", paddingBottom: "0.5rem" }}>Pengalaman</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#0077B5", margin: "0.5rem 0" }}>Staff Muda Divisi Dana Usaha</h4>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>
              Himpunan Mahasiswa Program Studi Teknologi Informasi Politeknik Negeri Madiun - Musiman
            </p>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>
              Feb 2023 - Des 2023 · 11 bln
            </p>
            <p style={{ color: "#888", margin: "0.25rem 0", fontSize: "0.9rem" }}>
              Kota Madiun, Jawa Timur, Indonesia
            </p>
            <ul style={{ color: "#444", paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
              <li>Teamwork, Time Management dan +1 keahlian</li>
            </ul>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#0077B5", margin: "0.5rem 0" }}>Magang PT. Marstech Global</h4>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>
              PT. Marstech Global
            </p>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>
              Jun 2024 - Nov 2024 · 6 bln
            </p>
            <p style={{ color: "#888", margin: "0.25rem 0", fontSize: "0.9rem" }}>
              Kota Madiun, Jawa Timur, Indonesia
            </p>
            <ul style={{ color: "#444", paddingLeft: "1.2rem", marginTop: "0.5rem" }}>
              <li>Membuat Aplikasi Mobile untuk PT. Marstech Global</li>
              <li>Pengembangan website untuk PT. Marstech Global</li>
            </ul>
          </div>

          <h3 style={{ color: "#333", borderBottom: "2px solid #0077B5", paddingBottom: "0.5rem" }}>Pendidikan</h3>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#0077B5", margin: "0.5rem 0" }}>SMA Negeri 1 Pacitan</h4>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>2019 - 2022</p>
          </div>
          <div style={{ marginBottom: "1.5rem" }}>
            <h4 style={{ color: "#0077B5", margin: "0.5rem 0" }}>Politeknik Negeri Madiun</h4>
            <p style={{ color: "#666", margin: "0.25rem 0", fontSize: "0.9rem" }}>Ahli Madya, Teknologi Informasi • 2022 - 2025</p>
          </div>

          <h3 style={{ color: "#333", borderBottom: "2px solid #0077B5", paddingBottom: "0.5rem" }}>Keahlian</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
            {[
              "React Native",
              "JavaScript",
              "TypeScript",
              "Mobile UI/UX",
              "REST APIs",
              "Git",
              "Android Development",
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
