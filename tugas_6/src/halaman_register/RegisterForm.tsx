import React, { useState } from 'react';
import { 
  FaGoogle, 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaTicketAlt, 
  FaChevronDown, 
  FaArrowRight 
} from 'react-icons/fa';
import './RegisterForm.css';

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    referralCode: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showReferral, setShowReferral] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Header */}
        <div className="register-header">
          <div className="title-row">
            <h2>Buat Akun Baru</h2>
            <span className="badge-fast">Registrasi Cepat</span>
          </div>
          <p className="subtitle">
            Daftar dalam 1 menit dan nikmati beragam kemudahan pesan antar serta promo lezat.
          </p>
        </div>

        {/* Social Register */}
        <button type="button" className="btn-google">
          <FaGoogle className="google-icon" />
          <span>Daftar Cepat dengan Google</span>
        </button>

        {/* Divider */}
        <div className="divider">
          <span>ATAU ISI DATA MANUAL</span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="register-form">
          {/* Nama Lengkap */}
          <div className="form-group">
            <div className="label-row">
              <label>Nama Lengkap</label>
              <span className="required-text">Wajib diisi</span>
            </div>
            <div className="input-wrapper">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Contoh: Dandi Pratama"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Nomor WhatsApp / HP */}
          <div className="form-group">
            <div className="label-row">
              <label>Nomor WhatsApp / HP</label>
              <span className="helper-label">Untuk Verifikasi Promo & Struk</span>
            </div>
            <div className="input-wrapper phone-wrapper">
              <div className="country-code">
                <span className="flag">🇮🇩</span>
                <span>+62</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="812-3456-7890"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <span className="info-text">
              ⓘ Kode OTP dan notifikasi pengantar kurir akan dikirimkan ke nomor ini.
            </span>
          </div>

          {/* Alamat Email */}
          <div className="form-group">
            <label>Alamat Email</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="nama@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Grid Password */}
          <div className="form-grid">
            <div className="form-group">
              <label>Kata Sandi</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Min. 8 karakter"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <FaEye 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)} 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Konfirmasi Kata Sandi</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Ulangi kata sandi"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <FaEye 
                  className="eye-icon" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                />
              </div>
            </div>
          </div>

          {/* Box Kekuatan Sandi */}
          <div className="password-strength-box">
            <div className="strength-header">
              <span>Kekuatan Sandi:</span>
              <span className="strength-status">Belum Diisi</span>
            </div>
            <p className="strength-desc">
              Gunakan minimal 8 huruf dengan kombinasi angka dan simbol agar lebih aman.
            </p>
          </div>

          {/* Accordion Voucher / Referral */}
          <div className="referral-accordion">
            <button 
              type="button" 
              className="referral-btn" 
              onClick={() => setShowReferral(!showReferral)}
            >
              <div className="referral-btn-left">
                <FaTicketAlt className="ticket-icon" />
                <span>Punya Kode Referral atau Voucher Teman? (Opsional)</span>
              </div>
              <FaChevronDown className={`chevron ${showReferral ? 'open' : ''}`} />
            </button>
            {showReferral && (
              <div className="referral-content">
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Masukkan kode referral/voucher"
                  value={formData.referralCode}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Syarat & Ketentuan */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms">
              Saya telah membaca dan menyetujui <b>Syarat & Ketentuan Layanan</b> serta <b>Kebijakan Privasi Ayam Bakar Bang Dandi</b> untuk perlindungan data pelanggan.
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-submit">
            <span>Daftar & Klaim Voucher Rp25.000</span>
            <FaArrowRight />
          </button>
        </form>

        {/* Footer Link */}
        <div className="register-footer">
          <span>Sudah punya akun Sahabat Dandi? </span>
          <a href="#login">Masuk di sini</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;