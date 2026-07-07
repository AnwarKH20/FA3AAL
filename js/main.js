const supportedLanguages = ["ar", "en"];

const translations = {
    ar: {
        logo: "فعّال | Fa3aal",
        heroTitleLine1: "إجعل شركتك أقرب إلى عملائك",
        heroDescription: "في 'فعّال' نبني لك حضورًا رقميًا متكاملًا يساعدك على عرض خدماتك، تعزيز ثقة العملاء، وتنمية أعمالك.",
        heroTitleLine2: "جرّب منصتك الرقمية مجانًا لمدة 30 يومًا وابدأ رحلتك نحو عالم الأعمال الرقمي.",
        ctaText: "ابدأ تجربة الـ 30 يوماً مجاناً",
        themeButton: {
            dark: "☀️ الوضع المضيء",
            light: "🌙 الوضع المعتم"
        },
        langButton: "العربية",
        modalTitle: "طلب تجربة 30 يوم",
        modalDescription: "يرجى إدخال بياناتك بدقة وسنتواصل معك قريبًا.",
        nameLabel: "الاسم الكامل",
        phoneLabel: "رقم الهاتف",
        whatsappLabel: "رقم واتساب",
        emailLabel: "البريد الإلكتروني",
        descriptionLabel: "وصف مختصر للمشروع",
        namePlaceholder: "اكتب اسمك الكامل",
        phonePlaceholder: "مثال: 0599123456",
        whatsappPlaceholder: "أدخل رقم واتساب",
        emailPlaceholder: "example@email.com",
        descriptionPlaceholder: "اكتب وصفًا مختصرًا عن مشروعك",
        cancelButton: "إلغاء",
        wordsafe: "أمن",
        wordpractic: "عملي",
        wordactive: "فعّال",
        featuresTitle: "لماذا تختار فعّال؟",
        feature1Title: "هوية احترافية",
        feature1Desc: "نصمم لك هوية بصرية قوية تعكس قيم علامتك التجارية.",
        feature2Title: "موقع سريع",
        feature2Desc: "نوفر موقعًا سريعًا ومجهزًا لعرض خدماتك بوضوح.",
        feature3Title: "أدوات جاهزة",
        feature3Desc: "نضيف لك أدوات تسهّل التواصل مع العملاء وتحسين التجربة.",
        footerText: "© 2026 جميع الحقوق محفوظة | Fa3aal",
        submitButton: "إرسال الطلب"
    },
    en: {
        logo: "Fa3aal | فعّال",
        heroTitleLine1: "Bring Your Business Closer to Your Customers",
        heroTitleLine2: "Try your digital platform free for 30 days and start your journey into the digital business world.",
        heroDescription: "At \"Fa3aal\", we build a complete digital presence for your business, helping you showcase your services, build customer trust, and grow your business.",
        ctaText: "Start your free 30-day trial",
        themeButton: {
            dark: "☀️ Light mode",
            light: "🌙 Dark mode"
        },
        langButton: "English",
        modalTitle: "Request a 30-Day Trial",
        modalDescription: "Please fill out the form below and we will contact you shortly.",
        nameLabel: "Full Name",
        phoneLabel: "Phone Number",
        whatsappLabel: "WhatsApp Number",
        emailLabel: "Email Address",
        descriptionLabel: "Short Description of the Project",
        namePlaceholder: "Enter your full name",
        phonePlaceholder: "Example: 0599123456",
        whatsappPlaceholder: "Enter your WhatsApp number",
        emailPlaceholder: "example@email.com",
        descriptionPlaceholder: "Write a short description of your project",
        cancelButton: "Cancel",
        wordsafe: "Safe",
        wordpractic: "Practical",
        wordactive: "effective",
        featuresTitle: "Why choose Fa3aal?",
        feature1Title: "Professional Identity",
        feature1Desc: "We design a strong visual identity that reflects your brand values.",
        feature2Title: "Fast Website",
        feature2Desc: "We provide a fast website designed to clearly present your services.",
        feature3Title: "Ready-made Tools",
        feature3Desc: "We add tools that make communication with customers easier and improve the experience.",
        footerText: "© 2026 All rights reserved | Fa3aal",
        submitButton: "Submit Request"
    }
};

let currentLang = localStorage.getItem("fa3aal-lang") || "ar";
let currentTheme = localStorage.getItem("fa3aal-theme") || "dark";

function updateUi() {
    const t = translations[currentLang] || translations.ar;
    const themeBtn = document.getElementById("themeBtn");
    const langBtn = document.getElementById("langBtn");
    const logoTxt = document.getElementById("logoTxt");
    const mainHeading = document.getElementById("mainHeading");
    const mainDesc = document.getElementById("mainDesc");
    const actionBtn = document.getElementById("actionBtn");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const nameLabel = document.getElementById("nameLabel");
    const phoneLabel = document.getElementById("phoneLabel");
    const whatsappLabel = document.getElementById("whatsappLabel");
    const emailLabel = document.getElementById("emailLabel");
    const descriptionLabel = document.getElementById("descriptionLabel");
    const trialName = document.getElementById("trialName");
    const trialPhone = document.getElementById("trialPhone");
    const trialWhatsapp = document.getElementById("trialWhatsapp");
    const trialEmail = document.getElementById("trialEmail");
    const trialDescription = document.getElementById("trialDescription");
    const cancelBtn = document.getElementById("cancelBtn");
    const submitBtn = document.getElementById("submitBtn");

    if (logoTxt) {
        logoTxt.textContent = t.logo;
    }

    if (mainHeading) {
        mainHeading.innerHTML = `${t.heroTitleLine1}<br><span class="dynamic-text" id="changingText">${t.heroTitleLine2}</span>`;
    }

    if (mainDesc) {
        mainDesc.textContent = t.heroDescription;
    }

    if (actionBtn) {
        actionBtn.textContent = t.ctaText;
    }

    if (themeBtn) {
        themeBtn.textContent = currentTheme === "dark"
            ? t.themeButton.dark
            : t.themeButton.light;
    }

    if (langBtn) {
        const nextLang = currentLang === "ar" ? "en" : "ar";
        langBtn.textContent = translations[nextLang].langButton;
    }

    if (modalTitle) modalTitle.textContent = t.modalTitle;
    if (modalDescription) modalDescription.textContent = t.modalDescription;
    if (nameLabel) nameLabel.textContent = t.nameLabel;
    if (phoneLabel) phoneLabel.textContent = t.phoneLabel;
    if (whatsappLabel) whatsappLabel.textContent = t.whatsappLabel;
    if (emailLabel) emailLabel.textContent = t.emailLabel;
    if (descriptionLabel) descriptionLabel.textContent = t.descriptionLabel;
    if (trialName) trialName.placeholder = t.namePlaceholder;
    if (trialPhone) trialPhone.placeholder = t.phonePlaceholder;
    if (trialWhatsapp) trialWhatsapp.placeholder = t.whatsappPlaceholder;
    if (trialEmail) trialEmail.placeholder = t.emailPlaceholder;
    if (trialDescription) trialDescription.placeholder = t.descriptionPlaceholder;
    if (cancelBtn) cancelBtn.textContent = t.cancelButton;
    if (submitBtn) submitBtn.textContent = t.submitButton;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (key && t[key]) {
            element.textContent = t[key];
        }
    });

    document.documentElement.setAttribute("data-theme", currentTheme);
    document.documentElement.setAttribute("data-lang", currentLang);
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
    document.body.setAttribute("data-theme", currentTheme);
    document.body.setAttribute("data-lang", currentLang);

    document.title = currentLang === "ar" ? "فعال | Fa3aal" : "Fa3aal | Active";
    updateScrollEffects();
}

function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("fa3aal-theme", theme);
    updateUi();
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("fa3aal-lang", lang);
    updateUi();
}

function toggleTheme() {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function toggleLang() {
    const currentIndex = supportedLanguages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % supportedLanguages.length;
    applyLanguage(supportedLanguages[nextIndex]);
}

function openTrialModal() {
    const modal = document.getElementById("trialModal");
    const firstField = document.getElementById("trialName");
    const message = document.getElementById("trialMessage");

    if (!modal) return;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    if (message) {
        message.textContent = "";
    }

    if (firstField) {
        firstField.focus();
    }
}

function closeTrialModal() {
    const modal = document.getElementById("trialModal");

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function setTrialMessage(message, isError = false) {
    const box = document.getElementById("trialMessage");

    if (!box) return;

    box.textContent = message;
    box.style.color = isError ? "#f87171" : "#34d399";
}

async function submitTrialForm(event) {
    event.preventDefault();

    const name = document.getElementById("trialName")?.value.trim() || "";
    const phone = document.getElementById("trialPhone")?.value.trim() || "";
    const whatsapp = document.getElementById("trialWhatsapp")?.value.trim() || "";
    const email = document.getElementById("trialEmail")?.value.trim() || "";
    const description = document.getElementById("trialDescription")?.value.trim() || "";

    if (!name || !phone || !whatsapp || !email || !description) {
        setTrialMessage("يرجى ملء جميع الحقول المطلوبة", true);
        return;
    }

    const form = document.getElementById("trialForm");
    if (!form) return;

    const payload = new URLSearchParams();
    payload.set("name", name);
    payload.set("phone", phone);
    payload.set("whatsapp", whatsapp);
    payload.set("email", email);
    payload.set("description", description);

    try {
        setTrialMessage("جاري إرسال الطلب...");

        const response = await fetch(form.action, {
            method: "POST",
            body: payload.toString(),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        });

        if (response.ok || response.status === 200 || response.status === 201) {
            setTrialMessage("تم استلام طلبك بنجاح، وسنواصل معك قريبًا.");
            form.reset();
        } else {
            setTrialMessage("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقًا.", true);
        }
    } catch (error) {
        setTrialMessage("حدث خطأ أثناء الإرسال، يرجى المحاولة لاحقًا.", true);
    }
}

function triggerAction() {
    openTrialModal();
}

function initRevealAnimations() {
    const elements = document.querySelectorAll('.reveal, .reveal-right');

    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('active');
        } else {
            observer.observe(element);
        }
    });
}

function updateScrollEffects() {
    const words = document.querySelectorAll('.brand-animation .word');
    if (!words.length) return;

    const section = document.querySelector('.brand-animation');
    if (!section) return;

    const start = section.offsetTop;
    const height = section.offsetHeight;
    const scroll = window.scrollY - start;
    const progress = Math.min(1, Math.max(0, scroll / height));

    const stage = progress * 2.2;
    words.forEach((word, index) => {
        const wordStart = index / 2.2;
        const wordEnd = (index + 1) / 2.2;
        const active = stage >= wordStart && stage <= wordEnd;
        word.classList.toggle('active-word', active);
        if (active) {
            const localProgress = (stage - wordStart) / (wordEnd - wordStart || 0.01);
            const eased = localProgress < 0.5
                ? 2 * localProgress * localProgress
                : 1 - Math.pow(-2 * localProgress + 2, 2) / 2;
            const scale = 0.45 + eased * 0.55;
            const opacity = 0.25 + eased * 0.75;
            word.style.transform = `scale(${scale})`;
            word.style.opacity = String(opacity);
        } else {
            word.style.transform = 'scale(0)';
            word.style.opacity = '0';
        }
    });

    const themeOverlay = currentTheme === 'dark' ? [2, 6, 23] : [226, 232, 240];
    const baseOverlay = currentTheme === 'dark' ? [15, 23, 42] : [248, 250, 252];
    const alpha = Math.min(0.22, progress * 0.22);

    const r = Math.round(baseOverlay[0] + (themeOverlay[0] - baseOverlay[0]) * alpha);
    const g = Math.round(baseOverlay[1] + (themeOverlay[1] - baseOverlay[1]) * alpha);
    const b = Math.round(baseOverlay[2] + (themeOverlay[2] - baseOverlay[2]) * alpha);

    const bgMain = `rgb(${r}, ${g}, ${b})`;
    const bgCard = currentTheme === 'dark'
        ? `rgba(30, 41, 59, ${0.7 + alpha * 0.15})`
        : `rgba(255, 255, 255, ${0.8 + alpha * 0.1})`;

    document.documentElement.style.setProperty('--bg-main', bgMain);
    document.documentElement.style.setProperty('--bg-card', bgCard);
}

function initWordSlider() {
    const words = document.querySelectorAll('.brand-animation .word');
    if (!words.length) return;

    let ticking = false;

    const updateFromScroll = () => {
        updateScrollEffects();
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateFromScroll);
            ticking = true;
        }
    }, { passive: true });

    updateScrollEffects();
}

document.addEventListener("DOMContentLoaded", () => {
    updateUi();
    initRevealAnimations();
    initWordSlider();

    const modal = document.getElementById("trialModal");
    if (modal) {
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                closeTrialModal();
            }
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeTrialModal();
        }
    });
});

window.toggleTheme = toggleTheme;
window.toggleLang = toggleLang;
window.triggerAction = triggerAction;
window.closeTrialModal = closeTrialModal;
window.submitTrialForm = submitTrialForm;