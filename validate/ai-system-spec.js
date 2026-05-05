/**
 * Figma Spec — ai-system.html
 * Source: https://www.figma.com/design/8GEqwkx0ENInCieGuJe1gp/PF?node-id=884-110947
 * Extracted: 2026-05-01
 *
 * IMPORTANT: Run at desktop viewport (≥1280px). Values below are Figma desktop spec.
 * Responsive overrides (max-width: 1280px / 900px / 600px) intentionally reduce
 * font sizes and gaps for mobile — those are not bugs.
 *
 * How to run:
 *   1. Open http://localhost:4200/ai-system.html in preview
 *   2. In preview_eval, paste the contents of validator.js
 *   3. Then paste this file and call: runValidation(AI_SYSTEM_SPEC);
 */

const AI_SYSTEM_SPEC = {
  page: 'ai-system',
  figmaNode: '884:110947',
  checks: [

    // ── PAGE LAYOUT ──────────────────────────────────────────
    {
      name: 'Page sections gap (project-main)',
      type: 'flex-gap',
      selector: '.project-main',
      expected: '72px',
    },

    // ── HERO ─────────────────────────────────────────────────
    {
      name: 'Hero outer gap (text group → image)',
      type: 'flex-gap',
      selector: '.project-hero',
      expected: '32px',
    },
    {
      name: 'Hero text group inner gap (title → subtitle)',
      type: 'flex-gap',
      selector: '.project-hero-text',
      expected: '12px',
    },
    {
      name: 'Hero title font-size',
      type: 'style',
      selector: '.project-hero-title',
      property: 'fontSize',
      expected: '32px',
    },
    {
      name: 'Hero title font-weight',
      type: 'style',
      selector: '.project-hero-title',
      property: 'fontWeight',
      expected: '600',
    },
    {
      name: 'Hero title line-height',
      type: 'style',
      selector: '.project-hero-title',
      property: 'lineHeight',
      expected: '48px',
    },
    {
      name: 'Hero title color',
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
      name: 'Hero subtitle color',
      type: 'style',
      selector: '.project-hero-desc',
      property: 'color',
      expected: '#b7b2aa',
    },
    {
      name: 'Hero subtitle text — comma before "improving"',
      type: 'text-contains',
      selector: '.project-hero-desc',
      expected: 'using AI, improving development speed and quality',
    },

    // ── SECTIONS ─────────────────────────────────────────────
    {
      name: 'Section heading font-size',
      type: 'style',
      selector: '.project-section-heading',
      property: 'fontSize',
      expected: '20px',
    },
    {
      name: 'Section heading font-weight',
      type: 'style',
      selector: '.project-section-heading',
      property: 'fontWeight',
      expected: '600',
    },
    {
      name: 'Section heading line-height',
      type: 'style',
      selector: '.project-section-heading',
      property: 'lineHeight',
      expected: '28px',
    },
    {
      name: 'Section heading color',
      type: 'style',
      selector: '.project-section-heading',
      property: 'color',
      expected: '#fdfcfa',
    },
    {
      name: 'Section internal gap (heading → body → image)',
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
      name: 'cs-body color',
      type: 'style',
      selector: '.cs-body',
      property: 'color',
      expected: '#b7b2aa',
    },

    // ── EXECUTION SUBSECTIONS ────────────────────────────────
    {
      name: 'Execution subsection gap (heading → body → image)',
      type: 'flex-gap',
      selector: '.cs-subsection',
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
      name: 'cs-section-heading font-weight',
      type: 'style',
      selector: '.cs-section-heading',
      property: 'fontWeight',
      expected: '600',
    },

    // ── IMAGE PANELS ─────────────────────────────────────────
    {
      name: 'Image panel background',
      type: 'style',
      selector: '.cs-panel-full',
      property: 'backgroundColor',
      expected: '#313131',
    },
    {
      name: 'Image panel border-radius',
      type: 'style',
      selector: '.cs-panel-full',
      property: 'borderRadius',
      expected: '4px',
    },
    {
      name: 'Image caption font-size',
      type: 'style',
      selector: '.cs-img-caption',
      property: 'fontSize',
      expected: '12px',
    },
    {
      name: 'Image caption line-height',
      type: 'style',
      selector: '.cs-img-caption',
      property: 'lineHeight',
      expected: '16px',
    },

    // ── WORKFLOW BOX ─────────────────────────────────────────
    {
      name: 'Workflow box background',
      type: 'style',
      selector: '.cs-workflow-box',
      property: 'backgroundColor',
      expected: '#313131',
    },
    {
      name: 'Workflow label — Before has space before colon',
      type: 'text-contains',
      selector: '.cs-workflow-label',
      expected: 'Before :',
    },

    // ── IMPACT LIST ──────────────────────────────────────────
    {
      name: 'Impact heading font-size',
      type: 'style',
      selector: '.cs-impact-heading',
      property: 'fontSize',
      expected: '16px',
    },
    {
      name: 'Impact heading font-weight',
      type: 'style',
      selector: '.cs-impact-heading',
      property: 'fontWeight',
      expected: '600',
    },
    {
      name: 'Impact item font-size (Source Serif Pro 18)',
      type: 'style',
      selector: '.cs-impact-item',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Impact item line-height',
      type: 'style',
      selector: '.cs-impact-item',
      property: 'lineHeight',
      expected: '28px',
    },

    // ── MORE PROJECTS ─────────────────────────────────────────
    {
      name: 'More Projects section gap',
      type: 'flex-gap',
      selector: '.more-projects',
      expected: '44px',
    },
    {
      name: 'More Projects heading font-size',
      type: 'style',
      selector: '.more-projects > h2',
      property: 'fontSize',
      expected: '24px',
    },
    {
      name: 'More Projects heading line-height',
      type: 'style',
      selector: '.more-projects > h2',
      property: 'lineHeight',
      expected: '32px',
    },
    {
      name: 'Project card background',
      type: 'style',
      selector: '.project-card',
      property: 'backgroundColor',
      expected: '#282828',
    },
    {
      name: 'Project card border-radius',
      type: 'style',
      selector: '.project-card',
      property: 'borderRadius',
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
      name: 'Project card body font-size (Source Serif Pro 18)',
      type: 'style',
      selector: '.project-card-body',
      property: 'fontSize',
      expected: '18px',
    },
    {
      name: 'Project card body line-height',
      type: 'style',
      selector: '.project-card-body',
      property: 'lineHeight',
      expected: '28px',
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
    {
      name: 'Second project title — Onboarding Re-Architecture',
      type: 'text',
      selector: '.project-card:last-child .project-card-title',
      expected: 'Onboarding Re-Architecture',
    },

    // ── TEXT CONTENT ─────────────────────────────────────────
    {
      name: 'Problem body — corrected grammar (systems were)',
      type: 'text-contains',
      selector: '.cs-body',
      expected: 'our systems were not ready',
    },
    {
      // first .cs-img-caption in DOM order is the Problem caption
      name: 'Problem caption — Independent systems',
      type: 'text',
      selector: '.cs-img-caption',
      expected: 'Independent systems. Inconsistent products. Repeated effort.',
    },
    {
      name: 'Problem closing — AI outputs were isolated',
      type: 'text-contains',
      selector: '.project-main',
      expected: 'AI outputs were isolated, non-reusable, and inconsistent across teams.',
    },
    {
      name: 'AI Validation closing — past tense (became)',
      type: 'text-contains',
      selector: '.cs-subsection:nth-of-type(3) .cs-body',
      expected: 'became predictable',
    },
    {
      name: 'Execution section heading exists',
      type: 'text',
      selector: '.cs-execution > .project-section-heading',
      expected: 'Execution',
    },

    // ── NAVIGATION ───────────────────────────────────────────
    {
      name: 'Nav links exist',
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
