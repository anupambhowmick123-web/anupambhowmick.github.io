/**
 * Figma Spec — onboarding.html
 * Source: https://www.figma.com/design/8GEqwkx0ENInCieGuJe1gp/PF?node-id=884-124188
 * Extracted: 2026-05-03
 *
 * IMPORTANT: Run at desktop viewport (≥1280px). Values below are Figma desktop spec.
 */

const ONBOARDING_SPEC = {
  page: 'onboarding',
  figmaNode: '884:124188',
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
      name: 'Content gap (project-main → footer)',
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
      name: 'Hero text inner gap',
      type: 'flex-gap',
      selector: '.project-hero-text',
      expected: '12px',
    },
    {
      name: 'Hero title text',
      type: 'text',
      selector: '.project-hero-title',
      expected: 'Onboarding Re-Architecture',
    },
    {
      name: 'Hero title font-size',
      type: 'style',
      selector: '.project-hero-title',
      property: 'fontSize',
      expected: '32px',
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
      name: 'Hero subtitle text — 70% drop-offs',
      type: 'text-contains',
      selector: '.project-hero-desc',
      expected: 'reducing early drop-offs by ~70%',
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
      name: 'cs-body font-size',
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
      name: 'Problem opening — Businesses sign up',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Businesses sign up to create an admin account with Xoxoday Plum',
    },
    {
      name: 'Problem highlight — too many upfront decisions',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'too many upfront decisions',
    },
    {
      name: 'Problem highlight — before users could explore the platform',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'before users could explore the platform',
    },
    {
      name: 'Problem closing — structured onboarding system',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'There was a clear need to create a structured onboarding system',
    },
    {
      name: 'Problem caption 1 — multiple setup decisions',
      type: 'text',
      selector: '.cs-img-caption',
      expected: 'Before: Users had to make multiple setup decisions before accessing the platform',
    },

    // ── ROLE ─────────────────────────────────────────────────
    {
      name: 'Role copy',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'I led the experience design end to end, defining the onboarding strategy',
    },

    // ── STRATEGY ─────────────────────────────────────────────
    {
      name: 'Strategy intro',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'how users were moving through onboarding and where they were getting blocked',
    },
    {
      name: 'Strategy closing — guided onboarding system',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Our direction was to build a guided onboarding system',
    },

    // ── SOLUTION ─────────────────────────────────────────────
    {
      name: 'Solution subsections wrapper exists',
      type: 'exists',
      selector: '.cs-subsections',
      expected: 'found',
    },
    {
      name: 'Solution subsections inner gap (72px)',
      type: 'flex-gap',
      selector: '.cs-subsections',
      expected: '72px',
    },
    {
      name: 'Each subsection internal gap',
      type: 'flex-gap',
      selector: '.cs-subsections > .cs-subsection',
      expected: '32px',
    },
    {
      name: 'Solution intro highlight',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'help users send their first reward as quickly as possible',
    },
    {
      name: 'Workflow flow box exists',
      type: 'exists',
      selector: '.cs-flow-box',
      expected: 'found',
    },
    {
      name: 'Workflow flow box bg',
      type: 'style',
      selector: '.cs-flow-box',
      property: 'backgroundColor',
      expected: '#313131',
    },
    {
      name: 'Workflow text — Send First Reward',
      type: 'text-contains',
      selector: '.cs-flow-box',
      expected: 'Send First Reward',
    },
    {
      name: 'Workflow text — Verify Business',
      type: 'text-contains',
      selector: '.cs-flow-box',
      expected: 'Verify Business',
    },

    // ── SUBSECTION HEADINGS ──────────────────────────────────
    {
      name: 'cs-section-heading font-size',
      type: 'style',
      selector: '.cs-section-heading',
      property: 'fontSize',
      expected: '24px',
    },
    {
      name: 'cs-section-heading colour',
      type: 'style',
      selector: '.cs-section-heading',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Subsection 2 heading — Simplified Account Creation',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(2) > .cs-section-heading',
      expected: 'Simplified Account Creation',
    },
    {
      name: 'Subsection 3 heading — Guided First Reward Journey',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(3) > .cs-section-heading',
      expected: 'Guided First Reward Journey',
    },
    {
      name: 'Subsection 4 heading — Early Visibility of Verification and Payments',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(4) > .cs-section-heading',
      expected: 'Early Visibility of Verification and Payments',
    },
    {
      name: 'Subsection 5 heading — System Behaviour',
      type: 'text',
      selector: '.cs-subsections > .cs-subsection:nth-child(5) > .cs-section-heading',
      expected: 'System Behaviour (Core Design Decision)',
    },

    // ── IMAGE STACK + CAPTIONS ───────────────────────────────
    {
      name: 'cs-img-stack exists (Guided/Early Visibility)',
      type: 'exists',
      selector: '.cs-img-stack',
      expected: 'found',
    },
    {
      name: 'cs-img-stack gap (12px)',
      type: 'flex-gap',
      selector: '.cs-img-stack',
      expected: '12px',
    },
    {
      name: 'Guided closing copy',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'making onboarding feel lighter',
    },
    {
      name: 'Early Visibility highlight',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'verification and payment setup earlier in the journey',
    },
    {
      name: 'System Behaviour highlight',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'complete their intent without interruption',
    },

    // ── IMPACT ───────────────────────────────────────────────
    {
      name: 'Impact bullet — 70% drop-offs',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Reduced early-stage drop-offs by ~70%',
    },
    {
      name: 'Impact bullet — 12% conversion',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Increased conversion of signups into paying customers by ~12%',
    },
    {
      name: 'Impact bullet — 25–55% support tickets',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'Reduced onboarding-related support tickets by ~25–55%',
    },

    // ── SUMMARY ──────────────────────────────────────────────
    {
      name: 'Summary highlight — structured guided system',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'structured, guided system',
    },
    {
      name: 'Summary closing — conversion-ready',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'made the platform more conversion-ready at scale',
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
      name: 'Second more-project — Payments',
      type: 'text',
      selector: '.more-projects .project-card:nth-child(3) .project-card-title',
      expected: 'Enterprise Payments Management System',
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
