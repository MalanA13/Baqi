/* =============================================
   UKM BAQI UPI — Main JavaScript
   Multi-language, WhatsApp, Register CTA
   ============================================= */

// ── 1. TRANSLATIONS ────────────────────────────
const translations = {
  id: {
    // Nav
    "nav.home":      "Home",
    "nav.about":     "Tentang",
    "nav.vision":    "Visi & Misi",
    "nav.structure": "Struktur",
    "nav.programs":  "Program",
    "nav.services":  "Layanan",
    "nav.contact":   "Hubungi Kami",

    // Hero
    "hero.badge":       "Website Resmi",
    "hero.subtitle":    "Belajar Al-Qur'an Intensif",
    "hero.desc":        "Unit Kegiatan Mahasiswa yang berfokus pada pembinaan dakwah Al-Qur'an di lingkungan Universitas Pendidikan Indonesia. Menanamkan nilai spiritual melalui pendidikan Al-Qur'an yang modern dan inklusif.",
    "hero.contact":     "Hubungi Kami",
    "hero.register":    "Daftar Anggota",
    "hero.soon":        "Segera",
    "hero.verse":       '"Sesungguhnya Kamilah yang menurunkan Al-Qur’an dan pasti Kami (pula) yang memeliharanya." — Q.S. Al-Hijr: 9',
    "hero.growth":      "Spiritual Growth",
    "hero.mentorship":  "Guided Mentorship",

    // About
    "about.label":   "Sejarah Kami",
    "about.title":   "Berdiri 1987, Mewarisi Semangat Dakwah",
    "about.desc":    "UKM BAQI UPI telah menjadi pusat pembelajaran Al-Qur'an dan pengembangan karakter islami bagi mahasiswa UPI selama lebih dari tiga dekade. Berawal dari semangat dakwah di lingkungan kampus, kami terus bertransformasi menjadi wadah yang profesional dan relevan dengan perkembangan zaman.",
    "about.years":   "Tahun Berkhidmat",
    "about.members": "Anggota Aktif",

    // Vision
    "vision.label":       "Visi Kami",
    "vision.text":        '"Menjadi lembaga dakwah kampus yang unggul dalam pembinaan Al-Qur\'an dan membentuk karakter rabbani bagi sivitas akademika UPI."',
    "vision.missionLabel": "Misi Kami",

    // Mission
    "mission.edu.title":    "Pendidikan",
    "mission.edu.desc":     "Menyelenggarakan program pembelajaran Al-Qur'an yang sistematis dan berkualitas bagi seluruh mahasiswa.",
    "mission.dev.title":    "Pembinaan",
    "mission.dev.desc":     "Membentuk kader dakwah yang memiliki pemahaman Al-Qur'an yang mendalam dan berakhlakul karimah.",
    "mission.syiar.title":  "Syiar Islam",
    "mission.syiar.desc":   "Mensyiarkan nilai-nilai Al-Qur'an secara luas di lingkungan kampus dan masyarakat sekitar.",

    // Structure
    "structure.label": "Struktur Organisasi",
    "structure.title": "Hierarki Kepengurusan",
    "org.mpo":              "Bimbingan strategis dan pengawasan",
    "org.chairman":         "Ketua Umum",
    "org.chairman.desc":    "Menetapkan kebijakan, koordinasi, dan akuntabilitas organisasi",
    "org.secretary":        "Sekretaris Umum",
    "org.secretary.desc":   "Mengelola administrasi dan kesekretariatan",
    "org.secretary.team":   "Tim Kesekretariatan",
    "org.treasurer":        "Bendahara Umum",
    "org.treasurer.desc":   "Mengelola dan melaporkan keuangan",
    "org.treasurer.team":   "Tim Ekonomi dan Keuangan",
    "org.dpq":     "Departemen Pengembangan Al-Qur'an",
    "org.dppo":    "Departemen Pengembangan Organisasi",
    "org.depikom": "Departemen Informasi & Komunikasi",

    // Programs
    "programs.label": "Program Unggulan",
    "programs.title": "Tumbuh Bersama dalam Iman",
    "prog.posttest":   "Kegiatan Test baca Al-Qur'an untuk mengetahui tingkat bacaan Al-Qur'an, lalu mahasiswa akan di test kembali.",
    "prog.gopmq":     "Rangkaian Kaderisasi untuk mempersiapkan CaGenQ menjadi GenQ yang siap berdinamika di kepengurusan atau seminimalnya untuk diri mereka sendiri.",
    "prog.stuband":    "Program untuk berdiskusi, saling berbagi pengalaman dan insight terkait pengelolaan organisasi dengan organisasi kampus lain yang memiliki visi dan misi serupa.",
    "prog.mediacentre": "Media informasi, komunikasi dan sarana dakwah seputar kegiatan BAQI.",

    // Services
    "services.label":       "Layanan & Fasilitas",
    "services.title":       "Fasilitas yang Ada",
    "service.borrow.title": "Peminjaman Inventaris",
    "service.borrow.desc":  "Layanan peminjaman alat multimedia, sound system, dan perlengkapan event untuk kegiatan dakwah fakultas atau jurusan.",
    "service.borrow.btn":   "Ajukan Peminjaman",

    // Gallery
    "gallery.label": "Galeri",
    "gallery.title": "Momen Kebersamaan",

    // CTA
    "cta.title": "Bergabunglah Bersama Kami",
    "cta.desc":  "Jadilah bagian dari keluarga BAQI UPI. Pendaftaran anggota baru akan segera dibuka.",
    "cta.btn":   "Daftar Anggota",
    "cta.soon":  "Segera Hadir",

    // Contact
    "contact.label": "Kontak",
    "contact.title": "Hubungi Kami",
    "contact.hq":    "Sekretariat",
    "contact.email": "Email",
    "contact.phone": "WhatsApp",
    "contact.maps":  "Buka di Maps",

    // Footer
    "footer.rights":  "Hak Cipta Dilindungi.",
    "footer.passion": "Dibuat dengan Semangat Spiritual.",
  },

  en: {
    // Nav
    "nav.home":      "Home",
    "nav.about":     "About",
    "nav.vision":    "Vision & Mission",
    "nav.structure": "Structure",
    "nav.programs":  "Programs",
    "nav.services":  "Services",
    "nav.contact":   "Contact Us",

    // Hero
    "hero.badge":       "Official Website",
    "hero.subtitle":    "Intensive Al-Qur'an Learning",
    "hero.desc":        "A Student Activity Unit focused on Al-Qur'an da'wah development within Universitas Pendidikan Indonesia, instilling spiritual values through modern and inclusive Qur'anic education.",
    "hero.contact":     "Contact Us",
    "hero.register":    "Register",
    "hero.soon":        "Soon",
    "hero.verse":       '"Indeed, it is We who sent down the message [i.e., the Qur’ān], and indeed, We will be its guardian." — Q.S. Al-Hijr: 9',
    "hero.growth":      "Spiritual Growth",
    "hero.mentorship":  "Guided Mentorship",

    // About
    "about.label":   "Our History",
    "about.title":   "Founded 1987, Building a Legacy of Da'wah",
    "about.desc":    "UKM BAQI UPI has been the center of Qur'anic learning and Islamic character development for UPI students for over three decades. Starting from a spirit of campus da'wah, we continue to transform into a professional and relevant organization for the modern era.",
    "about.years":   "Years of Service",
    "about.members": "Active Members",

    // Vision
    "vision.label":       "Our Vision",
    "vision.text":        '"To become a leading campus da\'wah institution excelling in Al-Qur\'an development and forming a rabbani character among UPI academics."',
    "vision.missionLabel": "Our Mission",

    // Mission
    "mission.edu.title":    "Education",
    "mission.edu.desc":     "Providing systematic and high-quality Qur'anic learning programs for all students.",
    "mission.dev.title":    "Development",
    "mission.dev.desc":     "Forming da'wah cadres with deep Qur'anic understanding and noble character (akhlakul karimah).",
    "mission.syiar.title":  "Islamic Outreach",
    "mission.syiar.desc":   "Spreading Qur'anic values widely across campus and the surrounding community.",

    // Structure
    "structure.label": "Organization",
    "structure.title": "Organizational Hierarchy",
    "org.mpo":              "Strategic guidance and supervision",
    "org.chairman":         "General Chairman",
    "org.chairman.desc":    "Establish policies, coordinate organization, and accountability",
    "org.secretary":        "General Secretary",
    "org.secretary.desc":   "Manage administration and secretariat",
    "org.secretary.team":   "Secretariat Team",
    "org.treasurer":        "General Treasurer",
    "org.treasurer.desc":   "Manage and report finance",
    "org.treasurer.team":   "Finance & Economy Team",
    "org.dpq":     "Al-Qur'an Development Department",
    "org.dppo":    "Organizational Development Department",
    "org.depikom": "Information & Communication Department",

    // Programs
    "programs.label": "Program Highlights",
    "programs.title": "Growing Together in Faith",
    "prog.posttest":   "The Al-Qur'an reading test activity is to determine the level of Al-Qur'an reading, then the students will be tested again.",
    "prog.gopmq":     "A Cadre Training program to prepare CaGenQ to become GenQ who are ready to be dynamic in management or at least for themselves.",
    "prog.stuband":    "A program for discussion, sharing experiences and insights related to organizational management with other campus organizations that have similar vision and mission.",
    "prog.mediacentre":    "Information media, communication, and da'wah facilities regarding BAQI activities.",

    // Services
    "services.label":       "Services & Facilities",
    "services.title":       "Available Facilities",
    "service.borrow.title": "Equipment Lending",
    "service.borrow.desc":  "Multimedia equipment, sound system, and event supplies lending service for faculty or department da'wah activities.",
    "service.borrow.btn":   "Request Lending",

    // Gallery
    "gallery.label": "Gallery",
    "gallery.title": "Moments of Togetherness",

    // CTA
    "cta.title": "Join Us",
    "cta.desc":  "Be part of the BAQI UPI family. New member registration will open soon.",
    "cta.btn":   "Register as Member",
    "cta.soon":  "Coming Soon",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Get in Touch",
    "contact.hq":    "Headquarters",
    "contact.email": "Email Address",
    "contact.phone": "WhatsApp",
    "contact.maps":  "Open in Maps",

    // Footer
    "footer.rights":  "All Rights Reserved.",
    "footer.passion": "Created with Spiritual Passion.",
  }
};

// ── 2. LANGUAGE SWITCHER ───────────────────────
let currentLang = localStorage.getItem('baqi-lang') || 'id';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('baqi-lang', lang);

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  initScrollReveal();
});

// ── 3. WHATSAPP REDIRECT ───────────────────────
const WHATSAPP_NUMBER = '6287777918666'; // Replace with actual number
const WHATSAPP_MSG_ID = 'Halo, saya ingin mengetahui lebih lanjut tentang UKM BAQI UPI.';
const WHATSAPP_MSG_EN = 'Hello, I would like to learn more about UKM BAQI UPI.';

function openWhatsApp() {
  const msg = currentLang === 'en' ? WHATSAPP_MSG_EN : WHATSAPP_MSG_ID;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ── 4. REGISTER BUTTON (DISABLED → GFORM LINK) ─
// When registration opens, change disabled to enabled and set this URL:
const GFORM_URL = 'https://forms.gle/YOUR_GFORM_LINK_HERE'; // Replace with actual link

function openRegisterForm() {
  window.open(GFORM_URL, '_blank');
}

// Uncomment these lines when registration opens:
// document.getElementById('registerBtn').disabled = false;
// document.getElementById('registerBtn').onclick = openRegisterForm;
// document.getElementById('registerBtn').style.opacity = '1';
// document.getElementById('registerBtn').style.cursor = 'pointer';
// document.getElementById('registerCta').disabled = false;
// document.getElementById('registerCta').onclick = openRegisterForm;

// ── 5. MOBILE NAV TOGGLE ───────────────────────
function toggleMenu() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
  const nav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// ── 6. SCROLL REVEAL ───────────────────────────
function initScrollReveal() {
  const observerOpts = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOpts);

  const targets = document.querySelectorAll(
    '.mission-card, .program-card, .stat-card, .gallery-item, .service-card, .about__content, .vision__quote'
  );

  targets.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

// ── 7. ACTIVE NAV LINK ON SCROLL ──────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header__nav a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--primary)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── 8. DEPT PROKER TOGGLE ──────────────────────
function toggleProker(card) {
  const isOpen = card.classList.contains('org-dept-card--open');
  // Tutup semua dulu
  document.querySelectorAll('.org-dept-card--clickable').forEach(c => {
    c.classList.remove('org-dept-card--open');
  });
  // Buka yang diklik (jika sebelumnya tertutup)
  if (!isOpen) {
    card.classList.add('org-dept-card--open');
  }
}

function openInventarisForm() {
  window.open("https://bit.ly/inventaris-baqi-upi", "_blank");
}