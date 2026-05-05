/**
 * Figma Spec — payments.html
 * Source: https://www.figma.com/design/8GEqwkx0ENInCieGuJe1gp/PF?node-id=884-115814
 * Extracted: 2026-05-01
 *
 * IMPORTANT: Run at desktop viewport (≥1280px). Values below are Figma desktop spec.
 *
 * How to run:
 *   1. Open http://localhost:4200/payments.html in preview
 *   2. In preview_eval, paste the contents of validator.js
 *   3. Then paste this file and call: runValidation(PAYMENTS_SPEC);
 */

const PAYMENTS_SPEC = {
  page: 'payments',
  figmaNode: '884:115814',
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
      name: 'Content gap (.project-main → footer)',
      type: 'flex-gap',
      selector: '.content',
      expected: '124px',
    },
    {
      name: 'Project main section gap',
      type: 'flex-gap',
      selector: '.project-main',
      expected: '92px',
    },

    // ── HERO ─────────────────────────────────────────────────
    {
      name: 'Hero outer gap (text → image)',
      type: 'flex-gap',
      selector: '.project-hero',
      expected: '32px',
    },
    {
      name: 'Hero text inner gap (title → subtitle)',
      type: 'flex-gap',
      selector: '.project-hero-text',
      expected: '12px',
    },
    {
      name: 'Hero title text',
      type: 'text',
      selector: '.project-hero-title',
      expected: 'Enterprise Payments Management System',
    },
    {
      name: 'Hero title font-size',
      type: 'style',
      selector: '.project-hero-title',
      property: 'fontSize',
      expected: '32px',
    },
    {
      name: 'Hero title line-height',
      type: 'style',
      selector: '.project-hero-title',
      property: 'lineHeight',
      expected: '48px',
    },
    {
      name: 'Hero title colour',
      type: 'style',
      selector: '.project-hero-title',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Hero subtitle font-size (Source Serif Pro 18)',
      type: 'style',
      selector: '.project-hero-desc',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Hero subtitle line-height',
      type: 'style',
      selector: '.project-hero-desc',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'Hero subtitle colour',
      type: 'style',
      selector: '.project-hero-desc',
      property: 'color',
      expected: '#b7b2aa',
    },
    {
      name: 'Hero subtitle text',
      type: 'text-contains',
      selector: '.project-hero-desc',
      expected: 'reducing finance-related support tickets by ~25–35%',
    },

    // ── SECTION HEADINGS ─────────────────────────────────────
    {
      name: 'Section heading font-size',
      type: 'style',
      selector: '.project-section-heading',
      property: 'fontSize',
      expected: '20px',
    },
    {
      name: 'Section heading line-height',
      type: 'style',
      selector: '.project-section-heading',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'Section heading font-weight',
      type: 'style',
      selector: '.project-section-heading',
      property: 'fontWeight',
      expected: '600',
    },
    {
      name: 'Section heading colour',
      type: 'style',
      selector: '.project-section-heading',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Section internal gap',
      type: 'flex-gap',
      selector: '.project-section',
      expected: '32px',
    },

    // ── BODY TEXT ────────────────────────────────────────────
    {
      name: 'cs-body font-size (Source Serif Pro 18)',
      type: 'style',
      selector: '.cs-body',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'cs-body line-height',
      type: 'style',
      selector: '.cs-body',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'cs-body colour',
      type: 'style',
      selector: '.cs-body',
      property: 'color',
      expected: '#b7b2aa',
    },

    // ── PROBLEM ──────────────────────────────────────────────
    {
      name: 'Problem heading exists',
      type: 'text',
      selector: '.project-section:nth-child(2) .project-section-heading',
      expected: 'Problem',
    },
    {
      name: 'Problem opening — Xoxoday Plum',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'As Xoxoday Plum scaled with large enterprise clients',
    },
    {
      name: 'Problem highlights (cs-link) — payment data was scattered',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'payment data was scattered',
    },
    {
      name: 'Problem caption — Before: Redemption and financial data',
      type: 'text',
      selector: '.cs-img-caption',
      expected: 'Before: Redemption and financial data combined in a single Reports tab',
    },
    {
      name: 'Problem closing — structured payment experience',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'audit-ready data, and independent control',
    },

    // ── ROLE ─────────────────────────────────────────────────
    {
      name: 'Role copy — exact',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'I led the experience design end to end, defining the problem, restructuring the IA, and partnering with the PM and stakeholders to drive key product decisions.',
    },

    // ── STRATEGY ─────────────────────────────────────────────
    {
      name: 'Strategy intro — finance teams were actually managing payments',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'how finance teams were actually managing payments',
    },
    {
      name: 'Strategy closing highlight — single source of truth',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Finance teams lacked a reliable, single source of truth',
    },

    // ── SOLUTION ─────────────────────────────────────────────
    {
      name: 'Solution subsections wrapper exists',
      type: 'exists',
      selector: '.cs-subsections',
      expected: 'found',
    },
    {
      name: 'Solution subsections inner gap',
      type: 'flex-gap',
      selector: '.cs-subsections',
      expected: '52px',
    },
    {
      name: 'Each subsection internal gap',
      type: 'flex-gap',
      selector: '.cs-subsections > .cs-subsection',
      expected: '32px',
    },
    {
      name: 'cs-section-heading font-size',
      type: 'style',
      selector: '.cs-section-heading',
      property: 'fontSize',
      expected: '24px',
    },
    {
      name: 'cs-section-heading line-height',
      type: 'style',
      selector: '.cs-section-heading',
      property: 'lineHeight',
      expected: '32px',
    },
    {
      name: 'cs-section-heading colour',
      type: 'style',
      selector: '.cs-section-heading',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Subsection 1 heading text — Clean Report Separation',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(1) > .cs-section-heading',
      expected: 'Clean Report Separation',
    },
    {
      name: 'Subsection 2 heading text — Wallet Overview',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(2) > .cs-section-heading',
      expected: 'Wallet Overview',
    },
    {
      name: 'Subsection 3 heading text — Transaction History',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(3) > .cs-section-heading',
      expected: 'Transaction History (Ledger-Only View)',
    },
    {
      name: 'Subsection 4 heading text — Invoice Management',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(4) > .cs-section-heading',
      expected: 'Invoice Management',
    },
    {
      name: 'Side-by-side cs-pair gap',
      type: 'flex-gap',
      selector: '.cs-pair',
      expected: '20px',
    },

    // ── IMAGE PANELS ─────────────────────────────────────────
    {
      name: 'cs-panel-full background',
      type: 'style',
      selector: '.cs-panel-full',
      property: 'backgroundColor',
      expected: '#313131',
    },
    {
      name: 'cs-img-caption font-size',
      type: 'style',
      selector: '.cs-img-caption',
      property: 'fontSize',
      expected: '12px',
    },
    {
      name: 'cs-img-caption line-height',
      type: 'style',
      selector: '.cs-img-caption',
      property: 'lineHeight',
      expected: '16px',
    },
    {
      name: 'cs-img-caption colour',
      type: 'style',
      selector: '.cs-img-caption',
      property: 'color',
      expected: '#b7b2aa',
    },
    {
      name: 'Wallet caption text',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Wallet overview with balance, pending funds, and recent activity',
    },
    {
      name: 'Transaction History closing — clearer (not cleaner)',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'reconciliation became faster, clearer, and less prone to confusion',
    },

    // ── IMPACT ───────────────────────────────────────────────
    {
      name: 'Impact bullet — 25–35%',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Reduced finance-related support tickets by ~25–35%',
    },
    {
      name: 'Impact bullet — 30%',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Cut manual reconciliation effort by ~30%',
    },

    // ── SUMMARY ──────────────────────────────────────────────
    {
      name: 'Summary closing — enterprise-ready platform',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'It marked a shift from a reward-focused tool to an enterprise-ready platform.',
    },

    // ── MORE PROJECTS ────────────────────────────────────────
    {
      name: 'More Projects heading',
      type: 'text',
      selector: '.more-projects > h2',
      expected: 'More Projects',
    },
    {
      name: 'First more-project — AI System',
      type: 'text',
      selector: '.more-projects .project-card:nth-child(2) .project-card-title',
      expected: 'AI-Driven Product Development System',
    },
    {
      name: 'Second more-project — Onboarding Re-Architecture',
      type: 'text',
      selector: '.more-projects .project-card:nth-child(3) .project-card-title',
      expected: 'Onboarding Re-Architecture',
    },
    {
      name: 'Project card body font-size',
      type: 'style',
      selector: '.project-card-body',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Project card arrow icon exists',
      type: 'exists',
      selector: '.project-card-arrow',
      expected: 'found',
    },
    {
      name: 'Project card is an anchor (whole-card link)',
      type: 'exists',
      selector: 'a.project-card[href]',
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

    // ── NAVIGATION ───────────────────────────────────────────
    {
      name: 'Site nav exists',
      type: 'exists',
      selector: '.site-nav',
      expected: 'found',
    },
    {
      name: 'Lightbox overlay exists',
      type: 'exists',
      selector: '#lightbox',
      expected: 'found',
    },
  ],
};
