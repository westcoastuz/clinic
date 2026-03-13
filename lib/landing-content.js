export const landingStyles = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --gold: #C9941A;
      --gold-light: #E8B44A;
      --gold-dark: #A07514;
      --black: #0A0A0A;
      --dark: #111111;
      --dark2: #1A1A1A;
      --dark3: #222222;
      --text: #F5F0E8;
      --text-muted: #9A8E7A;
      --red: #e05555;
      --green: #34c759;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      background: var(--black);
      color: var(--text);
      overflow-x: hidden;
    }

    h1, h2, h3, .hero-title, .section-title, .service-name, .cta-title {
      font-family: 'Playfair Display', serif;
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: var(--dark); }
    ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

    /* ── HEADER ── */
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      background: rgba(10,10,10,0.92);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(201,148,26,0.15);
      padding: 0 5%;
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }
    .logo img {
      height: 56px;
      width: auto;
      display: block;
    }

    nav { display: flex; align-items: center; gap: 2rem; }
    nav a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.82rem;
      font-weight: 500;
      letter-spacing: 0.04em;
      transition: color 0.2s;
    }
    nav a:hover { color: var(--gold); }

    .header-phone {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--gold);
      font-size: 0.9rem;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: 0.04em;
    }
    .header-phone svg { flex-shrink: 0; }

    .burger {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      gap: 5px;
    }
    .burger span {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--gold);
      border-radius: 2px;
      transition: 0.3s;
    }

    /* ── HERO ── */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 120px 5% 80px;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 60% 70% at 70% 50%, rgba(201,148,26,0.08) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,148,26,0.05) 0%, transparent 60%);
    }

    .hero-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      pointer-events: none;
    }
    .orb1 {
      width: 500px; height: 500px;
      background: rgba(201,148,26,0.12);
      right: -100px; top: -100px;
      animation: float 8s ease-in-out infinite;
    }
    .orb2 {
      width: 300px; height: 300px;
      background: rgba(201,148,26,0.07);
      left: 10%; bottom: 10%;
      animation: float 10s ease-in-out infinite reverse;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-30px) scale(1.05); }
    }

    .hero-grid {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      width: 100%;
    }

    .hero-content {
      max-width: 640px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(201,148,26,0.12);
      border: 1px solid rgba(201,148,26,0.3);
      color: var(--gold-light);
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      padding: 0.4rem 1rem;
      border-radius: 100px;
      margin-bottom: 1.5rem;
    }

    .hero-title {
      font-size: clamp(2.2rem, 5vw, 3.8rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 1.2rem;
    }
    .hero-title span {
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-desc {
      font-size: 1rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 500px;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-location {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--gold-light);
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.06em;
      margin-top: 0.6rem;
      font-family: 'Inter', sans-serif;
      -webkit-text-fill-color: var(--gold-light);
    }

    .hero-image {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      aspect-ratio: 4/3;
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.15);
    }
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .img-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 0.85rem;
      background: linear-gradient(135deg, var(--dark2), var(--dark3));
      min-height: 300px;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--gold), var(--gold-dark));
      color: #000;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 700;
      padding: 0.9rem 2rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      letter-spacing: 0.03em;
      transition: all 0.25s;
      box-shadow: 0 4px 24px rgba(201,148,26,0.3);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(201,148,26,0.45);
      background: linear-gradient(135deg, var(--gold-light), var(--gold));
    }

    .btn-outline {
      background: transparent;
      color: var(--gold);
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0.9rem 2rem;
      border: 1.5px solid rgba(201,148,26,0.5);
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      letter-spacing: 0.03em;
      transition: all 0.25s;
    }
    .btn-outline:hover {
      background: rgba(201,148,26,0.08);
      border-color: var(--gold);
    }

    .btn-sm {
      font-size: 0.82rem;
      padding: 0.65rem 1.4rem;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      margin-top: 2.5rem;
    }
    .stat { text-align: center; }
    .stat-num {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Playfair Display', serif;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat-label {
      font-size: 0.7rem;
      color: var(--text-muted);
      letter-spacing: 0.08em;
    }

    /* ── SECTION COMMON ── */
    section { padding: 90px 5%; }

    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--gold);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 0.8rem;
    }
    .section-tag::before {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background: var(--gold);
    }

    .section-title {
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 0.8rem;
    }
    .section-title span {
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .section-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.7;
      max-width: 520px;
      margin-bottom: 3rem;
    }

    /* ── SERVICES ── */
















    .price-old {
      font-size: 1rem;
      color: var(--red);
      text-decoration: line-through;
      font-weight: 600;
      opacity: 0.7;
    }

    .price-new {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--green);
    }

    .price-only {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--gold);
    }


    .btn-details {
      background: rgba(201,148,26,0.1);
      color: var(--gold);
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 0.7rem 1.4rem;
      border: 1px solid rgba(201,148,26,0.25);
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.25s;
    }
    .btn-details:hover {
      background: rgba(201,148,26,0.2);
      border-color: var(--gold);
    }

    /* Accordion details */





    .details-cta {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(201,148,26,0.1);
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .details-cta-text {
      font-size: 0.82rem;
      color: var(--text-muted);
    }

    /* ── ABOUT ── */
    .about { background: var(--black); }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 4rem;
      align-items: start;
    }

    .about-text p {
      font-size: 0.92rem;
      color: var(--text-muted);
      line-height: 1.8;
      margin-bottom: 1.2rem;
    }

    .about-services-list {
      list-style: none;
      padding: 0;
      margin: 1.5rem 0;
    }
    .about-services-list li {
      font-size: 0.88rem;
      color: var(--text-muted);
      padding: 0.3rem 0 0.3rem 1.2rem;
      position: relative;
    }
    .about-services-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.65em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--gold);
    }

    .about-image {
      border-radius: 20px;
      overflow: hidden;
      aspect-ratio: 4/3;
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.15);
    }
    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* ── WHY US ── */
    .why { background: var(--dark); }

    .why-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .why-features {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .why-item {
      display: flex;
      gap: 1.2rem;
      align-items: flex-start;
    }

    .why-icon {
      flex-shrink: 0;
      width: 44px;
      height: 44px;
      background: rgba(201,148,26,0.1);
      border: 1px solid rgba(201,148,26,0.25);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
    }

    .why-text h4 {
      font-size: 0.92rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.3rem;
    }
    .why-text p {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .why-visual { position: relative; }

    .why-card-big {
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.15);
      border-radius: 20px;
      padding: 2.5rem;
      text-align: center;
    }

    .why-card-big .big-num {
      font-size: 4rem;
      font-weight: 800;
      font-family: 'Playfair Display', serif;
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }

    .why-card-big p {
      color: var(--text-muted);
      font-size: 0.82rem;
      margin-top: 0.5rem;
    }

    .mini-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }

    .mini-card {
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.1);
      border-radius: 12px;
      padding: 1.2rem;
      text-align: center;
    }
    .mini-card .mn {
      font-size: 1.6rem;
      font-weight: 800;
      font-family: 'Playfair Display', serif;
      color: var(--gold);
    }
    .mini-card .ml { font-size: 0.7rem; color: var(--text-muted); margin-top: 0.2rem; }

    /* ── TESTIMONIALS ── */
    .testimonials { background: var(--black); }

    .testimonials-slider {
      position: relative;
      margin-top: 2.6rem;
    }

    .testimonials-list {
      --testimonials-gap: 1.5rem;
      --testimonials-visible: 3;
      display: flex;
      gap: var(--testimonials-gap);
      align-items: stretch;
      overflow-x: auto;
      scroll-snap-type: x proximity;
      scroll-behavior: smooth;
      scrollbar-width: none;
      -ms-overflow-style: none;
      padding-bottom: 0.2rem;
      touch-action: pan-x;
      -webkit-overflow-scrolling: touch;
      overscroll-behavior-x: contain;
    }
    .testimonials-list::-webkit-scrollbar { display: none; }

    .testimonials-controls {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 0.8rem;
      margin-top: 1.2rem;
    }

    .testimonials-hint {
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 0.18rem;
      text-align: center;
    }

    .testimonials-hint-label {
      color: var(--gold-light);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .testimonials-hint-sub {
      color: var(--text-muted);
      font-size: 0.7rem;
      line-height: 1.4;
    }

    .testimonials-nav-group {
      display: flex;
      gap: 0.8rem;
    }

    .testimonials-nav {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(201,148,26,0.25);
      background: rgba(201,148,26,0.1);
      color: var(--gold);
      font-size: 1.3rem;
      line-height: 1;
      cursor: pointer;
      transition: all 0.25s;
    }
    .testimonials-nav:hover:not(:disabled) {
      background: rgba(201,148,26,0.2);
      border-color: var(--gold);
    }
    .testimonials-nav:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .testimonial-card {
      flex: 0 0 calc((100% - (var(--testimonials-gap) * (var(--testimonials-visible) - 1))) / var(--testimonials-visible));
      min-width: 0;
      scroll-snap-align: start;
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.1);
      border-radius: 16px;
      padding: 1.8rem;
      transition: border-color 0.25s;
      display: flex;
      flex-direction: column;
    }
    .testimonial-card:hover { border-color: rgba(201,148,26,0.3); }

    .stars {
      display: flex;
      gap: 3px;
      margin-bottom: 1rem;
    }
    .star { color: var(--gold); font-size: 0.9rem; }

    .testimonial-text {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.7;
      margin-bottom: 0;
      font-style: italic;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      min-height: calc(1em * 1.7 * 5);
    }

    .testimonial-text.expanded {
      -webkit-line-clamp: unset;
      overflow: visible;
      min-height: 0;
      display: block;
    }

    .testimonial-more {
      margin-top: 0.65rem;
      margin-bottom: 1.2rem;
      align-self: flex-start;
      background: transparent;
      border: none;
      color: var(--gold-light);
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      cursor: pointer;
      padding: 0;
    }

    .testimonial-more:hover {
      color: var(--gold);
    }

    .testimonial-more[hidden] {
      display: none;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: auto;
    }

    .author-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--gold-dark), var(--gold));
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      color: #000;
    }

    .author-name { font-size: 0.82rem; font-weight: 700; color: var(--text); }
    .author-date { font-size: 0.7rem; color: var(--text-muted); }

    /* ── CTA BANNER ── */
    .cta-banner {
      background: var(--dark);
      position: relative;
      overflow: hidden;
    }
    .cta-banner::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,148,26,0.08) 0%, transparent 70%);
      pointer-events: none;
    }
    .cta-inner {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }
    .cta-title {
      font-size: clamp(1.4rem, 3vw, 2rem);
      font-weight: 800;
      margin-bottom: 1rem;
    }
    .cta-title span {
      background: linear-gradient(135deg, var(--gold), var(--gold-light));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .cta-desc {
      color: var(--text-muted);
      font-size: 0.92rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    /* ── FORM SECTION ── */
    .form-section {
      background: var(--black);
      position: relative;
      overflow: hidden;
    }

    .form-section::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,148,26,0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    .form-wrap {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
      position: relative;
      z-index: 2;
    }

    .form-info h2 { margin-bottom: 1rem; }

    .form-benefits {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      margin-top: 2rem;
    }

    .form-benefit {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      font-size: 0.82rem;
      color: var(--text-muted);
    }
    .form-benefit-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--gold);
      flex-shrink: 0;
    }

    .appointment-form {
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.18);
      border-radius: 20px;
      padding: 2.5rem;
    }

    .form-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.4rem;
    }

    .form-subtitle {
      font-size: 0.78rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
    }

    .form-group { margin-bottom: 1.2rem; }

    .form-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--gold-light);
      letter-spacing: 0.06em;
      margin-bottom: 0.4rem;
    }

    .form-input,
    .form-select {
      width: 100%;
      background: rgba(255,255,255,0.04);
      border: 1.5px solid rgba(201,148,26,0.2);
      border-radius: 10px;
      padding: 0.85rem 1rem;
      color: var(--text);
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
      appearance: none;
    }

    .form-input::placeholder { color: rgba(154,142,122,0.5); }
    .form-input:focus,
    .form-select:focus {
      border-color: var(--gold);
      background: rgba(201,148,26,0.05);
    }

    .form-select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9941A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 1rem center;
      padding-right: 2.5rem;
      cursor: pointer;
    }

    .form-select option {
      background: var(--dark2);
      color: var(--text);
    }

    .form-submit {
      width: 100%;
      background: linear-gradient(135deg, var(--gold), var(--gold-dark));
      color: #000;
      font-family: 'Inter', sans-serif;
      font-size: 0.92rem;
      font-weight: 700;
      padding: 1rem;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      letter-spacing: 0.05em;
      transition: all 0.25s;
      margin-top: 0.5rem;
      box-shadow: 0 4px 24px rgba(201,148,26,0.3);
    }
    .form-submit:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(201,148,26,0.5);
    }

    .form-note {
      text-align: center;
      font-size: 0.7rem;
      color: var(--text-muted);
      margin-top: 1rem;
    }

    .success-msg {
      display: none;
      text-align: center;
      padding: 2rem;
    }
    .success-msg .check { font-size: 3rem; margin-bottom: 1rem; }
    .success-msg h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: var(--gold);
      margin-bottom: 0.5rem;
    }
    .success-msg p {
      font-size: 0.82rem;
      color: var(--text-muted);
    }

    /* ── CONTACTS ── */
    .contacts { background: var(--dark); }

    .contacts-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .contact-card {
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.1);
      border-radius: 16px;
      padding: 2rem;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      transition: border-color 0.25s;
    }
    .contact-card:hover { border-color: rgba(201,148,26,0.3); }

    .contact-icon {
      width: 44px;
      height: 44px;
      background: rgba(201,148,26,0.1);
      border: 1px solid rgba(201,148,26,0.2);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .contact-label {
      font-size: 0.7rem;
      color: var(--text-muted);
      font-weight: 600;
      letter-spacing: 0.08em;
      margin-bottom: 0.3rem;
    }

    .contact-val {
      font-size: 0.88rem;
      font-weight: 700;
      color: var(--text);
      text-decoration: none;
    }
    a.contact-val:hover { color: var(--gold); }

    .contacts-map {
      margin-top: 1.5rem;
      background: var(--dark2);
      border: 1px solid rgba(201,148,26,0.1);
      border-radius: 16px;
      padding: 1rem;
    }

    .contacts-map-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.8rem;
      margin-bottom: 0.8rem;
      flex-wrap: wrap;
    }

    .contacts-map-title {
      font-family: 'Playfair Display', serif;
      font-size: 1rem;
      color: var(--gold-light);
      line-height: 1.2;
    }

    .contacts-map-link {
      font-size: 0.74rem;
      color: var(--gold);
      text-decoration: none;
      font-weight: 700;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .contacts-map-link:hover { color: var(--gold-light); }

    .contacts-map-frame {
      border: 1px solid rgba(201,148,26,0.22);
      border-radius: 12px;
      overflow: hidden;
      background: var(--dark3);
      min-height: 400px;
    }

    .contacts-map-frame iframe {
      display: block;
      width: 100%;
      border: 0;
    }

    /* ── FOOTER ── */
    footer {
      background: var(--dark);
      border-top: 1px solid rgba(201,148,26,0.1);
      padding: 2.5rem 5%;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(201,148,26,0.1);
    }

    .footer-logo {
      display: inline-flex;
      align-items: center;
    }

    .footer-logo img {
      height: 34px;
      width: auto;
      display: block;
    }

    .footer-links {
      display: flex;
      gap: 1.5rem;
    }
    .footer-links a {
      font-size: 0.78rem;
      color: var(--text-muted);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--gold); }

    .footer-socials {
      display: flex;
      gap: 0.8rem;
    }

    .social-btn {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      border: 1px solid rgba(201,148,26,0.2);
      background: rgba(201,148,26,0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.25s;
    }
    .social-btn:hover {
      background: rgba(201,148,26,0.2);
      border-color: var(--gold);
      transform: translateY(-2px);
    }
    .social-btn svg { width: 18px; height: 18px; }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-copy { font-size: 0.72rem; color: var(--text-muted); }

    /* ── FLOATING CTA ── */
    .float-cta {
      position: fixed;
      left: 50%;
      bottom: max(0.9rem, env(safe-area-inset-bottom));
      transform: translateX(-50%);
      z-index: 98;
      display: flex;
      align-items: center;
      gap: 0.9rem;
      padding: 0.65rem 0.95rem;
      border-radius: 999px;
      background: rgba(8,8,8,0.88);
      border: 1px solid rgba(201,148,26,0.28);
      backdrop-filter: blur(10px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.55);
    }

    .float-btn {
      --btn-glow: rgba(201,148,26,0.45);
      width: 54px;
      height: 54px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.15);
      background: #141414;
      color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      position: relative;
      isolation: isolate;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.35), 0 8px 20px rgba(0,0,0,0.45);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .float-btn::after {
      content: '';
      position: absolute;
      inset: -10px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--btn-glow) 0%, rgba(0,0,0,0) 72%);
      opacity: 0.82;
      filter: blur(6px);
      z-index: -1;
      transition: opacity 0.2s;
    }

    .float-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.35), 0 12px 28px rgba(0,0,0,0.55);
    }

    .float-btn:hover::after { opacity: 1; }

    .float-btn svg { width: 24px; height: 24px; }

    .float-wa {
      --btn-glow: rgba(37,211,102,0.58);
      background: #0f2a19;
      border-color: rgba(37,211,102,0.45);
    }

    .float-tg {
      --btn-glow: rgba(34,158,217,0.56);
      background: #0b2230;
      border-color: rgba(34,158,217,0.45);
    }

    .float-call {
      --btn-glow: rgba(203,174,255,0.58);
      background: #201a2e;
      border-color: rgba(203,174,255,0.5);
    }

    .float-ig {
      --btn-glow: rgba(252,176,69,0.55);
      background: linear-gradient(135deg, #4f1f7b, #cf245f, #f79f3d);
      border-color: rgba(252,176,69,0.55);
    }

    /* ── MOBILE NAV ── */
    .mobile-nav {
      display: none;
      position: fixed;
      top: 78px; left: 0; right: 0;
      background: rgba(10,10,10,0.98);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(201,148,26,0.15);
      padding: 1.5rem 5%;
      flex-direction: column;
      gap: 1.2rem;
      z-index: 99;
    }
    .mobile-nav.open { display: flex; }
    .mobile-nav a {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 500;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.04);
      transition: color 0.2s;
    }
    .mobile-nav a:hover { color: var(--gold); }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      nav { display: none; }
      .burger { display: flex; }
      .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
      .hero-image { max-height: 350px; }
      .hero-stats { gap: 1.5rem; }
      .why-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
      .form-wrap { grid-template-columns: 1fr; gap: 2.5rem; }
      .contacts-grid { grid-template-columns: 1fr; }
      .contacts-map-title { font-size: 0.95rem; }
      .testimonials-list { --testimonials-visible: 2; }
    }

    @media (max-width: 600px) {
      header { height: 72px; }
      .logo img { height: 50px; }
      .mobile-nav { top: 72px; }
      section { padding: 60px 5%; }
      .hero { padding: 100px 5% 60px; }
      .testimonials-list {
        --testimonials-visible: 1;
        padding-right: 3.5rem;
        padding-bottom: 0.75rem;
      }
      .testimonial-card { flex-basis: calc(100% - 3.5rem); }
      .testimonials-controls {
        justify-content: center;
        flex-direction: column;
        gap: 0.85rem;
      }
      .testimonials-hint { display: flex; }
      .testimonials-nav { width: 50px; height: 50px; }
      .footer-top { flex-direction: column; align-items: flex-start; }
      .footer-bottom { flex-direction: column; text-align: center; }
      .footer-links { flex-wrap: wrap; }
      .price-new,
      .price-only {
        font-size: 1.55rem;
        line-height: 1;
      }
      .contacts-map-frame { min-height: 360px; }
      .float-cta {
        gap: 0.65rem;
        padding: 0.55rem 0.7rem;
      }
      .float-btn {
        width: 48px;
        height: 48px;
      }
      .float-btn svg { width: 21px; height: 21px; }
    }
  `;

export const landingHtmlBefore = `

<!-- HEADER -->
<header>
  <a href="#home" class="logo" aria-label="Smile Avenue Dental Clinic">
    <img src="/images/logo.jpg" alt="Smile Avenue Dental Clinic" loading="eager" />
  </a>
  <nav>
    <a href="#services">Услуги</a>
    <a href="#about">О клинике</a>
    <a href="#why">Преимущества</a>
    <a href="#reviews">Отзывы</a>
    <a href="#contacts">Контакты</a>
  </nav>
  <a href="tel:+998908226655" class="header-phone">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.32h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
    +998 90 822 66 55
  </a>
  <button class="burger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</header>

<!-- MOBILE NAV -->
<div class="mobile-nav" id="mobileNav">
  <a href="#services" onclick="toggleMenu()">Услуги</a>
  <a href="#about" onclick="toggleMenu()">О клинике</a>
  <a href="#why" onclick="toggleMenu()">Преимущества</a>
  <a href="#reviews" onclick="toggleMenu()">Отзывы</a>
  <a href="#appointment" onclick="toggleMenu()">Записаться</a>
  <a href="#contacts" onclick="toggleMenu()">Контакты</a>
</div>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-bg"></div>
  <div class="hero-orb orb1"></div>
  <div class="hero-orb orb2"></div>

  <div class="hero-grid">
    <div class="hero-content">
      <div class="hero-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Стоматология нового поколения
      </div>
      <h1 class="hero-title">
        Ваша идеальная улыбка &mdash; <span>наша гордость</span>
        <span class="hero-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          Ташкент, Узбекистан
        </span>
      </h1>
      <p class="hero-desc">
        Современные технологии, опытные врачи и безболезненное лечение. Качественная стоматология без компромиссов.
      </p>
      <div class="hero-actions">
        <a href="#appointment" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          Записаться на приём
        </a>
        <a href="#services" class="btn-outline">Наши услуги</a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <div class="stat-num">10+</div>
          <div class="stat-label">ЛЕТ ОПЫТА</div>
        </div>
        <div class="stat">
          <div class="stat-num">5000+</div>
          <div class="stat-label">ДОВОЛЬНЫХ ПАЦИЕНТОВ</div>
        </div>
        <div class="stat">
          <div class="stat-num">24/7</div>
          <div class="stat-label">ПРИЁМ ПАЦИЕНТОВ</div>
        </div>
      </div>
    </div>

    <div class="hero-image">
      <img src="/images/hero.jpg" alt="Smile Avenue" loading="eager" />
    </div>
  </div>
</section>

`;

export const landingHtmlAfter = `<!-- ABOUT -->
<section class="about" id="about">
  <div class="section-tag">О клинике</div>
  <h2 class="section-title">Стоматология <span>Smile Avenue</span></h2>

  <div class="about-grid">
    <div class="about-text">
      <p>Красивая и здоровая улыбка &mdash; это не просто элемент внешности, а важная часть уверенности человека и его повседневного комфорта. Однако идеальное состояние зубов не всегда зависит только от природных качеств. К счастью, достижения современной стоматологии позволяют восстановить здоровье полости рта и создать голливудскую улыбку практически в любом возрасте.</p>
      <p>Smile Avenue &mdash; это стоматологическое пространство нового поколения, где сочетаются высокий профессионализм врачей, технологичная лаборатория и внимательное отношение к каждому пациенту.</p>
      <p>Многие откладывают визит к стоматологу из-за тревоги или прошлого неудачного опыта. В Smile Avenue мы меняем это представление: создаём спокойную, комфортную атмосферу и сопровождаем пациента на каждом этапе &mdash; от консультации до завершения лечения.</p>

      <ul class="about-services-list">
        <li>Эстетическая реставрация и установка виниров</li>
        <li>Протезирование и коронки</li>
        <li>Имплантация</li>
        <li>Ортодонтическое лечение</li>
        <li>Профессиональное отбеливание</li>
        <li>Терапевтическое лечение зубов и дёсен</li>
        <li>Удаление зубов и профессиональная гигиена</li>
      </ul>

      <p>Smile Avenue &mdash; это место, где создают улыбки, которыми хочется гордиться.</p>

      <a href="#appointment" class="btn-primary" style="margin-top: 1.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        Записаться на приём
      </a>
    </div>

  </div>
</section>

<!-- WHY US -->
<section class="why" id="why">
  <div class="why-grid">
    <div>
      <div class="section-tag">Преимущества</div>
      <h2 class="section-title">Почему <span>Smile Avenue?</span></h2>
      <p class="section-desc">Мы не просто лечим зубы &mdash; мы создаём атмосферу доверия и безопасности.</p>
      <div class="why-features">
        <div class="why-item">
          <div class="why-icon">&#127942;</div>
          <div class="why-text">
            <h4>Сертифицированные врачи</h4>
            <p>Все специалисты имеют международные сертификаты и регулярно проходят обучение</p>
          </div>
        </div>
        <div class="why-item">
          <div class="why-icon">&#128300;</div>
          <div class="why-text">
            <h4>Современное оборудование</h4>
            <p>3D-сканирование, цифровой рентген и лазерные технологии для точной диагностики</p>
          </div>
        </div>
        <div class="why-item">
          <div class="why-icon">&#128138;</div>
          <div class="why-text">
            <h4>Безболезненное лечение</h4>
            <p>Современная анестезия и седация &mdash; абсолютный комфорт во время процедуры</p>
          </div>
        </div>
        <div class="why-item">
          <div class="why-icon">&#128203;</div>
          <div class="why-text">
            <h4>Прозрачные цены</h4>
            <p>Никаких скрытых платежей &mdash; полная стоимость известна до начала лечения</p>
          </div>
        </div>
      </div>
    </div>

    <div class="why-visual">
      <div class="why-card-big">
        <div class="big-num">98%</div>
        <p>Уровень удовлетворённости пациентов</p>
      </div>
      <div class="mini-cards">
        <div class="mini-card">
          <div class="mn">10+</div>
          <div class="ml">Лет опыта</div>
        </div>
        <div class="mini-card">
          <div class="mn">5K+</div>
          <div class="ml">Пациентов</div>
        </div>
        <div class="mini-card">
          <div class="mn">15+</div>
          <div class="ml">Специалистов</div>
        </div>
        <div class="mini-card">
          <div class="mn">24/7</div>
          <div class="ml">Приём пациентов</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="testimonials" id="reviews">
  <div class="section-tag">Отзывы</div>
  <h2 class="section-title">Что говорят <span>наши пациенты?</span></h2>

  <div class="testimonials-slider">
    <div class="testimonials-list" id="testimonialsList">
      <div class="testimonial-card">
        <div class="stars"><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span></div>
        <p class="testimonial-text">"Удаляла здесь сразу два верхних зуба мудрости и очень переживала. Врачи спокойно всё объяснили и поддержали, удаление прошло аккуратно и без боли. Очень вежливый персонал, рекомендую."</p>
        <button class="testimonial-more" type="button" aria-expanded="false">Читать полностью</button>
        <div class="testimonial-author">
          <div class="author-avatar">З</div>
          <div>
            <div class="author-name">Зара</div>
            <div class="author-date">21 февраля 2026</div>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="stars"><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span></div>
        <p class="testimonial-text">"Очень довольна клиникой: лечу зубы и поставила брекеты. Всё проходит комфортно и профессионально, врачи внимательные и подробно объясняют каждый этап лечения."</p>
        <button class="testimonial-more" type="button" aria-expanded="false">Читать полностью</button>
        <div class="testimonial-author">
          <div class="author-avatar">D</div>
          <div>
            <div class="author-name">Dilshoda Xolmiratova</div>
            <div class="author-date">8 февраля 2026</div>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="stars"><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span></div>
        <p class="testimonial-text">"Боялась идти к стоматологу, но всё прошло идеально. Осталась довольна визитом: всё быстро, спокойно и без боли. Спасибо за заботу!"</p>
        <button class="testimonial-more" type="button" aria-expanded="false">Читать полностью</button>
        <div class="testimonial-author">
          <div class="author-avatar">Д</div>
          <div>
            <div class="author-name">Дилноза Имирова</div>
            <div class="author-date">8 февраля 2026</div>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="stars"><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span></div>
        <p class="testimonial-text">"Очень чисто, вежливое и внимательное обслуживание, можно записаться в выходные дни. Доктор заранее обговаривал все манипуляции и не назначал лишних процедур."</p>
        <button class="testimonial-more" type="button" aria-expanded="false">Читать полностью</button>
        <div class="testimonial-author">
          <div class="author-avatar">О</div>
          <div>
            <div class="author-name">Ольга Галимханова</div>
            <div class="author-date">19 октября 2025</div>
          </div>
        </div>
      </div>

      <div class="testimonial-card">
        <div class="stars"><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span><span class="star">&#9733;</span></div>
        <p class="testimonial-text">"Добрые были врачи. Опыт хирурга впечатлил."</p>
        <button class="testimonial-more" type="button" aria-expanded="false">Читать полностью</button>
        <div class="testimonial-author">
          <div class="author-avatar">S</div>
          <div>
            <div class="author-name">Saidazim Zamonov</div>
            <div class="author-date">20 июля 2025</div>
          </div>
        </div>
      </div>
    </div>

    <div class="testimonials-controls">
      <div class="testimonials-hint" aria-hidden="true">
        <span class="testimonials-hint-label">Свайпайте отзывы</span>
        <span class="testimonials-hint-sub">или листайте стрелками</span>
      </div>
      <div class="testimonials-nav-group">
        <button class="testimonials-nav" id="testimonialsPrev" type="button" aria-label="Предыдущие отзывы" onclick="slideTestimonials(-1)">&#8592;</button>
        <button class="testimonials-nav" id="testimonialsNext" type="button" aria-label="Следующие отзывы" onclick="slideTestimonials(1)">&#8594;</button>
      </div>
    </div>
  </div>
</section>

<!-- CTA BANNER -->
<section class="cta-banner">
  <div class="cta-inner">
    <h2 class="cta-title">Готовы к <span>идеальной улыбке?</span></h2>
    <p class="cta-desc">Запишитесь на бесплатную консультацию прямо сейчас. Принимаем 24/7.</p>
    <div class="cta-buttons">
      <a href="#appointment" class="btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        Записаться на приём
      </a>
      <a href="tel:+998908226655" class="btn-outline">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.32h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
        Позвонить
      </a>
    </div>
  </div>
</section>

<!-- APPOINTMENT FORM -->
<section class="form-section" id="appointment">
  <div class="form-wrap">
    <div class="form-info">
      <div class="section-tag">Запись на приём</div>
      <h2 class="section-title">Запишитесь на <span>бесплатную консультацию</span></h2>
      <p class="section-desc">Заполните форму &mdash; администратор свяжется с вами в ближайшее время и подберёт удобное время.</p>
      <div class="form-benefits">
        <div class="form-benefit"><div class="form-benefit-dot"></div> Бесплатный первичный осмотр</div>
        <div class="form-benefit"><div class="form-benefit-dot"></div> Свяжемся в скором времени</div>
        <div class="form-benefit"><div class="form-benefit-dot"></div> Вы выбираете удобное время</div>
        <div class="form-benefit"><div class="form-benefit-dot"></div> Никаких обязательств</div>
      </div>
    </div>

    <div class="appointment-form" id="formBox">
      <div class="form-title">Запись на приём</div>
      <div class="form-subtitle">Заполните все поля</div>

      <form id="appointmentForm" onsubmit="submitForm(event)">
        <div class="form-group">
          <label class="form-label" for="phone">НОМЕР ТЕЛЕФОНА</label>
          <input
            class="form-input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="+998 __ ___ __ __"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label" for="name">ИМЯ И ФАМИЛИЯ</label>
          <input
            class="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Введите ваше имя"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label" for="procedure">ПРОЦЕДУРА</label>
          <select class="form-select" id="procedure" name="procedure" required>
            <option value="" disabled selected>Выберите процедуру</option>
            <option value="Бесплатная консультация">Бесплатная консультация</option>
            <option value="Виниры E-max">Виниры E-max</option>
            <option value="Отбеливание">Отбеливание</option>
            <option value="Брекет-система">Брекет-система</option>
            <option value="Имплантация">Имплантация</option>
            <option value="Профессиональная гигиена">Профессиональная гигиена</option>
            <option value="Циркониевая коронка">Циркониевая коронка</option>
            <option value="Лечение кариеса">Лечение кариеса</option>
            <option value="Удаление зуба">Удаление зуба</option>
            <option value="Другое">Другое</option>
          </select>
        </div>

        <input type="hidden" name="csrf_token" />

        <button type="submit" class="form-submit" id="submitBtn">
          Записаться на приём
        </button>
        <p class="form-note">Ваши данные надёжно защищены</p>
        <p class="form-error" id="formError" style="display:none;color:#e05555;font-size:0.78rem;text-align:center;margin-top:0.6rem;"></p>
      </form>

      <div class="success-msg" id="successMsg">
        <div class="check">&#10004;&#65039;</div>
        <h3>Ваша заявка принята!</h3>
        <p>Администратор свяжется с вами в ближайшее время.<br/>Спасибо, что выбрали Smile Avenue!</p>
      </div>
    </div>
  </div>
</section>

<!-- CONTACTS -->
<section class="contacts" id="contacts">
  <div class="section-tag">Контакты</div>
  <h2 class="section-title">Свяжитесь <span>с нами</span></h2>

  <div class="contacts-grid">
    <div class="contact-card">
      <div class="contact-icon">&#128205;</div>
      <div>
        <div class="contact-label">АДРЕС</div>
        <a href="https://go.2gis.com/sC07P" target="_blank" rel="noopener" class="contact-val">Пахлавона Махмуда 23</a>
      </div>
    </div>
    <div class="contact-card">
      <div class="contact-icon">&#128222;</div>
      <div>
        <div class="contact-label">ТЕЛЕФОН</div>
        <a href="tel:+998908226655" class="contact-val">+998 90 822 66 55</a><br/>
        <a href="tel:+998909329111" class="contact-val">+998 90 932 91 11</a>
      </div>
    </div>
    <div class="contact-card">
      <div class="contact-icon">&#128336;</div>
      <div>
        <div class="contact-label">ГРАФИК РАБОТЫ</div>
        <div class="contact-val">Принимаем 24/7</div>
      </div>
    </div>
  </div>

  <div class="contacts-map">
    <div class="contacts-map-top">
      <h3 class="contacts-map-title">Мы на карте Google Maps</h3>
      <a
        class="contacts-map-link"
        href="https://maps.google.com/?q=41.30285214788247,69.3058357766434"
        target="_blank"
        rel="noopener"
      >
        Открыть в Google Maps
      </a>
    </div>
    <div class="contacts-map-frame">
      <iframe
        title="Smile Avenue on Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.3667338631444!2d69.3058357766434!3d41.30285214788247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae613172432639%3A0x857746a53dc1a2b1!2sSmile%20Avenue!5e0!3m2!1sen!2s!4v1773040571965!5m2!1sen!2s"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-top">
    <div class="footer-logo">
      <img src="/images/logo.jpg" alt="Smile Avenue Dental Clinic" loading="lazy" />
    </div>
    <div class="footer-links">
      <a href="#services">Услуги</a>
      <a href="#about">О клинике</a>
      <a href="#reviews">Отзывы</a>
      <a href="#appointment">Запись</a>
      <a href="#contacts">Контакты</a>
    </div>
    <div class="footer-socials">
      <a href="https://www.instagram.com/smile_avenue_uz/?hl=ru" target="_blank" class="social-btn" title="Instagram">
        <svg viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-copy">&copy; 2026 Smile Avenue Dental Clinic. Все права защищены.</div>
  </div>
</footer>

<!-- FLOATING BUTTONS -->
<div class="float-cta">
  <a href="https://www.instagram.com/smile_avenue_uz/?hl=ru" target="_blank" rel="noopener" class="float-btn float-ig" title="Instagram">
    <svg viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  </a>
  <a href="https://wa.me/998908226655" target="_blank" rel="noopener" class="float-btn float-wa" title="WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.78 11.78 0 0012.07 0C5.68 0 .47 5.2.47 11.58c0 2.04.53 4.04 1.53 5.8L0 24l6.8-1.96a11.55 11.55 0 005.27 1.27h.01c6.38 0 11.58-5.2 11.58-11.58a11.5 11.5 0 00-3.14-8.25zm-8.44 17.9h-.01a9.6 9.6 0 01-4.88-1.33l-.35-.21-4.03 1.16 1.19-3.93-.23-.4a9.58 9.58 0 01-1.47-5.08c0-5.3 4.31-9.6 9.61-9.6 2.57 0 4.98 1 6.79 2.82a9.53 9.53 0 012.81 6.79c0 5.3-4.31 9.61-9.6 9.61zm5.27-7.21c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.65.14-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.43a8.79 8.79 0 01-1.61-2c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.14-.17.19-.29.29-.49.09-.2.05-.37-.03-.52-.08-.15-.65-1.57-.9-2.15-.23-.56-.47-.48-.65-.49h-.56c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.51 1.07 2.9 1.22 3.1c.14.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.22 1.35.19 1.86.12.56-.08 1.72-.7 1.97-1.37.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34z"/></svg>
  </a>
  <a href="https://t.me/smile_avenue_uz" target="_blank" rel="noopener" class="float-btn float-tg" title="Telegram">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.04 15.41l-.38 5.33c.54 0 .78-.23 1.06-.5l2.54-2.42 5.27 3.86c.97.54 1.65.26 1.91-.89l3.46-16.22h.01c.31-1.46-.53-2.03-1.47-1.68L1.11 10.87c-1.39.54-1.37 1.31-.24 1.66l5.2 1.62L18.15 6.5c.57-.35 1.09-.16.66.19"/></svg>
  </a>
  <a href="tel:+998909329111" class="float-btn float-call" title="Позвонить">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.32h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
  </a>
</div>

<script>
  function toggleMenu() {
    document.getElementById('mobileNav').classList.toggle('open');
  }



  const testimonialsList = document.getElementById('testimonialsList');
  const testimonialsState = {
    cloneCount: 0,
    originalsCount: 0,
    resizeTimer: null,
    autoTimer: null
  };

  function getTestimonialsStep() {
    if (!testimonialsList) return 0;
    const card = testimonialsList.querySelector('.testimonial-card:not(.is-clone)') || testimonialsList.querySelector('.testimonial-card');
    if (!card) return 0;
    const gap = parseFloat(getComputedStyle(testimonialsList).gap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  function getTestimonialsVisibleCount() {
    if (window.matchMedia('(max-width: 600px)').matches) return 1;
    if (window.matchMedia('(max-width: 900px)').matches) return 2;
    return 3;
  }

  function createTestimonialClone(card) {
    const clone = card.cloneNode(true);
    clone.classList.add('is-clone');
    clone.setAttribute('aria-hidden', 'true');
    return clone;
  }

  function syncTestimonialTruncation() {
    if (!testimonialsList) return;
    testimonialsList.querySelectorAll('.testimonial-card').forEach((card) => {
      const text = card.querySelector('.testimonial-text');
      const toggle = card.querySelector('.testimonial-more');
      if (!text || !toggle) return;

      text.classList.remove('expanded');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Читать полностью';
      toggle.hidden = text.scrollHeight - text.clientHeight <= 2;
    });
  }

  function toggleTestimonialText(toggle) {
    const card = toggle.closest('.testimonial-card');
    if (!card) return;
    const text = card.querySelector('.testimonial-text');
    if (!text) return;

    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      text.classList.remove('expanded');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Читать полностью';
      requestAnimationFrame(() => {
        toggle.hidden = text.scrollHeight - text.clientHeight <= 2;
      });
      return;
    }

    text.classList.add('expanded');
    toggle.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.textContent = 'Скрыть';
  }

  function rebuildTestimonialsLoop() {
    if (!testimonialsList) return;

    testimonialsList.querySelectorAll('.testimonial-card.is-clone').forEach((el) => el.remove());
    const originals = Array.from(testimonialsList.querySelectorAll('.testimonial-card:not(.is-clone)'));
    const originalsCount = originals.length;
    if (!originalsCount) return;

    const cloneCount = Math.min(getTestimonialsVisibleCount(), originalsCount);
    const headClones = originals.slice(0, cloneCount).map(createTestimonialClone);
    const tailClones = originals.slice(-cloneCount).map(createTestimonialClone);

    tailClones.reverse().forEach((clone) => testimonialsList.insertBefore(clone, testimonialsList.firstChild));
    headClones.forEach((clone) => testimonialsList.appendChild(clone));

    testimonialsState.cloneCount = cloneCount;
    testimonialsState.originalsCount = originalsCount;

    const step = getTestimonialsStep();
    if (!step) return;

    testimonialsList.style.scrollBehavior = 'auto';
    testimonialsList.scrollLeft = cloneCount * step;
    testimonialsList.style.scrollBehavior = '';
    requestAnimationFrame(syncTestimonialTruncation);
  }

  function normalizeTestimonialsLoop() {
    if (!testimonialsList) return;
    const step = getTestimonialsStep();
    if (!step || !testimonialsState.cloneCount || !testimonialsState.originalsCount) return;

    const leftEdge = step * (testimonialsState.cloneCount - 0.5);
    const rightEdge = step * (testimonialsState.cloneCount + testimonialsState.originalsCount - 0.5);

    if (testimonialsList.scrollLeft < leftEdge) {
      testimonialsList.style.scrollBehavior = 'auto';
      testimonialsList.scrollLeft += testimonialsState.originalsCount * step;
      testimonialsList.style.scrollBehavior = '';
      return;
    }

    if (testimonialsList.scrollLeft > rightEdge) {
      testimonialsList.style.scrollBehavior = 'auto';
      testimonialsList.scrollLeft -= testimonialsState.originalsCount * step;
      testimonialsList.style.scrollBehavior = '';
    }
  }

  function slideTestimonials(direction) {
    if (!testimonialsList) return;
    testimonialsList.scrollBy({ left: direction * getTestimonialsStep(), behavior: 'smooth' });
  }

  function stopAutoTestimonialsSlide() {
    clearInterval(testimonialsState.autoTimer);
    testimonialsState.autoTimer = null;
  }

  function startAutoTestimonialsSlide() {
    if (!testimonialsList || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    stopAutoTestimonialsSlide();
    testimonialsState.autoTimer = setInterval(() => slideTestimonials(1), 4200);
  }

  if (testimonialsList) {
    rebuildTestimonialsLoop();
    testimonialsList.addEventListener('scroll', normalizeTestimonialsLoop, { passive: true });
    testimonialsList.addEventListener('click', (event) => {
      const toggle = event.target.closest('.testimonial-more');
      if (!toggle || !testimonialsList.contains(toggle)) return;
      toggleTestimonialText(toggle);
    });
    window.addEventListener('resize', () => {
      clearTimeout(testimonialsState.resizeTimer);
      testimonialsState.resizeTimer = setTimeout(rebuildTestimonialsLoop, 120);
    });
    testimonialsList.addEventListener('mouseenter', stopAutoTestimonialsSlide);
    testimonialsList.addEventListener('mouseleave', startAutoTestimonialsSlide);
    testimonialsList.addEventListener('touchstart', stopAutoTestimonialsSlide, { passive: true });
    testimonialsList.addEventListener('touchend', startAutoTestimonialsSlide, { passive: true });
    startAutoTestimonialsSlide();
  }

  // Phone mask
  document.getElementById('phone').addEventListener('input', function(e) {
    let v = e.target.value.replace(/\\D/g, '');
    if (v.startsWith('998')) v = '+' + v;
    else if (v.startsWith('9') && !v.startsWith('998')) v = '+998' + v;
    else if (!v.startsWith('+')) v = '+998' + v;
    e.target.value = v.slice(0, 13);
  });

  async function submitForm(e) {
    e.preventDefault();
    const form    = document.getElementById('appointmentForm');
    const success = document.getElementById('successMsg');
    const errEl   = document.getElementById('formError');
    const btn     = document.getElementById('submitBtn');

    btn.disabled = true;
    btn.textContent = 'Отправка...';
    errEl.style.display = 'none';

    try {
      const res  = await fetch('/submit', { method: 'POST', body: new FormData(form) });
      const data = await res.json();

      if (!res.ok) {
        errEl.textContent = data.detail || 'Произошла ошибка. Попробуйте ещё раз.';
        errEl.style.display = 'block';
        btn.disabled = false;
        btn.textContent = 'Записаться на приём';
        return;
      }

      form.style.transition = 'opacity 0.3s';
      form.style.opacity = '0';
      setTimeout(() => {
        form.style.display = 'none';
        success.style.display = 'block';
        success.style.opacity = '0';
        success.style.transition = 'opacity 0.4s';
        requestAnimationFrame(() => { success.style.opacity = '1'; });
      }, 300);

    } catch (_) {
      errEl.textContent = 'Ошибка сети. Проверьте интернет-соединение.';
      errEl.style.display = 'block';
      btn.disabled = false;
      btn.textContent = 'Записаться на приём';
    }
  }

  // Header shadow on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
  });

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    const nav = document.getElementById('mobileNav');
    const burger = document.querySelector('.burger');
    if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
</script>
`;
