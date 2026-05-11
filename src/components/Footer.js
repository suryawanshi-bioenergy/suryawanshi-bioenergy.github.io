import "../styles/footer.css";

export const renderFooter = () => {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    
                    <div class="footer-brand">
                        <a href="#home" class="logo">SURYAWANSHI <span>BIOENERGY</span></a>
                        <p>Pioneering the future of clean industrial energy. High-density, carbon-neutral biofuels powering the nation's heaviest industries.</p>
                    </div>

                    <div class="footer-nav">
                        <h4 class="footer-title">Navigation</h4>
                        <ul class="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#process">Process</a></li>
                        </ul>
                    </div>

                    <div class="footer-hubs">
                        <h4 class="footer-title">Regional Hubs</h4>
                        <div class="footer-details">
                            <div class="footer-hub-item">
                                <span>Operations</span>
                                Jharkhand / Bihar / West Bengal
                            </div>
                            <a href="tel:+917049626295" class="footer-contact">+91-7049626295</a>
                        </div>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p id="copyright-text">© 2026 Suryawanshi Bioenergy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    `;
};
