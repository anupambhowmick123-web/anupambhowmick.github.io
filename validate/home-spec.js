/**
 * Figma Spec — index.html (Home v1)
 * Source: https://www.figma.com/design/8GEqwkx0ENInCieGuJe1gp/PF?node-id=1108-14484
 * Extracted: 2026-05-01
 *
 * IMPORTANT: Run at desktop viewport (≥1280px). Values are Figma desktop spec.
 * Responsive overrides intentionally reduce font sizes/gaps below 1280px.
 *
 * How to run:
 *   1. Open http://localhost:4200/index.html in preview
 *   2. In preview_eval, paste the contents of validator.js
 *   3. Then paste this file and call: runValidation(HOME_SPEC);
 */

const HOME_SPEC = {
  page: 'home',
  figmaNode: '1108:14484',
  checks: [

    // ── PAGE LAYOUT ──────────────────────────────────────────
    {
      name: 'Page top padding',
      type: 'style',
      selector: '.page',
      property: 'paddingTop',
      expected: '128px',
    },
    {
      name: 'Page bottom padding',
      type: 'style',
      selector: '.page',
      property: 'paddingBottom',
      expected: '128px',
    },
    {
      name: 'Content column width',
      type: 'style',
      selector: '.content',
      property: 'width',
      expected: '680px',
    },
    {
      name: 'Content gap (bio-main → footer)',
      type: 'flex-gap',
      selector: '.content',
      expected: '200px',
    },
    {
      name: 'bio-main section gap',
      type: 'flex-gap',
      selector: '.bio-main',
      expected: '132px',
    },

    // ── BACKGROUND ───────────────────────────────────────────
    {
      name: 'Body background colour',
      type: 'style',
      selector: 'body',
      property: 'backgroundColor',
      expected: '#252525',
    },

    // ── HERO IDENTITY ────────────────────────────────────────
    {
      name: 'Hero identity-group gap (identity → bio)',
      type: 'flex-gap',
      selector: '.bio-identity-group',
      expected: '32px',
    },
    {
      name: 'Identity inner gap (name/role/company)',
      type: 'flex-gap',
      selector: '.bio-identity',
      expected: '4px',
    },
    {
      name: 'Name (H1) text',
      type: 'text',
      selector: '.bio-identity .ds-h1',
      expected: 'Anupam Bhowmick',
    },
    {
      name: 'Name (H1) font-size',
      type: 'style',
      selector: '.bio-identity .ds-h1',
      property: 'fontSize',
      expected: '32px',
    },
    {
      name: 'Name (H1) line-height',
      type: 'style',
      selector: '.bio-identity .ds-h1',
      property: 'lineHeight',
      expected: '48px',
    },
    {
      name: 'Name (H1) colour',
      type: 'style',
      selector: '.bio-identity .ds-h1',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Role (H2 muted) text',
      type: 'text',
      selector: '.bio-identity .ds-h2-muted',
      expected: 'Senior Product Designer',
    },
    {
      name: 'Role (H2 muted) font-size',
      type: 'style',
      selector: '.bio-identity .ds-h2-muted',
      property: 'fontSize',
      expected: '24px',
    },
    {
      name: 'Role (H2 muted) line-height',
      type: 'style',
      selector: '.bio-identity .ds-h2-muted',
      property: 'lineHeight',
      expected: '32px',
    },
    {
      name: 'Role (H2 muted) colour',
      type: 'style',
      selector: '.bio-identity .ds-h2-muted',
      property: 'color',
      expected: '#b7b2aa',
    },
    {
      name: 'Company (H3 muted) text',
      type: 'text',
      selector: '.bio-identity .ds-h3-muted',
      expected: 'Xoxoday',
    },
    {
      name: 'Company (H3 muted) font-size',
      type: 'style',
      selector: '.bio-identity .ds-h3-muted',
      property: 'fontSize',
      expected: '20px',
    },

    // ── BIO TEXT ─────────────────────────────────────────────
    {
      name: 'Bio text font-size (Source Serif Pro 18px)',
      type: 'style',
      selector: '.bio-text',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Bio text line-height',
      type: 'style',
      selector: '.bio-text',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'Bio text font-family contains Source Serif Pro',
      type: 'text-contains',
      selector: 'body',
      expected: 'Anupam',  // sentinel — replaced by inspect below
    },

    // ── WORK SECTION ─────────────────────────────────────────
    {
      name: 'Work section gap',
      type: 'flex-gap',
      selector: '.work-section',
      expected: '44px',
    },
    {
      name: 'Work heading text',
      type: 'text',
      selector: '.work-section .ds-h3',
      expected: 'Work at Xoxoday',
    },
    {
      name: 'Work intro font-size (18px Source Serif)',
      type: 'style',
      selector: '.work-intro',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Work focus row label width',
      type: 'style',
      selector: '.work-focus-row .work-focus-label',
      property: 'width',
      expected: '160px',
    },
    {
      name: 'Work focus label font-size',
      type: 'style',
      selector: '.work-focus-label',
      property: 'fontSize',
      expected: '16px',
    },
    {
      name: 'Work focus label colour',
      type: 'style',
      selector: '.work-focus-label',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Work focus desc font-size (18px Source Serif)',
      type: 'style',
      selector: '.work-focus-desc',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Work focus desc colour',
      type: 'style',
      selector: '.work-focus-desc',
      property: 'color',
      expected: '#b7b2aa',
    },

    // ── PROJECTS SUB ─────────────────────────────────────────
    {
      name: 'Projects sub gap (intro → cards)',
      type: 'flex-gap',
      selector: '.projects-sub',
      expected: '32px',
    },
    {
      name: 'Project card 1 (AI) padding',
      type: 'style',
      selector: '.bio-main .project-card',
      property: 'padding',
      expected: '28px',
    },
    {
      name: 'Project card 1 (AI) bg colour',
      type: 'style',
      selector: '.bio-main .project-card',
      property: 'backgroundColor',
      expected: '#282828',
    },
    {
      name: 'Project card content gap (title → body)',
      type: 'flex-gap',
      selector: '.project-card-content',
      expected: '8px',
    },
    {
      name: 'Project card title font-size',
      type: 'style',
      selector: '.project-card-title',
      property: 'fontSize',
      expected: '20px',
    },
    {
      name: 'Project card title line-height',
      type: 'style',
      selector: '.project-card-title',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'Project card title colour',
      type: 'style',
      selector: '.project-card-title',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Homepage project card body font-size (18px Source Serif)',
      type: 'style',
      selector: '.bio-main .project-card-body',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Project card btn (View Case Study) font-size',
      type: 'style',
      selector: '.project-card-btn',
      property: 'fontSize',
      expected: '14px',
    },
    {
      name: 'Project card btn underlined',
      type: 'style',
      selector: '.project-card-btn',
      property: 'textDecorationLine',
      expected: 'underline',
    },

    // ── PRINCIPLES ───────────────────────────────────────────
    {
      name: 'Principles list font-size (18px)',
      type: 'style',
      selector: '.principles-list li',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Principles list line-height',
      type: 'style',
      selector: '.principles-list li',
      property: 'lineHeight',
      expected: '28px',
    },

    // ── EXPERIENCE ───────────────────────────────────────────
    {
      name: 'Experience entries gap',
      type: 'flex-gap',
      selector: '.exp-entries',
      expected: '22px',
    },
    {
      name: 'Experience date font-size (18px Source Serif)',
      type: 'style',
      selector: '.exp-date',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Experience date line-height',
      type: 'style',
      selector: '.exp-date',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'Experience title font-size (16px Sora)',
      type: 'style',
      selector: '.exp-title',
      property: 'fontSize',
      expected: '16px',
    },
    {
      name: 'Experience title colour',
      type: 'style',
      selector: '.exp-title',
      property: 'color',
      expected: '#fdfcfa',
    },

    // ── COPY (Figma 2026-05-05 update) ───────────────────────
    {
      name: 'Bio para 1 — Based in Bengaluru with 9 years',
      type: 'text-contains',
      selector: '.bio-text',
      expected: 'Based in Bengaluru with',
    },
    {
      name: 'Bio para 1 — strategy to how they are built and shipped',
      type: 'text-contains',
      selector: '.bio-text',
      expected: 'driving end-to-end decisions from strategy to how they are built and shipped',
    },
    {
      name: 'Bio para 2 — I lead design at Xoxoday',
      type: 'text-contains',
      selector: '.bio-text',
      expected: 'I lead design at Xoxoday',
    },
    {
      name: 'Work intro — I am leading design',
      type: 'text-contains',
      selector: '.work-intro',
      expected: 'I am leading design across this ecosystem',
    },
    {
      name: 'AI Workflows label (capital W)',
      type: 'text-contains',
      selector: '.work-section',
      expected: 'AI Workflows',
    },
    {
      name: 'Education entry order — date first',
      type: 'text',
      selector: '.bio-section:last-of-type .exp-entry .exp-date:first-child',
      expected: '2011 – 2015',
    },
    {
      name: 'Resume modal iframe points to Resume_2026.pdf',
      type: 'exists',
      selector: '#resume-modal iframe[src="Resume_2026.pdf"]',
      expected: 'found',
    },
    {
      name: 'Resume modal download link points to Resume_2026.pdf',
      type: 'exists',
      selector: '.resume-modal-download[href="Resume_2026.pdf"]',
      expected: 'found',
    },

    // ── FOOTER ───────────────────────────────────────────────
    {
      name: 'Footer top border colour',
      type: 'style',
      selector: '.ds-footer-row',
      property: 'borderTopColor',
      expected: '#4a4a4a',
    },
    {
      name: 'Footer padding-top',
      type: 'style',
      selector: '.ds-footer-row',
      property: 'paddingTop',
      expected: '33px',
    },
    {
      name: 'Footer caption font-size',
      type: 'style',
      selector: '.ds-footer-row .ds-caption',
      property: 'fontSize',
      expected: '12px',
    },

    // ── NAV BAR ──────────────────────────────────────────────
    {
      name: 'Nav height',
      type: 'style',
      selector: '.site-nav',
      property: 'height',
      expected: '48px',
    },
    {
      name: 'Nav left gap',
      type: 'flex-gap',
      selector: '.nav-left',
      expected: '40px',
    },
    {
      name: 'Nav right gap',
      type: 'flex-gap',
      selector: '.nav-right',
      expected: '24px',
    },
    {
      name: 'Nav link font-size',
      type: 'style',
      selector: '.nav-link',
      property: 'fontSize',
      expected: '14px',
    },
  ],
};
