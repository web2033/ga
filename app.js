const primary = getComputedStyle(document.documentElement).getPropertyValue(
  '--primary'
);

const accent = getComputedStyle(document.documentElement).getPropertyValue(
  '--accent'
);

const style = [
  'color: white',
  'font-size: 2em',
  'font-family: Montserrat',
  'font-weight: 700',
  'text-transform: uppercase',
  'padding: 10px 20px'
];

const styles1 = [...style, `background-color: ${primary}`].join(';');
console.log('%cHello GitHub Pages', styles1);

const styles2 = [...style, `background-color: ${accent}`].join(';');
console.log('%cdemo-for-test.ga', styles2);
