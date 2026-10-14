// Desativação de Click Tracking, Destrave de Cookies e Faxina da SERP
(function() {
    'use strict';

    // 1. Desarma o redirecionador de cliques do Google Search (/url?q=... ou /url?sa=t&...)
    function cleanGoogleLinks() {
        if (!window.location.hostname.includes("google.")) return;

        const links = document.querySelectorAll("a[href*='/url?'], a[data-ved], a[ping]");
        for (let i = 0; i < links.length; i++) {
            const a = links[i];
            
            if (a.hasAttribute("ping")) {
                a.removeAttribute("ping");
            }
            if (a.hasAttribute("data-ved")) {
                a.removeAttribute("data-ved");
            }
            if (a.href.includes("/url?")) {
                try {
                    const u = new URL(a.href);
                    const target = u.searchParams.get("url") || u.searchParams.get("q");
                    if (target && target.startsWith("http")) {
                        a.href = target;
                    }
                } catch(e) {}
            }
        }
    }

    // 2. Remove caixas de "As pessoas também perguntam", "Vídeos curtos" e carrosséis invasivos
    function cleanGoogleSERPBoxes() {
        if (!window.location.hostname.includes("google.")) return;

        const headings = document.querySelectorAll("h2, h3, [role='heading'], span");
        for (let i = 0; i < headings.length; i++) {
            const h = headings[i];
            const txt = (h.textContent || "").trim();
            if (
                txt === "As pessoas também perguntam" ||
                txt === "People also ask" ||
                txt === "Vídeos curtos" ||
                txt === "Short videos"
            ) {
                const box = h.closest(".MjjYud") || h.closest("[data-hveid]") || h.parentElement?.parentElement;
                if (box && box !== document.body && !box.id.includes("search") && !box.id.includes("rso")) {
                    box.style.setProperty("display", "none", "important");
                }
            }
        }
    }

    // 3. Destrava páginas travadas por banners de cookies
    function unlockCookieScroll() {
        if (document.documentElement && document.documentElement.classList.contains("cookie-locked")) {
            document.documentElement.classList.remove("cookie-locked");
            document.documentElement.style.overflow = "auto";
        }
        if (document.body && document.body.classList.contains("cookie-locked")) {
            document.body.classList.remove("cookie-locked");
            document.body.style.overflow = "auto";
        }
    }

    // 4. Remove parâmetros de rastreamento (UTM, FBCLID, GCLID, etc.) da barra de endereços sem recarregar
    function cleanCurrentUrlParams() {
        const trackingParams = [
            "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
            "fbclid", "gclid", "dclid", "msclkid", "mc_eid", "igshid", "si"
        ];

        try {
            const url = new URL(window.location.href);
            let changed = false;

            trackingParams.forEach(param => {
                if (url.searchParams.has(param)) {
                    url.searchParams.delete(param);
                    changed = true;
                }
            });

            if (changed) {
                window.history.replaceState({}, document.title, url.toString());
            }
        } catch(e) {}
    }

    // 5. Limpa links em qualquer página antes do usuário clicar
    document.addEventListener("click", function(e) {
        const a = e.target.closest("a");
        if (!a || !a.href) return;

        try {
            if (a.href.startsWith("http")) {
                const u = new URL(a.href);
                const trackingParams = [
                    "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
                    "fbclid", "gclid", "dclid", "msclkid", "mc_eid", "igshid", "si"
                ];
                let changed = false;
                trackingParams.forEach(p => {
                    if (u.searchParams.has(p)) {
                        u.searchParams.delete(p);
                        changed = true;
                    }
                });
                if (changed) {
                    a.href = u.toString();
                }
            }
        } catch(e) {}
    }, true);

    cleanGoogleLinks();
    cleanGoogleSERPBoxes();
    sanitizeTitlesAndHideClickbait();
    removeChumboxWidgets();
    cleanYouTubePlayables();
    unlockCookieScroll();
    cleanCurrentUrlParams();

    let timer = null;
    const observer = new MutationObserver(() => {
        if (timer) return;
        timer = setTimeout(() => {
            cleanGoogleLinks();
            cleanGoogleSERPBoxes();
    sanitizeTitlesAndHideClickbait();
    removeChumboxWidgets();
    cleanYouTubePlayables();
            unlockCookieScroll();
            timer = null;
        }, 300);
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // Remove dinamicamente contêineres de Taboola/Outbrain injetados tardiamente
    function removeChumboxWidgets() {
        const selectors = [
            ".OUTBRAIN", "div[id*='taboola-']", "div[class*='ob-widget']",
            "div[id*='outbrain']", "div[id*='rc-widget']", "div[id*='mgid_']"
        ];
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                el.style.setProperty("display", "none", "important");
                el.remove();
            });
        });
    }


    // Remove prateleiras de Playables / Sala de Jogos no YouTube
    function cleanYouTubePlayables() {
        if (!window.location.hostname.includes("youtube.com")) return;
        const playables = document.querySelectorAll("ytd-rich-section-renderer:has(a[href*='/playables']), ytd-mini-guide-entry-renderer:has(a[href*='/playables'])");
        playables.forEach(el => {
            el.style.setProperty("display", "none", "important");
            el.remove();
        });
    }


    // =======================================================
    // ANTI-CLICKBAIT: FILTRO DE FÓRMULAS GRAMATICAIS BARATAS
    // =======================================================
    const CLICKBAIT_PATTERNS = [
        /voc[eê] n[aã]o vai acreditar/i,
        /o segredo que os? (m[eé]dicos|bancos|governo|especialistas) n[aã]o/i,
        /o que ningu[eé]m te conta( sobre)?/i,
        /descubra antes que (apaguem|seja tarde)/i,
        /pare de fazer isso agora/i,
        /veja como est[aá] o ator/i,
        /veja como est[aá] a atriz/i,
        /flagra: veja/i,
        /quebra o sil[eê]ncio e (detona|desabafa|ataca)/i,
        /rasga o verbo/i,
        /humilha ao vivo/i,
        /choca a internet/i,
        /deixou todos de queixo ca[ií]do/i
    ];

    function isClickbait(text) {
        if (!text || text.length < 10) return false;
        return CLICKBAIT_PATTERNS.some(regex => regex.test(text));
    }

    function sanitizeTitlesAndHideClickbait() {
        // 1. No YouTube: Desarmar CAPS LOCK apelativo e remover cards com fórmulas baratas
        if (window.location.hostname.includes("youtube.com")) {
            const ytTitles = document.querySelectorAll("#video-title, .yt-core-attributed-string");
            for (let i = 0; i < ytTitles.length; i++) {
                const el = ytTitles[i];
                const text = el.textContent || "";
                
                // Se for fórmula barata de clickbait, oculta o card inteiro do vídeo
                if (isClickbait(text)) {
                    const card = el.closest("ytd-rich-item-renderer, ytd-video-renderer, ytd-compact-video-renderer");
                    if (card) {
                        card.style.setProperty("display", "none", "important");
                        continue;
                    }
                }

                // Normaliza títulos em CAIXA ALTA HISTÉRICA (mais de 70% maiúsculas)
                if (text.length > 20 && !el.dataset.titleSanitized) {
                    const lettersOnly = text.replace(/[^a-zA-ZÀ-ÿ]/g, "");
                    if (lettersOnly.length > 10) {
                        const uppercaseCount = (text.match(/[A-ZÀ-Ú]/g) || []).length;
                        if (uppercaseCount / lettersOnly.length > 0.65) {
                            // Converte para formato normal Capitalizado
                            el.textContent = text.charAt(0) + text.slice(1).toLowerCase();
                            el.dataset.titleSanitized = "true";
                        }
                    }
                }
            }
        }

        // 2. No Google: Oculta links individuais com fórmulas de clickbait comprovadas
        if (window.location.hostname.includes("google.")) {
            const gLinks = document.querySelectorAll("div.g h3, g-card h3");
            for (let i = 0; i < gLinks.length; i++) {
                const heading = gLinks[i];
                if (isClickbait(heading.textContent || "")) {
                    const container = heading.closest("div.g, g-card");
                    if (container) {
                        container.style.setProperty("display", "none", "important");
                    }
                }
            }
        }

        // 3. Em Portais de Notícias (UOL, G1, Terra, Metrópoles)
        const newsHeadings = document.querySelectorAll("article h2, article h3, .feed-post-body, .c-news h2");
        for (let i = 0; i < newsHeadings.length; i++) {
            const nh = newsHeadings[i];
            if (isClickbait(nh.textContent || "")) {
                const art = nh.closest("article, .feed-post, .c-news, div[class*='card']");
                if (art) {
                    art.style.setProperty("display", "none", "important");
                }
            }
        }
    }

})();
