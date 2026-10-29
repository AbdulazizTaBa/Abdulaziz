/* Project content and accessible gallery/dialog behavior. */
const projectData = {
    'proj1': {
        companyAr: 'ذكاء اصطناعي وأتمتة',
        companyEn: 'AI & Automation',
        titleAr: 'سير عمل أتمتة البحث عن الوظائف بالذكاء الاصطناعي',
        titleEn: 'AI Jobs Automation Pipeline',
        challengeAr: 'تضييع الوقت في تصفح لوحات الوظائف يدوياً ومقارنة متطلبات كل وظيفة بالسيرة الذاتية يومياً، مع صعوبة تتبع الفرص المراجعة وترتيبها حسب الأولوية.',
        challengeEn: 'Manually browsing job boards daily and comparing each listing to a CV is time-consuming and inconsistent, making it hard to prioritize the best-fit opportunities.',
        solutionAr: 'بناء سير عمل n8n مجدول يجلب الوظائف عبر API، ويسحب ملف السيرة الذاتية PDF ويستخرج نصوصه، ثم يمرر الطرفين لنموذج AI لمقارنة المهارات وتوليد تقييم تلقائي، يتبعه توجيه النتائج إلى Google Sheets وإشعار Telegram الفوري.',
        solutionEn: 'Built a scheduled n8n workflow that fetches job listings via API, downloads and extracts the CV/PDF, then passes both to an AI model for skills comparison and auto-ranking. Results are routed via a Switch node to Google Sheets and instant Telegram notifications.',
        impactAr: 'توفير ساعات يومية من البحث اليدوي، مع ضمان عدم تفويت أي فرصة وظيفية مناسبة من خلال تنبيهات فورية ومنظمة.',
        impactEn: 'Saves hours of daily manual job searching, ensures no suitable opportunity is missed, and delivers instant organized alerts with AI-ranked results.',
        stats: [
            { valueAr: '13', valueEn: '13', labelAr: 'عقدة في سير العمل', labelEn: 'Workflow Nodes' },
            { valueAr: '78%', valueEn: '78%', labelAr: 'أعلى نسبة تطابق', labelEn: 'Top Match Score' },
            { valueAr: 'فوري', valueEn: 'Instant', labelAr: 'إشعار Telegram', labelEn: 'Telegram Alert' }
        ],
        steps: [
            {
                img: 'images/projects/ai-jobs-pipeline/step1.jpg',
                titleEn: '1. Full n8n Workflow Canvas',
                titleAr: '1. مخطط سير العمل الكامل داخل n8n',
                descEn: 'Complete n8n workflow showing job fetching via API, CV download & extraction, AI ranking, and Switch routing to "Suitable" (Telegram alert) or "Review" sheets.',
                descAr: 'مخطط التدفق داخل n8n: جلب الوظائف عبر API، سحب السيرة الذاتية وقراءتها، إرسالهما للذكاء الاصطناعي لتقييم التوافق، ثم توجيه النتائج تلقائياً إلى تبويب "مناسب" مع إشعار تليجرام أو تبويب "مراجعة".'
            },
            {
                img: 'images/projects/ai-jobs-pipeline/step2.jpg',
                titleEn: '2. Google Sheets – "Suitable" Tab',
                titleAr: '2. Google Sheets - تبويب "مناسب"',
                descEn: 'Auto-logged jobs scoring 78%+ match, showing company name, job title, AI score, missing skills, and direct application link.',
                descAr: 'تُسجَّل تلقائياً الوظائف التي حققت تطابقاً عالياً (78%+)، موضحةً اسم الشركة، المسمى، تقييم الذكاء الاصطناعي، المهارات الناقصة، ورابط التقديم المباشر.'
            },
            {
                img: 'images/projects/ai-jobs-pipeline/step3.jpg',
                titleEn: '3. Google Sheets – "Review" Tab',
                titleAr: '3. Google Sheets - تبويب "مراجعة"',
                descEn: 'Lower-scored or partially matching jobs stored as an organized reference without sending Telegram notifications to avoid unnecessary alerts.',
                descAr: 'الوظائف ذات التقييم الأقل أو غير المتطابقة كلياً تُحفظ كمرجع منظم دون إرسال إشعارات فورية تزعج المستخدم.'
            },
            {
                img: 'images/projects/ai-jobs-pipeline/step4.jpg',
                titleEn: '4. Instant Telegram Alert',
                titleAr: '4. إشعار Telegram الفوري',
                descEn: 'Telegram bot alert fires instantly upon finding a suitable job, showing company name, title, match score, AI reasoning, skill gaps, and the direct application link.',
                descAr: 'بمجرد العثور على وظيفة ملائمة يُرسَل إشعار فوري عبر بوت التيليجرام يتضمن اسم الشركة، المسمى، نسبة التوافق، أسباب التقييم، نقاط الضعف، ورابط التقديم المباشر.'
            }
        ]
    },
    'proj2': {
        companyAr: 'ذكاء اصطناعي وأتمتة',
        companyEn: 'AI & Automation',
        titleAr: 'نظام أتمتة وتصنيف البريد الإلكتروني بالذكاء الاصطناعي',
        titleEn: 'AI Email Filtering & Automation Pipeline',
        challengeAr: 'تراكم البريد الإلكتروني في صندوق وارد واحد، والاضطرار لفرز الطلبات وتوزيعها يدوياً على الإدارات المختلفة، مما يؤدي إلى تأخر الردود وفقدان المتابعة.',
        challengeEn: 'Email accumulation in a single shared inbox, requiring manual sorting and routing of requests to different departments, causing delayed responses and lack of tracking.',
        solutionAr: 'فرز الرسائل لحظة وصولها آلياً عبر الذكاء الاصطناعي، وتحديد وجهتها وتوثيقها فوراً في جدول كل إدارة مع إشعار الفريق المختص عبر قناتهم الخاصة على تيليجرام دون تدخل بشري.',
        solutionEn: 'Instant automated email classification upon receipt using AI, routing and logging them into dedicated departmental Google Sheets with immediate Telegram notifications to the respective teams without human intervention.',
        impactAr: 'رفع سرعة الاستجابة لطلبات الدعم والاستفسارات، إنهاء فوضى وتراكم البريد الوارد، وتوثيق كافة العمليات في سجلات منظمة ومحدثة لحظياً.',
        impactEn: 'Significantly accelerating response times for support and inquiries, eliminating inbox chaos and backlog, and maintaining real-time organized documentation across all departments.',
        stats: [
            { valueAr: '12', valueEn: '12', labelAr: 'عقدة في سير العمل', labelEn: 'Workflow Nodes' },
            { valueAr: 'Gmail', valueEn: 'Gmail', labelAr: 'مشغل البريد الوارد', labelEn: 'Email Trigger' },
            { valueAr: '3', valueEn: '3', labelAr: 'مسارات توجيه ذكية', labelEn: 'Routing Streams' },
            { valueAr: 'فوري', valueEn: 'Instant', labelAr: 'إشعار Telegram', labelEn: 'Telegram Alert' }
        ],
        steps: [
            {
                img: 'images/projects/ai-email-filtering/step1.jpg',
                titleEn: '1. Full n8n Workflow Canvas & Switch Routing',
                titleAr: '1. مخطط التدفق الكامل وتوجيه الطلبات داخل n8n',
                descEn: 'Complete n8n workflow canvas showing email ingestion via Gmail Trigger, AI content analysis, and Switch node routing into 3 dedicated streams (Technical, Administrative, Others) logging to Google Sheets and triggering instant Telegram alerts.',
                descAr: 'مخطط التدفق الكامل داخل n8n؛ يوضح استقبال الإيميل عبر Gmail Trigger، ثم تحليله بالذكاء الاصطناعي لفهم محتواه، يليه مسار التوجيه (Switch) الذي يقسم الطلبات تلقائياً إلى 3 مسارات (طلبات تقنية، طلبات إدارية، أخرى) لحفظ كل نوع في Google Sheets وإرسال إشعار فوري عبر Telegram للقسم المعني.'
            },
            {
                img: 'images/projects/ai-email-filtering/step2.jpg',
                titleEn: '2. Google Sheets – "Technical Requests" Tab',
                titleAr: '2. Google Sheets - تبويب "طلبات تقنية"',
                descEn: 'Google Sheets ("Technical Requests" tab) demonstrating auto-logging of an IT support ticket ("computer abruptly shut down"), capturing sender info, subject, timestamp, and issue description without manual entry.',
                descAr: 'جدول Google Sheets (تبويب "طلبات تقنية")؛ يوضح تسجيل طلب مشكلة فنية تلقائياً ("الجهاز فجأة طفى وانا اشتغل")، وتوثيق بيانات المرسل، الموضوع، وقت الاستلام، ومحتوى البلاغ في شيت الدعم الفني دون تدخل يدوي.'
            },
            {
                img: 'images/projects/ai-email-filtering/step3.jpg',
                titleEn: '3. Google Sheets – "Administrative Requests" Tab',
                titleAr: '3. Google Sheets - تبويب "طلبات إدارية"',
                descEn: 'Google Sheets ("Administrative Requests" tab) showing automated triage and recording of an HR leave request ("vacation request"), organized into the administrative department sheet.',
                descAr: 'جدول Google Sheets (تبويب "طلبات إدارية")؛ يوضح فرز وتوثيق طلب إجازة إداري آلياً ("طلب اجازة - اود طلب موافقة الإدارة على اخذ اجازة قصيرة") بكامل تفاصيله داخل التبويب الخاص بإدارة الموارد البشرية والشؤون الإدارية.'
            },
            {
                img: 'images/projects/ai-email-filtering/step4.jpg',
                titleEn: '4. Google Sheets – "Other Requests" Tab',
                titleAr: '4. Google Sheets - تبويب "طلبات أخرى"',
                descEn: 'Google Sheets ("Other Requests" tab) showing general or commercial emails (such as new quotation proposals) routed to an archive sheet for reference without triggering urgent alerts.',
                descAr: 'جدول Google Sheets (تبويب "طلبات أخرى")؛ يوضح توجيه الرسائل والطلبات العامة أو الخارجية (مثل إيميل "عرض اسعار المنتجات الجديدة") إلى تبويب مستقل للرجوع إليه وحفظه دون إرسال تنبيهات عاجلة.'
            },
            {
                img: 'images/projects/ai-email-filtering/step5.jpg',
                titleEn: '5. Instant Telegram Alert-Bot Notifications',
                titleAr: '5. إشعارات بوت Telegram الفورية (Alert-Bot)',
                descEn: 'Telegram Alert-Bot interface receiving instant dispatch notifications upon request triage: Alert 1 shows a new IT technical support ticket with sender details and issue description; Alert 2 shows an administrative leave request, both tagged with automated n8n signatures.',
                descAr: 'تُظهر واجهة محادثة بوت التيليجرام (Alert-Bot)، والتي تتلقى التنبيهات المباشرة فور تسجيل الطلبات: التنبيه الأول إشعار "طلب دعم تقني جديد" يوضح اسم وإيميل المرسل، موضوع المشكلة، والتفاصيل؛ والتنبيه الثاني إشعار "طلب إداري جديد" يحتوي بيانات طلب الإجازة بالكامل، مع تذييل تلقائي يوضح إرسال الرسالة عبر أتمتة n8n.'
            }
        ]
    }
};

// State for Large Gallery in Modal
let currentActiveProject = null;
let currentActiveStepIndex = 0;
let projectModalOpener = null;
let lightboxOpener = null;

function openProjectModal(projectId, initialTab = 'gallery') {
    const modal = document.getElementById('project-modal');
    const titleEn = document.getElementById('modal-title-en');
    const titleAr = document.getElementById('modal-title-ar');
    const companyBadge = document.getElementById('modal-company-badge');

    const chAr = document.getElementById('modal-challenge-text-ar');
    const chEn = document.getElementById('modal-challenge-text-en');
    const solAr = document.getElementById('modal-solution-text-ar');
    const solEn = document.getElementById('modal-solution-text-en');
    const impAr = document.getElementById('modal-impact-text-ar');
    const impEn = document.getElementById('modal-impact-text-en');
    const statsContainer = document.getElementById('modal-stats-chips');
    const thumbsContainer = document.getElementById('gallery-thumbs-strip');

    const data = projectData[projectId];
    if (data) {
        projectModalOpener = document.activeElement;
        currentActiveProject = data;
        currentActiveStepIndex = 0;

        titleEn.textContent = data.titleEn;
        titleAr.textContent = data.titleAr;

        if (companyBadge) {
            companyBadge.replaceChildren();
            for (const [lang, value] of [['ar', data.companyAr], ['en', data.companyEn]]) {
                const label = document.createElement('span');
                label.className = `lang-${lang}`;
                label.textContent = value;
                companyBadge.append(label);
            }
        }

        // Populate Case Study Details
        if (chAr && chEn) {
            chAr.textContent = data.challengeAr;
            chEn.textContent = data.challengeEn;
        }
        if (solAr && solEn) {
            solAr.textContent = data.solutionAr;
            solEn.textContent = data.solutionEn;
        }
        if (impAr && impEn) {
            impAr.textContent = data.impactAr;
            impEn.textContent = data.impactEn;
        }

        if (statsContainer) {
            statsContainer.replaceChildren();
            if (data.stats && data.stats.length) {
                data.stats.forEach(st => {
                    const pill = document.createElement('div');
                    pill.className = 'modal-stat-chip';
                    for (const [tag, className, value] of [
                        ['strong', 'stat-num lang-ar', st.valueAr],
                        ['strong', 'stat-num lang-en', st.valueEn],
                        ['span', 'stat-lbl lang-ar', st.labelAr],
                        ['span', 'stat-lbl lang-en', st.labelEn]
                    ]) {
                        const element = document.createElement(tag);
                        element.className = className;
                        element.textContent = value;
                        pill.append(element);
                    }
                    statsContainer.append(pill);
                });
            }
        }

        // Populate Thumbnails Strip
        if (thumbsContainer) {
            thumbsContainer.replaceChildren();
            data.steps.forEach((step, idx) => {
                const thumb = document.createElement('button');
                thumb.type = 'button';
                thumb.className = `gallery-thumb-item ${idx === 0 ? 'active' : ''}`;
                thumb.setAttribute('aria-label', `${document.documentElement.lang === 'ar' ? step.titleAr : step.titleEn}`);
                thumb.setAttribute('aria-pressed', String(idx === 0));
                thumb.addEventListener('click', () => renderGalleryStep(idx));
                const image = document.createElement('img');
                image.src = step.img;
                image.alt = '';
                image.loading = 'lazy';
                image.decoding = 'async';
                const number = document.createElement('span');
                number.className = 'thumb-step-num';
                number.textContent = String(idx + 1);
                thumb.append(image, number);
                thumbsContainer.appendChild(thumb);
            });
        }

        modal.classList.add('show');

        // Render First Step on Large Stage
        renderGalleryStep(0);

        // Default Tab Switch
        switchModalTab(initialTab);

        document.body.style.overflow = 'hidden';
        document.querySelector('header').inert = true;
        document.querySelector('.skip-link').inert = true;
        document.querySelector('main').inert = true;
        document.getElementById('mobile-fab').inert = true;
        document.getElementById('close-modal-btn').focus();
    }
}

function renderGalleryStep(index) {
    if (!currentActiveProject || !currentActiveProject.steps || !currentActiveProject.steps.length) return;
    if (index < 0) index = 0;
    if (index >= currentActiveProject.steps.length) index = currentActiveProject.steps.length - 1;

    currentActiveStepIndex = index;
    const step = currentActiveProject.steps[index];
    const total = currentActiveProject.steps.length;

    const stageImg = document.getElementById('gallery-stage-img');
    const counterText = document.getElementById('gallery-counter-text');
    const titleEn = document.getElementById('gallery-step-title-en');
    const titleAr = document.getElementById('gallery-step-title-ar');
    const descEn = document.getElementById('gallery-step-desc-en');
    const descAr = document.getElementById('gallery-step-desc-ar');

    if (stageImg) {
        stageImg.style.opacity = '0.5';
        stageImg.alt = document.documentElement.lang === 'ar' ? step.titleAr : step.titleEn;
        stageImg.onload = () => { stageImg.style.opacity = '1'; };
        stageImg.onerror = () => { stageImg.style.opacity = '1'; };
        stageImg.src = step.img;
        if (stageImg.complete) stageImg.style.opacity = '1';
    }

    document.querySelectorAll('.gallery-nav-btn').forEach(button => button.hidden = total < 2);

    if (counterText) counterText.textContent = `${index + 1} / ${total}`;
    if (titleEn) titleEn.textContent = step.titleEn;
    if (titleAr) titleAr.textContent = step.titleAr;
    if (descEn) descEn.textContent = step.descEn;
    if (descAr) descAr.textContent = step.descAr;

    // Highlight active thumbnail & scroll into view
    const thumbs = document.querySelectorAll('.gallery-thumb-item');
    thumbs.forEach((t, i) => {
        if (i === index) {
            t.classList.add('active');
            t.setAttribute('aria-pressed', 'true');
            t.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
        } else {
            t.classList.remove('active');
            t.setAttribute('aria-pressed', 'false');
        }
    });
}

function navigateGalleryStep(direction) {
    if (!currentActiveProject || !currentActiveProject.steps) return;
    const total = currentActiveProject.steps.length;
    const nextIdx = (currentActiveStepIndex + direction + total) % total;
    renderGalleryStep(nextIdx);
}

function zoomCurrentGalleryImage() {
    if (currentActiveProject && currentActiveProject.steps && currentActiveProject.steps[currentActiveStepIndex]) {
        openLightbox(currentActiveProject.steps[currentActiveStepIndex].img);
    }
}

function switchModalTab(tab) {
    document.querySelector('.tech-modal-content').scrollTop = 0;
    const galleryTab = document.getElementById('tab-btn-gallery');
    const detailsTab = document.getElementById('tab-btn-details');
    const galleryView = document.getElementById('modal-tab-gallery-view');
    const detailsView = document.getElementById('modal-tab-details-view');

    if (tab === 'gallery') {
        if (galleryTab) galleryTab.classList.add('active');
        if (detailsTab) detailsTab.classList.remove('active');
        galleryTab.setAttribute('aria-selected', 'true');
        detailsTab.setAttribute('aria-selected', 'false');
        galleryTab.tabIndex = 0;
        detailsTab.tabIndex = -1;
        galleryView.hidden = false;
        detailsView.hidden = true;
    } else {
        if (detailsTab) detailsTab.classList.add('active');
        if (galleryTab) galleryTab.classList.remove('active');
        detailsTab.setAttribute('aria-selected', 'true');
        galleryTab.setAttribute('aria-selected', 'false');
        detailsTab.tabIndex = 0;
        galleryTab.tabIndex = -1;
        detailsView.hidden = false;
        galleryView.hidden = true;
    }
}

function closeProjectModal() {
    if (document.getElementById('image-lightbox').classList.contains('show-lightbox')) closeLightbox();
    const modal = document.getElementById('project-modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.querySelector('header').inert = false;
    document.querySelector('.skip-link').inert = false;
    document.querySelector('main').inert = false;
    document.getElementById('mobile-fab').inert = false;
    document.getElementById('gallery-stage-img').removeAttribute('src');
    if (projectModalOpener && projectModalOpener.isConnected) projectModalOpener.focus();
}
document.getElementById('close-modal-btn').addEventListener('click', closeProjectModal);

// Close modal on click outside
document.getElementById('project-modal').addEventListener('click', (event) => {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) closeProjectModal();
});

// Close modal on Escape key & Arrow navigation
window.addEventListener('keydown', (event) => {
    const lightbox = document.getElementById('image-lightbox');
    const modal = document.getElementById('project-modal');
    if (event.key === 'Escape') {
        if (lightbox && lightbox.classList.contains('show-lightbox')) {
            closeLightbox();
            return;
        }
        if (modal && modal.classList.contains('show')) {
            closeProjectModal();
        }
    } else if (event.key === 'Tab') {
        const activeDialog = lightbox.classList.contains('show-lightbox') ? lightbox : modal.classList.contains('show') ? modal : null;
        if (!activeDialog) return;
        const focusable = [...activeDialog.querySelectorAll('button:not([disabled]):not([tabindex="-1"]), a[href], [tabindex="0"]')]
            .filter(element => element.getClientRects().length > 0);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    } else if (lightbox.classList.contains('show-lightbox')) {
        if (event.ctrlKey || event.metaKey || event.altKey) return;
        if (['+', '=', '-', '0'].includes(event.key)) {
            event.preventDefault();
            if (event.key === '0') resetLightboxZoom();
            else changeLightboxZoom(event.key === '-' ? 1 / 1.5 : 1.5);
        } else if (lightboxScale === 1 && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
            event.preventDefault();
            const forward = event.key === (document.documentElement.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight');
            navigateLightboxImage(forward ? 1 : -1);
        }
    } else if (modal && modal.classList.contains('show')) {
        if (document.activeElement?.getAttribute('role') === 'tab' && ['ArrowRight', 'ArrowLeft'].includes(event.key)) {
            event.preventDefault();
            const nextTab = document.activeElement.id === 'tab-btn-gallery' ? 'details' : 'gallery';
            switchModalTab(nextTab);
            document.getElementById(nextTab === 'gallery' ? 'tab-btn-gallery' : 'tab-btn-details').focus();
            return;
        }
        if (document.getElementById('modal-tab-gallery-view').hidden) return;
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            // In RTL, ArrowRight moves backwards (visually "next" is to the left)
            navigateGalleryStep(isRtl ? -1 : 1);
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            // In RTL, ArrowLeft moves forwards (visually "prev" is to the right)
            navigateGalleryStep(isRtl ? 1 : -1);
        }
    }
});

// The viewer starts fitted; enlargement uses native scrolling without taking over the wheel.
let lightboxScale = 1;
let lightboxFitWidth = 0;
let lightboxFitHeight = 0;

function maxLightboxScale() {
    return Math.max(4, document.getElementById('lightbox-img').naturalWidth / Math.max(lightboxFitWidth, 1));
}

function updateLightboxScale(resetScroll = false) {
    const viewport = document.getElementById('lightbox-viewport');
    const canvas = document.getElementById('lightbox-canvas');
    const img = document.getElementById('lightbox-img');
    if (!lightboxFitWidth || !img.naturalWidth || img.hidden) return;
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / Math.max(canvas.offsetWidth, 1);
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / Math.max(canvas.offsetHeight, 1);
    const width = Math.round(lightboxFitWidth * lightboxScale);
    const height = Math.round(lightboxFitHeight * lightboxScale);
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    canvas.style.width = `max(100%, ${width + 32}px)`;
    canvas.style.height = `max(100%, ${height + 32}px)`;
    viewport.dataset.zoom = String(lightboxScale);
    viewport.scrollLeft = resetScroll ? 0 : centerX * canvas.offsetWidth - viewport.clientWidth / 2;
    viewport.scrollTop = resetScroll ? 0 : centerY * canvas.offsetHeight - viewport.clientHeight / 2;
    document.getElementById('lightbox-zoom-status').textContent = `${Math.round(width / img.naturalWidth * 100)}%`;
    document.getElementById('lightbox-zoom-out').disabled = lightboxScale <= 1;
    document.getElementById('lightbox-zoom-in').disabled = lightboxScale >= maxLightboxScale();
    document.getElementById('lightbox-fit').disabled = false;
}

function fitLightboxImage(resetScroll = false) {
    const viewport = document.getElementById('lightbox-viewport');
    const img = document.getElementById('lightbox-img');
    if (!document.getElementById('image-lightbox').classList.contains('show-lightbox') || !img.naturalWidth || img.hidden) return;
    const ratio = Math.min(Math.max(1, viewport.clientWidth - 32) / img.naturalWidth, Math.max(1, viewport.clientHeight - 32) / img.naturalHeight, 1);
    lightboxFitWidth = img.naturalWidth * ratio;
    lightboxFitHeight = img.naturalHeight * ratio;
    updateLightboxScale(resetScroll);
}

function changeLightboxZoom(factor) {
    if (document.getElementById('lightbox-img').hidden) return;
    lightboxScale = Math.min(maxLightboxScale(), Math.max(1, lightboxScale * factor));
    updateLightboxScale();
}

function resetLightboxZoom() {
    lightboxScale = 1;
    fitLightboxImage(true);
}

function loadLightboxImage(src) {
    const img = document.getElementById('lightbox-img');
    const status = document.getElementById('lightbox-load-status');
    const step = currentActiveProject.steps[currentActiveStepIndex];
    const ar = document.documentElement.lang === 'ar';
    const total = currentActiveProject.steps.length;
    lightboxScale = 1;
    lightboxFitWidth = lightboxFitHeight = 0;
    document.getElementById('lightbox-counter').textContent = ar ? `صورة ${currentActiveStepIndex + 1} من ${total}` : `Image ${currentActiveStepIndex + 1} of ${total}`;
    document.getElementById('lightbox-title').textContent = ar ? step.titleAr : step.titleEn;
    document.getElementById('lightbox-original').href = src;
    document.querySelectorAll('.lightbox-nav').forEach(button => button.hidden = total < 2);
    document.getElementById('lightbox-zoom-status').textContent = '—';
    for (const id of ['lightbox-zoom-out', 'lightbox-zoom-in', 'lightbox-fit']) document.getElementById(id).disabled = true;
    img.hidden = true;
    status.hidden = false;
    status.textContent = ar ? 'جارٍ تحميل الصورة…' : 'Loading image…';
    img.alt = ar ? step.titleAr : step.titleEn;
    img.onload = () => {
        if (!document.getElementById('image-lightbox').classList.contains('show-lightbox')) return;
        img.hidden = false;
        status.hidden = true;
        fitLightboxImage(true);
    };
    img.onerror = () => { status.textContent = ar ? 'تعذّر تحميل الصورة. أغلق العرض وحاول مجددًا.' : 'Image could not load. Close the viewer and try again.'; };
    img.src = src;
}

function navigateLightboxImage(direction) {
    if (!currentActiveProject || currentActiveProject.steps.length < 2) return;
    navigateGalleryStep(direction);
    loadLightboxImage(currentActiveProject.steps[currentActiveStepIndex].img);
}

function openLightbox(src) {
    const lightbox = document.getElementById('image-lightbox');
    if (lightbox && currentActiveProject) {
        lightboxOpener = document.activeElement;
        lightbox.classList.add('show-lightbox');
        document.getElementById('project-modal').inert = true;
        document.body.style.overflow = 'hidden';
        loadLightboxImage(src);
        document.getElementById('close-lightbox-btn').focus();
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox) {
        lightbox.classList.remove('show-lightbox');
    }
    document.getElementById('project-modal').inert = false;
    if (lightboxImg) {
        lightboxImg.onload = lightboxImg.onerror = null;
        lightboxImg.removeAttribute('src');
    }
    document.getElementById('lightbox-original').removeAttribute('href');
    const modal = document.getElementById('project-modal');
    if (!modal || !modal.classList.contains('show')) {
        document.body.style.overflow = '';
    }
    if (lightboxOpener && lightboxOpener.isConnected) lightboxOpener.focus();
}
document.getElementById('close-lightbox-btn').addEventListener('click', closeLightbox);
document.getElementById('lightbox-zoom-in').addEventListener('click', () => changeLightboxZoom(1.5));
document.getElementById('lightbox-zoom-out').addEventListener('click', () => changeLightboxZoom(1 / 1.5));
document.getElementById('lightbox-fit').addEventListener('click', resetLightboxZoom);
document.getElementById('lightbox-prev').addEventListener('click', () => navigateLightboxImage(-1));
document.getElementById('lightbox-next').addEventListener('click', () => navigateLightboxImage(1));
if ('ResizeObserver' in window) new ResizeObserver(() => fitLightboxImage()).observe(document.getElementById('lightbox-viewport'));
else window.addEventListener('resize', () => fitLightboxImage());
document.getElementById('image-lightbox').addEventListener('click', event => {
    if (event.target.id === 'image-lightbox') closeLightbox();
});
