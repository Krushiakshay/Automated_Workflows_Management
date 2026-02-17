const hexToHsl = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if(max == min){
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  return `${h} ${s}% ${l}%`;
}

const colors = {
  'Primary': '#a67c52',
  'Primary Foreground': '#ffffff',
  'Secondary': '#e2d8c3',
  'Secondary Foreground': '#5c4d3f',
  'Accent': '#d4c8aa',
  'Accent Foreground': '#4a3f35',
  'Background': '#f5f1e6',
  'Foreground': '#4a3f35',
  'Card': '#fffcf5',
  'Card Foreground': '#4a3f35',
  'Popover': '#fffcf5',
  'Popover Foreground': '#4a3f35',
  'Muted': '#ece5d8',
  'Muted Foreground': '#7d6b56',
  'Destructive': '#b54a35',
  'Destructive Foreground': '#ffffff',
  'Border': '#dbd0ba',
  'Input': '#dbd0ba',
  'Ring': '#a67c52',
  'Chart 1': '#a67c52',
  'Chart 2': '#8d6e4c',
  'Chart 3': '#735a3a',
  'Chart 4': '#b3906f',
  'Chart 5': '#c0a080',
  'Sidebar': '#ece5d8',
  'Sidebar Foreground': '#4a3f35',
  'Sidebar Primary': '#a67c52',
  'Sidebar Primary Foreground': '#ffffff',
  'Sidebar Accent': '#d4c8aa',
  'Sidebar Accent Foreground': '#4a3f35',
  'Sidebar Border': '#dbd0ba',
  'Sidebar Ring': '#a67c52'
};

for (const [key, value] of Object.entries(colors)) {
  console.log(`--${key.toLowerCase().replace(/ /g, '-')}: ${hexToHsl(value)};`);
}
