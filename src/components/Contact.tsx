'use client';

import { useState } from 'react';
import Image from 'next/image';

const serviceOptions = [
  'Marine Assurance & Compliance',
  'Cargo Operations & Loadout Oversight',
  'Hull & Machinery Survey',
  'P&I & Cargo Survey',
  'Tank Cleaning & Inspection',
  'Marine Consultancy & Claims',
  'General Enquiry',
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      /* TODO: Replace with Wix Forms API submission once Wix project is linked.
         import { forms } from '@wix/forms';
         await forms.submitForm({ formId: 'FORM_ID', values: form });
      */
      await new Promise((res) => setTimeout(res, 800)); // Placeholder delay
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__grid">
          {/* Contact details */}
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="section-title">Request a Survey or Enquiry</h2>
            <div className="divider" />
            <p className="section-lead" style={{ marginBottom: '2rem' }}>
              Our team is available to mobilise across Trinidad, Guyana, and the Eastern
              Caribbean. Reach us by phone, email, or using the form.
            </p>

            <div className="contact__detail">
              <div className="contact__detail-icon">📞</div>
              <div>
                <div className="contact__detail-label">Phone</div>
                {/* PLACEHOLDER — replace before go-live */}
                <div className="contact__detail-value">+1 (868) 000-0000</div>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">✉️</div>
              <div>
                <div className="contact__detail-label">Email</div>
                {/* PLACEHOLDER — replace before go-live */}
                <div className="contact__detail-value">info@taylorengineering.com</div>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">📍</div>
              <div>
                <div className="contact__detail-label">Address</div>
                {/* PLACEHOLDER — confirm full address with Andrew Taylor */}
                <div className="contact__detail-value">Port of Spain, Trinidad and Tobago</div>
              </div>
            </div>

            {/* Accent image */}
            <Image
              src="/assets/contact-ship.jpg"
              alt="Container ship at port"
              width={560}
              height={260}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                objectPosition: 'center 40%',
                borderRadius: 'var(--radius-md)',
                marginTop: '2rem',
              }}
            />
          </div>

          {/* Contact form */}
          <div className="contact__form">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Paul"
                    autoComplete="given-name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Taylor"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span style={{ color: 'var(--color-orange)' }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Organisation</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Shipping Co. Ltd."
                  autoComplete="organization"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service…</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your survey requirements, vessel details, location, or any other relevant information…"
                />
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </div>

              {status === 'success' && (
                <p className="form-message form-message--success">
                  Thank you — your enquiry has been received. We&apos;ll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p className="form-message form-message--error">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
