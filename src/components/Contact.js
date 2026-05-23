import "../styles/contact.css";

export const renderContact = () => {
  return `
      <section id="contact" class="section contact-section">
        <div class="container">
          <div class="grid-2">
            
            <div class="contact-info reveal-left">
                <div class="contact-info-header" style="margin-bottom: 30px;">
                    <span>Connect</span>
                    <div style="display: flex; align-items: center; gap: 25px; margin-top: 20px;">
                        <img src="./logo.png" alt="Suryawanshi Bioenergy Logo" style="height: 120px; width: auto; flex-shrink: 0;" />
                        <div>
                            <h2 style="margin: 0; font-size: 2.2rem; color: var(--primary); line-height: 1.1; letter-spacing: -0.5px;">Suryawanshi<br/>Bioenergy</h2>
                            <p style="margin: 8px 0 0 0; font-size: 1.2rem; font-weight: 500; opacity: 0.9;">Get in touch with our team.</p>
                        </div>
                    </div>
                </div>
                <p class="contact-description">
                  We’d love to hear from you. Reach out for quotes, bulk orders, 
                  or any product inquiries. We respect your privacy.
                </p>
                
                <div class="contact-details">

                    <div class="contact-item">
                        <div class="contact-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                        <div class="contact-text">
                          <h4>Email Us</h4>
                          <p>info@suryawanshibioenergy.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div class="contact-text">
                          <h4>Call Us</h4>
                          <p>+91-8358001002</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="inquiry-card reveal-right">
                <form id="contact-form">
                    <div class="form-group">
                        <input type="text" id="contact-name" placeholder="Full Name" class="form-input" required />
                    </div>
                    <div class="form-group">
                        <input type="email" id="contact-email" placeholder="Email Address" class="form-input" required />
                    </div>
                    <div class="form-group">
                        <textarea id="contact-message" placeholder="Your Message" rows="5" class="form-input" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-submit">Send Inquiry</button>
                    <a href="https://wa.me/918358001002?text=Hello%20Suryawanshi%20Bioenergy,%20I%20am%20interested%20in%20your%20biomass%20pellets%20and%20would%20like%20to%20know%20more." target="_blank" class="btn btn-secondary btn-whatsapp">Chat via WhatsApp</a>
                </form>
            </div>

          </div>
        </div>
      </section>
    `;
};
