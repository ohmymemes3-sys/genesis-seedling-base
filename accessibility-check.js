// Color contrast verification
const colors = {
  primary: '#4292f1',
  background: '#ffffff',
  text: '#111111',
  accent: '#f5f7fa'
};

// Calculate relative luminance
function getLuminance(hex) {
  const rgb = parseInt(hex.slice(1), 16);
  const r = ((rgb >> 16) & 0xff) / 255;
  const g = ((rgb >> 8) & 0xff) / 255;
  const b = (rgb & 0xff) / 255;
  
  const [rs, gs, bs] = [r, g, b].map(c => 
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(color1, color2) {
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

console.log('=== WCAG Accessibility Contrast Ratios ===\n');

// Test combinations
const tests = [
  ['Primary on Background', colors.primary, colors.background],
  ['Text on Background', colors.text, colors.background],
  ['Background on Primary', colors.background, colors.primary],
  ['Text on Accent', colors.text, colors.accent]
];

tests.forEach(([name, fg, bg]) => {
  const ratio = getContrastRatio(fg, bg);
  const wcagAA = ratio >= 4.5 ? '✅ PASS' : '❌ FAIL';
  const wcagAAA = ratio >= 7 ? '✅ PASS' : '❌ FAIL';
  console.log(`${name}:`);
  console.log(`  Ratio: ${ratio.toFixed(2)}:1`);
  console.log(`  WCAG AA (4.5:1): ${wcagAA}`);
  console.log(`  WCAG AAA (7:1): ${wcagAAA}\n`);
});
