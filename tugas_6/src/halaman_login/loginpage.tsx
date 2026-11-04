
import React, { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Email dan kata sandi harus diisi!");
      return;
    }

    alert("Login berhasil!");
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="brand">
          <span>●</span>PELANGGAN DANG DANDI
        </div>

        <h2>Selamat Datang Kembali</h2>

        <p className="subtitle">
          Masuk untuk menikmati promo eksklusif dan
          kemudahan memesan menu favorit Anda.
        </p>

        <div className="social-buttons">
          <button
            type="button"
            className="social-btn"
            onClick={() => alert("Login Google")}
          >
            🌐 Akun Google
          </button>

          <button
            type="button"
            className="social-btn"
            onClick={() => alert("WhatsApp / OTP")}
          >
            💬 WhatsApp / OTP
          </button>
        </div>

        <div className="separator">
          atau masuk dengan email / nomor HP
        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email atau Nomor Handphone</label>

            <div className="input-box">
              <span>@</span>

              <input
                type="text"
                placeholder="contoh: dandi@kuliner.id atau 0812xxxx"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Kata Sandi</label>

            <div className="password-label">
              <a href="#lupa-password">Lupa Kata Sandi?</a>
            </div>

            <div className="input-box">
              <span>▣</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi rahasia Anda"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "◉" : "◎"}
              </button>
            </div>
          </div>

          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Ingat sesi saya di perangkat ini
          </label>

          <button type="submit" className="login-btn">
            Masuk ke Akun Saya <span>➜</span>
          </button>

        </form>

        <div className="register">
          Belum punya akun Dang Dandi?
          <a href="#daftar">Daftar Sekarang</a>
        </div>

        <div className="security">
          🔒 DATA ANDA TERLINDUNGI & AMAN
          (ENKRIPSI SSL 256-BIT)
        </div>

      </div>
    </div>
  );
}
