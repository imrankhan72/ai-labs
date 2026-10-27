/**
 * AI Labs — Enterprise IT Services & Infrastructure
 * Client-Side Interactive Architecture & Modern Web Guidance Fallbacks
 */

(() => {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. Theme Toggle (Dark / Light Mode)
   * -------------------------------------------------------------------------- */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('ailabs-theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    htmlEl.setAttribute('data-theme', savedTheme);
  }

  themeToggleBtn?.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('ailabs-theme', next);
  });

  /* --------------------------------------------------------------------------
   * 2. Mobile Navigation Menu
   * -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navList = document.getElementById('nav-list');

  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  navList?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navList.classList.remove('is-open');
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    });
  });

  /* --------------------------------------------------------------------------
   * 3. Shrinking Header Fallback (Modern Web Guidance: shrinking-header-on-scroll)
   * -------------------------------------------------------------------------- */
  if (!CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)')) {
    const header = document.getElementById('site-header');
    const initialHeight = 88;
    const finalHeight = 64;
    const scrollDistance = 120;

    if (header) {
      window.addEventListener(
        'scroll',
        () => {
          const scrollY = window.scrollY;
          const scrollPercent = Math.min(1, Math.max(0, scrollY / scrollDistance));
          const newHeight = initialHeight - (initialHeight - finalHeight) * scrollPercent;
          header.style.height = `${newHeight}px`;
        },
        { passive: true }
      );
    }
  }

  /* --------------------------------------------------------------------------
   * 4. Live Telemetry Ticker in Hero Command Center
   * -------------------------------------------------------------------------- */
  const liveRpsEl = document.getElementById('live-rps');
  if (liveRpsEl) {
    setInterval(() => {
      const base = 148500;
      const jitter = Math.floor(Math.random() * 1400);
      liveRpsEl.textContent = `${(base + jitter).toLocaleString()} req/s`;
    }, 2600);
  }

  /* --------------------------------------------------------------------------
   * 5. Interactive Solution Architecture Explorer
   * -------------------------------------------------------------------------- */
  const SOLUTION_BLUEPRINTS = {
    crm: {
      kicker: 'REVENUE OPERATIONS & CUSTOMER INTELLIGENCE',
      heading: 'Bespoke CRM Architectures Built for Zero License Bloat',
      description:
        'Off-the-shelf CRMs penalize growth with per-seat pricing and rigid data models. We engineer high-throughput custom CRMs tailored to your exact sales pipelines, field force operations, and ERP workflows—complete with AI-powered lead scoring and unified omnichannel inboxes.',
      modules: [
        'Multi-pipeline Lead, Deal & Account Lifecycle Engine',
        'Omnichannel Inbox (WhatsApp Business API, Email, Cloud Telephony/CTI)',
        'Automated Quotation, Billing, & Two-Way ERP Sync (SAP, Oracle, Tally, NetSuite)',
        'Granular Territory & Role-Based Access Hierarchy with Audit Trails'
      ],
      stack: ['TypeScript', 'React / Next.js', 'Node.js / Go', 'PostgreSQL + Redis', 'ElasticSearch', 'Kafka Event Bus'],
      url: 'crm.ailabs-enterprise.internal/pipeline-analytics',
      kpis: [
        { label: 'Pipeline Velocity', val: '+64.2%', sub: 'vs legacy CRM', color: 'text-emerald' },
        { label: 'Lead Response SLA', val: '42 sec', sub: 'Auto-routed', color: 'text-cyan' },
        { label: 'Annual SaaS Savings', val: '$185k/yr', sub: 'Unlimited seats', color: '' }
      ],
      bars: [
        { name: 'Lead Capture & AI Enrichment', metric: '99.4% Automated', width: '96%' },
        { name: 'Omnichannel Follow-up & Cadence', metric: '3.8x Conversion', width: '84%' },
        { name: 'Contract, Invoicing & ERP Provisioning', metric: 'Zero-Touch Sync', width: '91%' }
      ],
      logs: [
        '[SYNC] 14,200 active accounts synchronized with ERP ledger in 140ms',
        '[AI-SCORE] 48 high-intent enterprise leads routed to regional directors'
      ]
    },
    lms: {
      kicker: 'DIGITAL ACADEMIES, CORPORATE L&D & EDTECH ECOSYSTEMS',
      heading: 'Enterprise Learning Management Systems (LMS) at Massive Scale',
      description:
        'Engineered for universities, government skill missions, and Fortune 500 training organizations. Our custom LMS platforms support hundreds of thousands of concurrent learners with interactive cohorts, AI tutoring, proctored exams, and full SCORM/xAPI compliance.',
      modules: [
        'SCORM 1.2 / 2004, xAPI (Tin Can) & LTI 1.3 Compliant Course Player',
        'Live Virtual Classrooms (WebRTC), Whiteboards & Breakout Rooms',
        'AI-Proctored Assessment Engine with Question Bank Randomization',
        'Automated Learning Paths, Gamification & Verifiable Digital Certificates'
      ],
      stack: ['Next.js / React', 'Flutter Mobile Companion', 'Node.js / Python', 'HLS/DASH DRM Video', 'PostgreSQL', 'AWS CloudFront'],
      url: 'lms.ailabs-academy.global/cohort-telemetry',
      kpis: [
        { label: 'Course Completion', val: '89.6%', sub: '+38% engagement', color: 'text-emerald' },
        { label: 'Peak Concurrency', val: '450K+', sub: 'Zero buffering', color: 'text-cyan' },
        { label: 'Admin Automation', val: '92%', sub: 'Auto-grading & certs', color: '' }
      ],
      bars: [
        { name: 'Adaptive Video Streaming & Offline Sync', metric: '99.98% QoS', width: '98%' },
        { name: 'AI Assessment & Plagiarism Verification', metric: '< 1.2s Grading', width: '90%' },
        { name: 'HRIS / ERP Skill Matrix Integration', metric: 'Real-Time Sync', width: '88%' }
      ],
      logs: [
        '[LMS-CORE] 128,400 concurrent exam sessions active across 14 regions',
        '[CERT-ENGINE] 4,910 verifiable credentials issued and anchored'
      ]
    },
    web: {
      kicker: 'HIGH-CONVERSION ENTERPRISE WEB PLATFORMS & PORTALS',
      heading: 'Sub-Second Corporate Websites, B2B Portals & Headless Commerce',
      description:
        'Your web presence is your primary digital flagship. We build ultra-fast, accessible, and conversion-engineered websites, multi-tenant customer portals, and headless commerce platforms backed by edge caching and modular design systems.',
      modules: [
        'Bespoke Design Systems & Interactive 3D/Motion Storytelling',
        'Headless CMS Architecture (Sanity, Strapi, Contentful, Custom Admin)',
        'Multi-Region Localization, i18n & Technical SEO Schema Automation',
        'Enterprise Self-Service Customer & Vendor Portals with SSO'
      ],
      stack: ['Next.js / Astro', 'TypeScript', 'Tailwind / Modern CSS', 'GraphQL / REST', 'Edge CDN', 'WCAG 2.2 AA'],
      url: 'portal.ailabs-web.global/core-vitals',
      kpis: [
        { label: 'Lighthouse Performance', val: '99 / 100', sub: 'Sub-second LCP', color: 'text-emerald' },
        { label: 'Organic Conversion', val: '+118%', sub: 'Post-replatform', color: 'text-cyan' },
        { label: 'Global Edge TTFB', val: '24 ms', sub: '310+ Edge PoPs', color: '' }
      ],
      bars: [
        { name: 'Core Web Vitals (LCP, INP, CLS)', metric: '100% Green', width: '99%' },
        { name: 'Headless CMS Publishing Workflow', metric: 'Instant Preview', width: '94%' },
        { name: 'OWASP Top-10 & WAF Edge Protection', metric: 'Hardened', width: '97%' }
      ],
      logs: [
        '[EDGE-CDN] Global cache hit ratio at 99.4% across 310 edge locations',
        '[VITALS] Median Largest Contentful Paint recorded at 580ms'
      ]
    },
    mobile: {
      kicker: 'NATIVE & CROSS-PLATFORM MOBILE ENGINEERING',
      heading: 'Mission-Critical iOS & Android Apps with Offline-First Resilience',
      description:
        'We craft consumer super-apps and enterprise field-force applications that feel instantaneous. From biometric fintech wallets to offline-capable logistics and learning apps, our mobile engineering practice delivers 4.8+ star store ratings.',
      modules: [
        'Native iOS (SwiftUI) & Android (Jetpack Compose) + Flutter / React Native',
        'Offline-First Local SQLite/Realm Sync with Conflict Resolution',
        'Biometric Passkeys, Hardware Keychain & SSL Pinning Security',
        'Real-Time Geolocation, Live Activity Widgets & Push Orchestration'
      ],
      stack: ['Swift / Kotlin', 'Flutter', 'React Native', 'SQLite / CRDT Sync', 'Firebase / APNs', 'Fastlane CI/CD'],
      url: 'mobile.ailabs-telemetry.io/release-health',
      kpis: [
        { label: 'Crash-Free Sessions', val: '99.96%', sub: 'Production fleet', color: 'text-emerald' },
        { label: 'Frame Rendering', val: '120 fps', sub: 'Zero UI jank', color: 'text-cyan' },
        { label: 'App Store Rating', val: '4.9 ★', sub: 'Across 1,240+ apps', color: '' }
      ],
      bars: [
        { name: 'Offline-to-Cloud Delta Synchronization', metric: '< 200ms Sync', width: '95%' },
        { name: 'Biometric & Passkey Authentication', metric: 'FIDO2 Certified', width: '97%' },
        { name: 'Automated OTA & App Store Release Pipeline', metric: 'Zero Regression', width: '92%' }
      ],
      logs: [
        '[MOBILE-SYNC] 840,000 offline field transactions reconciled with cloud',
        '[RELEASE] v4.12.0 rolled out to iOS & Google Play with 99.97% stability'
      ]
    },
    infra: {
      kicker: 'MANAGED IT SERVICES, CLOUD ARCHITECTURE & DEVSECOPS',
      heading: '24/7 Resilient Cloud Infrastructure & Zero-Trust Operations',
      description:
        'We architect, migrate, and operate high-availability infrastructure across AWS, Google Cloud, Azure, and hybrid bare-metal data centers—reducing cloud waste by up to 42% while guaranteeing 99.99% uptime.',
      modules: [
        'Multi-Region Kubernetes (EKS/GKE/AKS) & Infrastructure-as-Code (Terraform)',
        '24/7/365 NOC & SOC Monitoring with <15 Minute P1 Incident Response',
        'High-Availability Database Clustering, Sharding & Automated Disaster Recovery',
        'Zero-Trust Network Security, WAF, DDoS Mitigation & SOC2/ISO Compliance'
      ],
      stack: ['Kubernetes', 'Terraform', 'AWS / GCP / Azure', 'Prometheus & Grafana', 'ArgoCD GitOps', 'Cloudflare Zero-Trust'],
      url: 'noc.ailabs-infra.internal/cluster-mesh',
      kpis: [
        { label: 'Uptime SLA', val: '99.99%', sub: 'Multi-AZ active', color: 'text-emerald' },
        { label: 'Cloud Cost Reduction', val: '-42%', sub: 'FinOps rightsizing', color: 'text-cyan' },
        { label: 'Mean Time to Detect', val: '< 30 sec', sub: '24/7 NOC/SOC', color: '' }
      ],
      bars: [
        { name: 'Automated Horizontal Pod Autoscaling', metric: 'Instant Elasticity', width: '98%' },
        { name: 'Multi-Region Disaster Recovery (RPO < 10s)', metric: 'Verified Daily', width: '96%' },
        { name: 'Zero-Downtime Blue/Green CI/CD Deployments', metric: '100% Automated', width: '95%' }
      ],
      logs: [
        '[K8S-AUTOSCALE] Scaled production cluster from 24 to 68 nodes in 19s',
        '[SEC-AUDIT] Zero critical CVEs detected across 410 container images'
      ]
    }
  };

  const explorerTabs = document.querySelectorAll('.explorer-tab');
  const explorerStage = document.getElementById('explorer-stage');
  const stageKicker = document.getElementById('stage-kicker');
  const stageHeading = document.getElementById('stage-heading');
  const stageDescription = document.getElementById('stage-description');
  const stageModulesList = document.getElementById('stage-modules-list');
  const stageStackPills = document.getElementById('stage-stack-pills');
  const stagePreviewUrl = document.getElementById('stage-preview-url');
  const stagePreviewCanvas = document.getElementById('stage-preview-canvas');

  explorerTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-solution');
      const data = SOLUTION_BLUEPRINTS[key];
      if (!data) return;

      explorerTabs.forEach((t) => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      explorerStage?.setAttribute('aria-labelledby', tab.id);

      if (stageKicker) stageKicker.textContent = data.kicker;
      if (stageHeading) stageHeading.textContent = data.heading;
      if (stageDescription) stageDescription.textContent = data.description;

      if (stageModulesList) {
        stageModulesList.innerHTML = data.modules.map((m) => `<li>${m}</li>`).join('');
      }
      if (stageStackPills) {
        stageStackPills.innerHTML = data.stack.map((s) => `<span>${s}</span>`).join('');
      }
      if (stagePreviewUrl) {
        stagePreviewUrl.textContent = data.url;
      }
      if (stagePreviewCanvas) {
        const kpisHtml = data.kpis
          .map(
            (k) => `
          <div class="mock-kpi">
            <span class="mock-kpi-label">${k.label}</span>
            <strong class="mock-kpi-val ${k.color}">${k.val}</strong>
            <span class="mock-kpi-sub">${k.sub}</span>
          </div>`
          )
          .join('');

        const barsHtml = data.bars
          .map(
            (b) => `
          <div class="pipeline-bar-group">
            <div class="pipeline-bar-label">
              <span>${b.name}</span>
              <span>${b.metric}</span>
            </div>
            <div class="pipeline-track"><div class="pipeline-fill" style="width: ${b.width}"></div></div>
          </div>`
          )
          .join('');

        const logsHtml = data.logs.map((l) => `<code>${l}</code>`).join('');

        stagePreviewCanvas.innerHTML = `
          <div class="mock-kpi-row">${kpisHtml}</div>
          <div class="mock-pipeline">${barsHtml}</div>
          <div class="mock-log">${logsHtml}</div>
        `;
      }
    });
  });

  /* --------------------------------------------------------------------------
   * 6. Case Studies Category Filter
   * -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      caseCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.removeAttribute('hidden');
        } else {
          card.setAttribute('hidden', '');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
   * 7. Interactive Project Scope & Architecture Estimator
   * -------------------------------------------------------------------------- */
  const domainBtns = document.querySelectorAll('#estimator-domains .chip-btn');
  const intBtns = document.querySelectorAll('#estimator-integrations .chip-btn');
  const scaleSelect = document.getElementById('scale-select');

  const estTierBadge = document.getElementById('est-tier-badge');
  const estTimeline = document.getElementById('est-timeline');
  const estPod = document.getElementById('est-pod');
  const estSla = document.getElementById('est-sla');
  const estArchSummary = document.getElementById('est-arch-summary');
  const applyEstimateBtn = document.getElementById('apply-estimate-btn');

  function recalculateBlueprint() {
    const selectedDomains = Array.from(domainBtns).filter((b) => b.classList.contains('is-selected'));
    // Ensure at least 1 domain remains selected
    if (selectedDomains.length === 0 && domainBtns.length > 0) {
      domainBtns[0].classList.add('is-selected');
      selectedDomains.push(domainBtns[0]);
    }

    const selectedInts = Array.from(intBtns)
      .filter((b) => b.classList.contains('is-selected'))
      .map((b) => b.getAttribute('data-int'));

    const scale = scaleSelect ? scaleSelect.value : 'midmarket';

    let baseWeeks = 0;
    let maxTeam = 3;
    const domainNames = [];

    selectedDomains.forEach((btn) => {
      baseWeeks += Number(btn.getAttribute('data-weeks') || 6);
      maxTeam = Math.max(maxTeam, Number(btn.getAttribute('data-team') || 4));
      domainNames.push(btn.getAttribute('data-domain'));
    });

    // Parallel pod efficiency when combining multiple domains
    const adjustedWeeks = Math.max(4, Math.round(baseWeeks * 0.72) + Math.floor(selectedInts.length * 0.8));
    let scaleMultiplier = 1;
    let podSize = maxTeam + Math.min(4, selectedDomains.length - 1);
    let tierLabel = 'Enterprise Multi-Region Tier';
    let slaLabel = '99.95% – 99.99%';

    if (scale === 'growth') {
      scaleMultiplier = 0.85;
      tierLabel = 'High-Velocity Growth Tier';
      slaLabel = '99.9% High Availability';
    } else if (scale === 'global') {
      scaleMultiplier = 1.25;
      podSize += 3;
      tierLabel = 'Mission-Critical Global HA Cluster';
      slaLabel = '99.99% Multi-Region Active-Active';
    } else {
      podSize += 1;
    }

    const minW = Math.max(4, Math.round(adjustedWeeks * scaleMultiplier));
    const maxW = minW + 4;

    if (estTierBadge) estTierBadge.textContent = tierLabel;
    if (estTimeline) estTimeline.textContent = `${minW} – ${maxW} Weeks`;
    if (estPod) estPod.textContent = `${podSize} Senior Engineers`;
    if (estSla) estSla.textContent = slaLabel;

    if (estArchSummary) {
      const intText = selectedInts.length > 0 ? ` with ${selectedInts.join(', ')}` : '';
      estArchSummary.textContent = `Unified ${domainNames.join(' + ')} architecture${intText}, backed by containerized CI/CD pipelines, automated observability, and zero-trust security.`;
    }

    return {
      domainNames,
      selectedInts,
      tierLabel,
      timeline: `${minW} – ${maxW} Weeks`,
      podSize: `${podSize} Senior Engineers`,
      slaLabel
    };
  }

  domainBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-selected');
      recalculateBlueprint();
    });
  });

  intBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-selected');
      recalculateBlueprint();
    });
  });

  scaleSelect?.addEventListener('change', recalculateBlueprint);

  applyEstimateBtn?.addEventListener('click', () => {
    const state = recalculateBlueprint();
    const serviceSelect = document.getElementById('service-interest');
    const briefTextarea = document.getElementById('project-brief');

    if (serviceSelect) {
      if (state.domainNames.length > 1) {
        serviceSelect.value = 'Multi-Pillar Digital Transformation';
      } else if (state.domainNames[0]?.includes('CRM')) {
        serviceSelect.value = 'Custom CRM System';
      } else if (state.domainNames[0]?.includes('LMS')) {
        serviceSelect.value = 'Learning Management System (LMS)';
      } else if (state.domainNames[0]?.includes('Mobile')) {
        serviceSelect.value = 'Mobile Application (iOS & Android)';
      } else if (state.domainNames[0]?.includes('Infrastructure')) {
        serviceSelect.value = 'IT Services & Cloud Infrastructure';
      } else {
        serviceSelect.value = 'Enterprise Website / Web Portal';
      }
    }

    if (briefTextarea) {
      briefTextarea.value =
        `[AI Labs Scope Blueprint]\n` +
        `• Domains: ${state.domainNames.join(', ')}\n` +
        `• Architecture Tier: ${state.tierLabel} (${state.slaLabel} SLA)\n` +
        `• Key Integrations: ${state.selectedInts.join(', ') || 'Standard Enterprise Suite'}\n` +
        `• Target Delivery: ${state.timeline} (${state.podSize})\n\n` +
        `Additional Context: `;
      briefTextarea.focus();
    }

    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* --------------------------------------------------------------------------
   * 8. Form Validation after Interaction (Modern Web Guidance)
   *    - WeakMap fallback for :user-invalid
   *    - ARIA synchronization on blur & input
   * -------------------------------------------------------------------------- */
  const UserInvalidFallback = (() => {
    const dirtyState = new WeakMap();

    const updateState = (input) => {
      const isValid = input.checkValidity();
      input.classList.toggle('user-invalid-fallback', !isValid);
      input.classList.toggle('user-valid-fallback', isValid);

      if (!isValid) {
        input.setAttribute('aria-invalid', 'true');
      } else {
        input.removeAttribute('aria-invalid');
      }
    };

    const handleEvent = (event) => {
      const input = event.target;

      if (event.type === 'reset') {
        const controls = input.elements || [];
        for (const control of controls) {
          dirtyState.delete(control);
          control.classList.remove('user-invalid-fallback', 'user-valid-fallback');
          control.removeAttribute('aria-invalid');
        }
        return;
      }

      if (!input.checkValidity) return;

      if (event.type === 'input' || event.type === 'change') {
        const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
        state.hasInteracted = true;
        dirtyState.set(input, state);
        if (state.hasBlurred) {
          updateState(input);
        }
      } else if (event.type === 'blur') {
        const state = dirtyState.get(input) || { hasInteracted: false, hasBlurred: false };
        state.hasBlurred = true;
        dirtyState.set(input, state);
        if (state.hasInteracted) {
          updateState(input);
        }
      }
    };

    const init = (root = document) => {
      if (CSS.supports('selector(:user-invalid)')) return;
      root.addEventListener('blur', handleEvent, true);
      root.addEventListener('input', handleEvent);
      root.addEventListener('change', handleEvent);
      root.addEventListener('reset', handleEvent, true);
    };

    return { init };
  })();

  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    UserInvalidFallback.init(consultationForm);

    // Sync aria-invalid with native :user-invalid state
    const syncAria = (el) => {
      if (!el || typeof el.matches !== 'function') return;
      if (CSS.supports('selector(:user-invalid)')) {
        el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
      }
    };

    consultationForm.addEventListener('blur', (e) => syncAria(e.target), true);
    consultationForm.addEventListener('input', (e) => {
      if (e.target?.hasAttribute?.('aria-invalid')) syncAria(e.target);
    });

    const formSuccess = document.getElementById('form-success');
    const mailtoLink = document.getElementById('mailto-fallback-link');
    const copyBriefBtn = document.getElementById('copy-brief-btn');
    let latestBriefText = '';

    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!consultationForm.checkValidity()) {
        // Focus first invalid field and sync ARIA
        const firstInvalid = consultationForm.querySelector(':invalid');
        if (firstInvalid) {
          firstInvalid.classList.add('user-invalid-fallback');
          firstInvalid.setAttribute('aria-invalid', 'true');
          firstInvalid.focus();
        }
        return;
      }

      const formData = new FormData(consultationForm);
      const fullName = formData.get('fullName');
      const workEmail = formData.get('workEmail');
      const companyName = formData.get('companyName');
      const serviceInterest = formData.get('serviceInterest');
      const projectBrief = formData.get('projectBrief');

      const subject = `AI Labs Architecture Briefing: ${companyName} — ${serviceInterest}`;
      latestBriefText =
        `Organization: ${companyName}\n` +
        `Contact: ${fullName} (${workEmail})\n` +
        `Primary Specialization: ${serviceInterest}\n\n` +
        `Project Scope & Objectives:\n${projectBrief}`;

      if (mailtoLink) {
        mailtoLink.href = `mailto:solutions@ailabs.global?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(latestBriefText)}`;
      }

      if (formSuccess) {
        formSuccess.hidden = false;
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });

    copyBriefBtn?.addEventListener('click', async () => {
      if (!latestBriefText) return;
      try {
        await navigator.clipboard.writeText(latestBriefText);
        copyBriefBtn.textContent = '✓ Copied to Clipboard';
        setTimeout(() => {
          copyBriefBtn.textContent = 'Copy Brief to Clipboard';
        }, 2500);
      } catch {
        copyBriefBtn.textContent = 'Please copy manually';
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 9. Dynamic Year in Footer
   * -------------------------------------------------------------------------- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
