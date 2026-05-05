/**
 * Portfolio Design Validator
 * ─────────────────────────
 * Paste this entire file into preview_eval (or browser console) along with
 * a spec file (e.g. ai-system-spec.js) to get a full gap report.
 *
 * Usage via preview_eval:
 *   1. Load the spec:   const SPEC = { ... };
 *   2. Run validator:   runValidation(SPEC);
 *
 * Check types:
 *   style     — computed CSS property on a single selector
 *   gap       — pixel distance between bottom of el1 and top of el2
 *   text      — exact text content of an element
 *   exists    — element must exist in DOM
 */

function runValidation(spec) {
  const results = [];

  spec.checks.forEach(check => {
    try {
      let actual, pass;

      if (check.type === 'exists') {
        const el = document.querySelector(check.selector);
        actual = el ? 'found' : 'not found';
        pass = !!el;

      } else if (check.type === 'style') {
        const el = document.querySelector(check.selector);
        if (!el) { results.push({ status: 'MISSING', name: check.name, selector: check.selector, expected: check.expected, actual: 'element not found' }); return; }
        actual = getComputedStyle(el)[check.property];
        // Normalise color values (any property returning rgb(...) form) to hex
        if (typeof actual === 'string' && /^rgba?\(/.test(actual)) {
          actual = rgbToHex(actual);
        }
        pass = actual === check.expected;

      } else if (check.type === 'gap') {
        const el1 = document.querySelector(check.selector);
        const el2 = document.querySelector(check.selector2);
        if (!el1) { results.push({ status: 'MISSING', name: check.name, selector: check.selector, expected: check.expected, actual: 'el1 not found' }); return; }
        if (!el2) { results.push({ status: 'MISSING', name: check.name, selector: check.selector2, expected: check.expected, actual: 'el2 not found' }); return; }
        const r1 = el1.getBoundingClientRect();
        const r2 = el2.getBoundingClientRect();
        actual = Math.round(r2.top - r1.bottom) + 'px';
        pass = actual === check.expected;

      } else if (check.type === 'flex-gap') {
        const el = document.querySelector(check.selector);
        if (!el) { results.push({ status: 'MISSING', name: check.name, selector: check.selector, expected: check.expected, actual: 'element not found' }); return; }
        actual = getComputedStyle(el).gap || getComputedStyle(el).rowGap;
        pass = actual === check.expected;

      } else if (check.type === 'text') {
        const el = document.querySelector(check.selector);
        if (!el) { results.push({ status: 'MISSING', name: check.name, selector: check.selector, expected: check.expected, actual: 'element not found' }); return; }
        actual = el.textContent.trim().replace(/\s+/g, ' ');
        pass = actual === check.expected;

      } else if (check.type === 'text-contains') {
        const el = document.querySelector(check.selector);
        if (!el) { results.push({ status: 'MISSING', name: check.name, selector: check.selector, expected: check.expected, actual: 'element not found' }); return; }
        actual = el.textContent.trim();
        pass = actual.includes(check.expected);

      } else {
        actual = 'unknown check type';
        pass = false;
      }

      results.push({ status: pass ? 'PASS' : 'FAIL', name: check.name, selector: check.selector, expected: check.expected, actual });

    } catch (e) {
      results.push({ status: 'ERROR', name: check.name, selector: check.selector, expected: check.expected, actual: e.message });
    }
  });

  // ── Report ─────────────────────────────────────────────
  const fails   = results.filter(r => r.status === 'FAIL');
  const missing = results.filter(r => r.status === 'MISSING');
  const errors  = results.filter(r => r.status === 'ERROR');
  const passes  = results.filter(r => r.status === 'PASS');

  const lines = [];
  lines.push(`\n╔══════════════════════════════════════════════╗`);
  lines.push(`║  DESIGN VALIDATION — ${spec.page.padEnd(22)}║`);
  lines.push(`╚══════════════════════════════════════════════╝`);
  lines.push(`  ✅ PASS    ${String(passes.length).padStart(3)}`);
  lines.push(`  ❌ FAIL    ${String(fails.length).padStart(3)}`);
  lines.push(`  ⚠️  MISSING ${String(missing.length).padStart(3)}`);
  lines.push(`  🔥 ERROR   ${String(errors.length).padStart(3)}`);
  lines.push(`  ──────────────────────────────────────────────`);

  if (fails.length > 0) {
    lines.push(`\n  FAILURES:`);
    fails.forEach(f => {
      lines.push(`\n  ❌ ${f.name}`);
      lines.push(`     selector : ${f.selector}`);
      lines.push(`     expected : ${f.expected}`);
      lines.push(`     actual   : ${f.actual}`);
    });
  }
  if (missing.length > 0) {
    lines.push(`\n  MISSING ELEMENTS:`);
    missing.forEach(m => lines.push(`  ⚠️  ${m.name} → ${m.selector}`));
  }
  if (errors.length > 0) {
    lines.push(`\n  ERRORS:`);
    errors.forEach(e => lines.push(`  🔥 ${e.name}: ${e.actual}`));
  }
  if (fails.length === 0 && missing.length === 0 && errors.length === 0) {
    lines.push(`\n  ✨ All checks passed — page matches Figma spec.`);
  }

  console.log(lines.join('\n'));
  return results;
}

// ── Helpers ───────────────────────────────────────────────
function rgbToHex(rgb) {
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return rgb.toLowerCase();
  return '#' + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('').toLowerCase();
}
