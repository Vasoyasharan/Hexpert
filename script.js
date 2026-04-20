'use strict';
// ════════════════════════════════════════════════════════════════════
//  HEXPERT — Advanced Color Learning Platform  |  script.js
// ════════════════════════════════════════════════════════════════════

/* ── Color Database ────────────────────────────────────────────────── */
const COLOR_DB = {
  // ── Easy (d:1) ──────────────────────────────────────────────────
  "#FF0000":{ name:"Red",           cat:"red",    d:1 },
  "#00FF00":{ name:"Lime",          cat:"green",  d:1 },
  "#0000FF":{ name:"Blue",          cat:"blue",   d:1 },
  "#FFFF00":{ name:"Yellow",        cat:"yellow", d:1 },
  "#FF00FF":{ name:"Magenta",       cat:"pink",   d:1 },
  "#00FFFF":{ name:"Cyan",          cat:"blue",   d:1 },
  "#FFA500":{ name:"Orange",        cat:"yellow", d:1 },
  "#800080":{ name:"Purple",        cat:"purple", d:1 },
  "#FFC0CB":{ name:"Pink",          cat:"pink",   d:1 },
  "#A52A2A":{ name:"Brown",         cat:"brown",  d:1 },
  "#808080":{ name:"Gray",          cat:"gray",   d:1 },
  "#FFFFFF":{ name:"White",         cat:"gray",   d:1 },
  "#000000":{ name:"Black",         cat:"gray",   d:1 },
  "#008000":{ name:"Green",         cat:"green",  d:1 },
  "#FFD700":{ name:"Gold",          cat:"yellow", d:1 },

  // ── Medium (d:2) ────────────────────────────────────────────────
  "#DC143C":{ name:"Crimson",       cat:"red",    d:2 },
  "#B22222":{ name:"Fire Brick",    cat:"red",    d:2 },
  "#8B0000":{ name:"Dark Red",      cat:"red",    d:2 },
  "#FF6347":{ name:"Tomato",        cat:"red",    d:2 },
  "#FF4500":{ name:"Orange Red",    cat:"yellow", d:2 },
  "#FF7F50":{ name:"Coral",         cat:"red",    d:2 },
  "#FA8072":{ name:"Salmon",        cat:"red",    d:2 },
  "#E9967A":{ name:"Dark Salmon",   cat:"red",    d:2 },
  "#1E90FF":{ name:"Dodger Blue",   cat:"blue",   d:2 },
  "#4169E1":{ name:"Royal Blue",    cat:"blue",   d:2 },
  "#4682B4":{ name:"Steel Blue",    cat:"blue",   d:2 },
  "#191970":{ name:"Midnight Blue", cat:"blue",   d:2 },
  "#000080":{ name:"Navy",          cat:"blue",   d:2 },
  "#87CEEB":{ name:"Sky Blue",      cat:"blue",   d:2 },
  "#2E8B57":{ name:"Sea Green",     cat:"green",  d:2 },
  "#32CD32":{ name:"Lime Green",    cat:"green",  d:2 },
  "#00FF7F":{ name:"Spring Green",  cat:"green",  d:2 },
  "#98FB98":{ name:"Pale Green",    cat:"green",  d:2 },
  "#9ACD32":{ name:"Yellow Green",  cat:"green",  d:2 },
  "#808000":{ name:"Olive",         cat:"green",  d:2 },
  "#4B0082":{ name:"Indigo",        cat:"purple", d:2 },
  "#8A2BE2":{ name:"Blue Violet",   cat:"purple", d:2 },
  "#9400D3":{ name:"Dark Violet",   cat:"purple", d:2 },
  "#FF1493":{ name:"Deep Pink",     cat:"pink",   d:2 },
  "#FF69B4":{ name:"Hot Pink",      cat:"pink",   d:2 },
  "#DA70D6":{ name:"Orchid",        cat:"pink",   d:2 },
  "#EE82EE":{ name:"Violet",        cat:"purple", d:2 },
  "#C0C0C0":{ name:"Silver",        cat:"gray",   d:2 },
  "#D2691E":{ name:"Chocolate",     cat:"brown",  d:2 },
  "#8B4513":{ name:"Saddle Brown",  cat:"brown",  d:2 },

  // ── Hard (d:3) ──────────────────────────────────────────────────
  "#B8860B":{ name:"Dark Goldenrod",    cat:"yellow", d:3 },
  "#DAA520":{ name:"Goldenrod",         cat:"yellow", d:3 },
  "#F0E68C":{ name:"Khaki",            cat:"yellow", d:3 },
  "#EEE8AA":{ name:"Pale Goldenrod",   cat:"yellow", d:3 },
  "#FFEFD5":{ name:"Papaya Whip",      cat:"yellow", d:3 },
  "#FFE4B5":{ name:"Moccasin",         cat:"yellow", d:3 },
  "#FFDEAD":{ name:"Navajo White",     cat:"yellow", d:3 },
  "#F5DEB3":{ name:"Wheat",            cat:"yellow", d:3 },
  "#FF8C00":{ name:"Dark Orange",      cat:"yellow", d:3 },
  "#00BFFF":{ name:"Deep Sky Blue",    cat:"blue",   d:3 },
  "#87CEFA":{ name:"Light Sky Blue",   cat:"blue",   d:3 },
  "#ADD8E6":{ name:"Light Blue",       cat:"blue",   d:3 },
  "#B0E0E6":{ name:"Powder Blue",      cat:"blue",   d:3 },
  "#6495ED":{ name:"Cornflower Blue",  cat:"blue",   d:3 },
  "#7B68EE":{ name:"Medium Slate Blue",cat:"blue",   d:3 },
  "#6A5ACD":{ name:"Slate Blue",       cat:"purple", d:3 },
  "#483D8B":{ name:"Dark Slate Blue",  cat:"purple", d:3 },
  "#9370DB":{ name:"Medium Purple",    cat:"purple", d:3 },
  "#BA55D3":{ name:"Medium Orchid",    cat:"purple", d:3 },
  "#9932CC":{ name:"Dark Orchid",      cat:"purple", d:3 },
  "#DDA0DD":{ name:"Plum",             cat:"pink",   d:3 },
  "#D8BFD8":{ name:"Thistle",          cat:"pink",   d:3 },
  "#DB7093":{ name:"Pale Violet Red",  cat:"pink",   d:3 },
  "#C71585":{ name:"Medium Violet Red",cat:"pink",   d:3 },
  "#DE3163":{ name:"Cerise Red",       cat:"pink",   d:3 },
  "#E30B5C":{ name:"Razzmatazz",       cat:"pink",   d:3 },
  "#3CB371":{ name:"Medium Sea Green", cat:"green",  d:3 },
  "#20B2AA":{ name:"Light Sea Green",  cat:"green",  d:3 },
  "#90EE90":{ name:"Light Green",      cat:"green",  d:3 },
  "#8FBC8F":{ name:"Dark Sea Green",   cat:"green",  d:3 },
  "#556B2F":{ name:"Dark Olive Green", cat:"green",  d:3 },
  "#6B8E23":{ name:"Olive Drab",       cat:"green",  d:3 },
  "#00FA9A":{ name:"Medium Spring Green",cat:"green",d:3 },
  "#7FFF00":{ name:"Chartreuse",       cat:"green",  d:3 },
  "#ADFF2F":{ name:"Green Yellow",     cat:"green",  d:3 },
  "#7CFC00":{ name:"Lawn Green",       cat:"green",  d:3 },
  "#BDB76B":{ name:"Dark Khaki",       cat:"yellow", d:3 },
  "#CD853F":{ name:"Peru",             cat:"brown",  d:3 },
  "#F4A460":{ name:"Sandy Brown",      cat:"brown",  d:3 },
  "#DEB887":{ name:"Burly Wood",       cat:"brown",  d:3 },
  "#D2B48C":{ name:"Tan",              cat:"brown",  d:3 },
  "#BC8F8F":{ name:"Rosy Brown",       cat:"brown",  d:3 },
  "#A0522D":{ name:"Sienna",           cat:"brown",  d:3 },
  "#800000":{ name:"Maroon",           cat:"brown",  d:3 },
  "#A9A9A9":{ name:"Dark Gray",        cat:"gray",   d:3 },
  "#D3D3D3":{ name:"Light Gray",       cat:"gray",   d:3 },
  "#DCDCDC":{ name:"Gainsboro",        cat:"gray",   d:3 },
  "#F5F5F5":{ name:"White Smoke",      cat:"gray",   d:3 },
  "#708090":{ name:"Slate Gray",       cat:"gray",   d:3 },
  "#778899":{ name:"Light Slate Gray", cat:"gray",   d:3 },
  "#2F4F4F":{ name:"Dark Slate Gray",  cat:"gray",   d:3 },
  "#CD5C5C":{ name:"Indian Red",       cat:"red",    d:3 },
  "#FFA07A":{ name:"Light Salmon",     cat:"red",    d:3 },
  "#E6E6FA":{ name:"Lavender",         cat:"purple", d:3 },
  "#F64A8A":{ name:"French Rose",      cat:"pink",   d:3 },
  "#E75480":{ name:"Dark Pink",        cat:"pink",   d:3 },

  // ── Extra Easy (d:1) ────────────────────────────────────────────
  "#FF8000":{ name:"Deep Orange",       cat:"yellow", d:1 },
  "#00CED1":{ name:"Dark Turquoise",    cat:"blue",   d:1 },
  "#FF69B4":{ name:"Flamingo Pink",     cat:"pink",   d:1 },
  "#6A0DAD":{ name:"Purple Heart",      cat:"purple", d:1 },

  // ── Extra Medium (d:2) ──────────────────────────────────────────
  "#5F9EA0":{ name:"Cadet Blue",        cat:"blue",   d:2 },
  "#008B8B":{ name:"Dark Cyan",         cat:"blue",   d:2 },
  "#B8860B":{ name:"Dark Goldenrod",    cat:"yellow", d:2 },
  "#556B2F":{ name:"Dark Olive Green",  cat:"green",  d:2 },
  "#FF8C00":{ name:"Dark Orange",       cat:"yellow", d:2 },
  "#9932CC":{ name:"Dark Orchid",       cat:"purple", d:2 },
  "#8B008B":{ name:"Dark Magenta",      cat:"purple", d:2 },
  "#BDB76B":{ name:"Dark Khaki",        cat:"yellow", d:2 },
  "#006400":{ name:"Dark Green",        cat:"green",  d:2 },
  "#FF4500":{ name:"Red Orange",        cat:"red",    d:2 },
  "#48D1CC":{ name:"Medium Turquoise",  cat:"blue",   d:2 },
  "#C0392B":{ name:"Pomegranate",       cat:"red",    d:2 },
  "#1ABC9C":{ name:"Turquoise Green",   cat:"green",  d:2 },
  "#2980B9":{ name:"Belize Hole Blue",  cat:"blue",   d:2 },
  "#8E44AD":{ name:"Wisteria Purple",   cat:"purple", d:2 },
  "#F39C12":{ name:"Orange Peel",       cat:"yellow", d:2 },
  "#27AE60":{ name:"Nephritis Green",   cat:"green",  d:2 },

  // ── Extra Hard (d:3) ────────────────────────────────────────────
  "#00827F":{ name:"Teal Blue",         cat:"blue",   d:3 },
  "#B5651D":{ name:"Light Brown",       cat:"brown",  d:3 },
  "#C8A2C8":{ name:"Lilac",             cat:"purple", d:3 },
  "#967BB6":{ name:"Lavender Purple",   cat:"purple", d:3 },
  "#702963":{ name:"Byzantium",         cat:"purple", d:3 },
  "#E0115F":{ name:"Ruby Red",          cat:"red",    d:3 },
  "#CC5500":{ name:"Burnt Orange",      cat:"yellow", d:3 },
  "#00B7EB":{ name:"Cyan Azure",        cat:"blue",   d:3 },
  "#3D9970":{ name:"Olive Green",       cat:"green",  d:3 },
  "#01796F":{ name:"Pine Green",        cat:"green",  d:3 },
  "#36454F":{ name:"Charcoal",          cat:"gray",   d:3 },
  "#899499":{ name:"Cadet Gray",        cat:"gray",   d:3 },
  "#B2BEB5":{ name:"Ash Gray",          cat:"gray",   d:3 },
  "#808000":{ name:"Dark Yellow",       cat:"yellow", d:3 },
  "#FF2400":{ name:"Scarlet",           cat:"red",    d:3 },
  "#CC0000":{ name:"Boston University Red", cat:"red",d:3 },
  "#B5341B":{ name:"International Orange",  cat:"red",d:3 },
  "#704214":{ name:"Sepia Brown",       cat:"brown",  d:3 },
  "#7B3F00":{ name:"Chocolate Brown",   cat:"brown",  d:3 },
  "#4E1609":{ name:"Seal Brown",        cat:"brown",  d:3 },
  "#F08080":{ name:"Light Coral",       cat:"red",    d:3 },
  "#FF6EB4":{ name:"Hot Magenta",       cat:"pink",   d:3 },
  "#C71585":{ name:"Medium Violet Red", cat:"pink",   d:3 },
  "#FF007F":{ name:"Rose",              cat:"pink",   d:3 },
};

// ── Section groupings for the library
const SECTIONS = [
  { id:"red",    label:"Red Colors",              dot:"#EF4444", cats:["red"] },
  { id:"blue",   label:"Blue Colors",             dot:"#3B82F6", cats:["blue"] },
  { id:"green",  label:"Green Colors",            dot:"#22C55E", cats:["green"] },
  { id:"purple", label:"Purple & Violet Colors",  dot:"#8B5CF6", cats:["purple"] },
  { id:"yellow", label:"Yellow & Orange Colors",  dot:"#F59E0B", cats:["yellow"] },
  { id:"pink",   label:"Pink Colors",             dot:"#EC4899", cats:["pink"] },
  { id:"brown",  label:"Brown & Tan Colors",      dot:"#92400E", cats:["brown"] },
  { id:"gray",   label:"White, Gray & Black",     dot:"#6B7280", cats:["gray"] },
];

// ════════════════════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ════════════════════════════════════════════════════════════════════
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return { r, g, b };
}
function rgbToHex(r,g,b) {
  return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
}
function hexToHsl(hex) {
  let {r,g,b} = hexToRgb(hex);
  r/=255; g/=255; b/=255;
  const max=Math.max(r,g,b), min=Math.min(r,g,b);
  let h,s,l=(max+min)/2;
  if(max===min){ h=s=0; }
  else {
    const d=max-min;
    s = l>0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){
      case r: h=((g-b)/d + (g<b?6:0))/6; break;
      case g: h=((b-r)/d + 2)/6; break;
      case b: h=((r-g)/d + 4)/6; break;
    }
  }
  return { h:Math.round(h*360), s:Math.round(s*100), l:Math.round(l*100) };
}
function hslToHex(h,s,l) {
  s/=100; l/=100;
  const k=n=>(n+h/30)%12;
  const a=s*Math.min(l,1-l);
  const f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));
  return '#'+[0,8,4].map(n=>Math.round(255*f(n)).toString(16).padStart(2,'0')).join('').toUpperCase();
}
function hexToCmyk(hex) {
  let {r,g,b} = hexToRgb(hex);
  r/=255; g/=255; b/=255;
  const k = 1-Math.max(r,g,b);
  if(k===1) return {c:0,m:0,y:0,k:100};
  return {
    c:Math.round(((1-r-k)/(1-k))*100),
    m:Math.round(((1-g-k)/(1-k))*100),
    y:Math.round(((1-b-k)/(1-k))*100),
    k:Math.round(k*100)
  };
}
function relativeLuminance(hex) {
  const {r,g,b} = hexToRgb(hex);
  const srgb = [r,g,b].map(c=>{
    c/=255;
    return c<=0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055,2.4);
  });
  return 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2];
}
function contrastRatio(hex1,hex2) {
  const l1=relativeLuminance(hex1), l2=relativeLuminance(hex2);
  const lighter=Math.max(l1,l2), darker=Math.min(l1,l2);
  return (lighter+0.05)/(darker+0.05);
}
function luminancePct(hex) {
  return Math.round(relativeLuminance(hex)*100);
}
function colorTemp(hex) {
  const {r,g,b}=hexToRgb(hex);
  if(r>g && r>b) return 'Warm 🔥';
  if(b>r && b>g) return 'Cool 🧊';
  return 'Neutral ⚡';
}
function isLight(hex) {
  return relativeLuminance(hex)>0.35;
}
function textOnColor(hex) {
  return isLight(hex) ? '#1a1b2e' : '#ffffff';
}
function generateShades(hex, steps=9) {
  const {h,s}=hexToHsl(hex);
  return Array.from({length:steps},(_,i)=>hslToHex(h,s,Math.round(10+i*9)));
}
function parseHexInput(v) {
  v=v.trim().toUpperCase();
  if(!v.startsWith('#')) v='#'+v;
  if(/^#[0-9A-F]{6}$/.test(v)) return v;
  return null;
}
function parseRgbInput(v) {
  const m=v.match(/(\d+)\D+(\d+)\D+(\d+)/);
  if(!m) return null;
  return rgbToHex(+m[1],+m[2],+m[3]);
}
function parseHslInput(v) {
  const m=v.match(/(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)/);
  if(!m) return null;
  return hslToHex(+m[1],+m[2],+m[3]);
}
function generateHarmonies(hex, type) {
  const {h,s,l}=hexToHsl(hex);
  const mod=(v,d=360)=>((v%d)+d)%d;
  switch(type){
    case 'complementary':
      return [hex, hslToHex(mod(h+180),s,l)];
    case 'analogous':
      return [hslToHex(mod(h-30),s,l), hex, hslToHex(mod(h+30),s,l)];
    case 'triadic':
      return [hex, hslToHex(mod(h+120),s,l), hslToHex(mod(h+240),s,l)];
    case 'split':
      return [hex, hslToHex(mod(h+150),s,l), hslToHex(mod(h+210),s,l)];
    case 'tetradic':
      return [hex, hslToHex(mod(h+90),s,l), hslToHex(mod(h+180),s,l), hslToHex(mod(h+270),s,l)];
    case 'monochromatic':
      return [20,35,50,65,80].map(ll=>hslToHex(h,s,ll));
    default:
      return [hex];
  }
}
function randomColor() {
  const keys=Object.keys(COLOR_DB);
  return keys[Math.floor(Math.random()*keys.length)];
}
function lookupName(hex) {
  return (COLOR_DB[hex]||{}).name || `Custom ${hex}`;
}
function toast(msg, type='info', duration=2000) {
  const el=document.createElement('div');
  el.className=`toast ${type}`;
  el.textContent=msg;
  document.getElementById('toast-container').appendChild(el);
  setTimeout(()=>{
    el.style.opacity='0';
    el.style.transform='translateY(10px)';
    el.style.transition='all 0.3s ease';
    setTimeout(()=>el.remove(),300);
  },duration);
}
function copyText(text, label='') {
  navigator.clipboard.writeText(text).then(()=>{
    toast(`✓ ${label||text} copied!`,'success');
  }).catch(()=>{
    const ta=document.createElement('textarea');
    ta.value=text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    toast(`✓ Copied!`,'success');
  });
}
function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ════════════════════════════════════════════════════════════════════
//  THEME
// ════════════════════════════════════════════════════════════════════
function initTheme() {
  const saved=localStorage.getItem('hx-theme')||'light';
  setTheme(saved);
  document.getElementById('themeToggle').addEventListener('click',()=>{
    const cur=document.documentElement.getAttribute('data-theme');
    setTheme(cur==='dark'?'light':'dark');
  });
}
function setTheme(t) {
  document.documentElement.setAttribute('data-theme',t);
  localStorage.setItem('hx-theme',t);
  const btn=document.getElementById('themeToggle');
  if(btn) btn.innerHTML=t==='dark'?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
}

// ════════════════════════════════════════════════════════════════════
//  COLOR PICKER
// ════════════════════════════════════════════════════════════════════
function initColorPicker() {
  const picker=document.getElementById('colorPicker');
  picker.addEventListener('input',e=>updatePickerUI(e.target.value));
  document.querySelectorAll('.copy-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id=btn.dataset.target;
      const el=document.getElementById(id);
      if(el) copyText(el.textContent, id.replace('Code','').toUpperCase());
    });
  });
  updatePickerUI('#7C6FF7');
}
function updatePickerUI(hex) {
  hex=hex.toUpperCase();
  const {r,g,b}=hexToRgb(hex);
  const {h,s,l}=hexToHsl(hex);
  const cmyk=hexToCmyk(hex);
  document.getElementById('hexCode').textContent = hex;
  document.getElementById('rgbCode').textContent = `${r}, ${g}, ${b}`;
  document.getElementById('hslCode').textContent = `${h}°, ${s}%, ${l}%`;
  document.getElementById('colorName').textContent = lookupName(hex);
  document.getElementById('lum-val').textContent   = luminancePct(hex)+'%';
  document.getElementById('warm-val').textContent  = colorTemp(hex);
  // Shades
  const shadesRow=document.getElementById('shadesRow');
  if(shadesRow){
    const shades=generateShades(hex,9);
    shadesRow.innerHTML=shades.map(sh=>`
      <div class="shade-chip" style="background:${sh};" title="${sh}" onclick="copyText('${sh}','${sh}')">
        <span class="shade-label">${sh}</span>
      </div>`).join('');
  }
}

// ════════════════════════════════════════════════════════════════════
//  GRADIENT GENERATOR
// ════════════════════════════════════════════════════════════════════
function initGradient() {
  const els=['gradientColor1','gradientColor2','gradientColor3','gradientDirection','gradientType','gradientAngle']
    .map(id=>document.getElementById(id));
  els.forEach(el=>{ if(el) el.addEventListener('input',updateGradient); el.addEventListener('change',updateGradient); });
  document.getElementById('gradientAngle').addEventListener('input',()=>{
    document.getElementById('angleVal').textContent=document.getElementById('gradientAngle').value;
    updateGradient();
  });
  document.getElementById('copyGradient').addEventListener('click',()=>{
    copyText(document.getElementById('cssOutput').value,'CSS gradient');
  });
  document.getElementById('copyTailwind').addEventListener('click',()=>{
    const c1=document.getElementById('gradientColor1').value;
    const c2=document.getElementById('gradientColor2').value;
    copyText(`bg-gradient-to-r from-[${c1}] to-[${c2}]`,'Tailwind class');
  });
  document.getElementById('randomGradient').addEventListener('click',()=>{
    document.getElementById('gradientColor1').value=`#${Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0')}`;
    document.getElementById('gradientColor2').value=`#${Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0')}`;
    document.getElementById('gradientColor3').value=`#${Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0')}`;
    updateGradient();
  });
  updateGradient();
}
function updateGradient() {
  const c1=document.getElementById('gradientColor1').value;
  const c2=document.getElementById('gradientColor2').value;
  const c3=document.getElementById('gradientColor3').value;
  const dir=document.getElementById('gradientDirection').value;
  const type=document.getElementById('gradientType').value;
  const angle=document.getElementById('gradientAngle').value;
  let gradient, css;
  if(dir==='radial') {
    gradient=`radial-gradient(circle, ${c1}, ${c2}, ${c3})`;
    css=`background: ${gradient};`;
  } else if(type==='mesh') {
    css=`background: ${c1};\nbackground: -webkit-linear-gradient(${angle}deg, ${c1}, ${c2}, ${c3});\nbackground: linear-gradient(${angle}deg, ${c1}, ${c2}, ${c3});`;
    gradient=`linear-gradient(${angle}deg, ${c1}, ${c2}, ${c3})`;
  } else {
    const d=dir==='135deg'?`${angle}deg`:dir;
    gradient=`linear-gradient(${d}, ${c1}, ${c2}, ${c3})`;
    css=`background: ${gradient};`;
  }
  const preview=document.getElementById('gradientPreview');
  if(preview) preview.style.background=gradient;
  const out=document.getElementById('cssOutput');
  if(out) out.value=css;
}

// ════════════════════════════════════════════════════════════════════
//  TABS (Advanced Tools)
// ════════════════════════════════════════════════════════════════════
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const tabId=btn.dataset.tab;
      const card=btn.closest('.card');
      card.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      card.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const panel=card.querySelector(`#tab-${tabId}`);
      if(panel) panel.classList.add('active');
    });
  });
}

// ════════════════════════════════════════════════════════════════════
//  COLOR CONVERTER
// ════════════════════════════════════════════════════════════════════
function initConverter() {
  document.getElementById('convertColors').addEventListener('click',()=>{
    const hexInput=document.getElementById('conv-hex').value.trim();
    const rgbInput=document.getElementById('conv-rgb').value.trim();
    const hslInput=document.getElementById('conv-hsl').value.trim();
    let resolved=null;
    if(hexInput) resolved=parseHexInput(hexInput);
    else if(rgbInput) resolved=parseRgbInput(rgbInput);
    else if(hslInput) resolved=parseHslInput(hslInput);
    if(!resolved){ toast('Could not parse input','error'); return; }
    const {r,g,b}=hexToRgb(resolved);
    const {h,s,l}=hexToHsl(resolved);
    const cmyk=hexToCmyk(resolved);
    document.getElementById('conv-hex').value=resolved;
    document.getElementById('conv-rgb').value=`${r}, ${g}, ${b}`;
    document.getElementById('conv-hsl').value=`${h}, ${s}%, ${l}%`;
    document.getElementById('conv-cmyk').textContent=`${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%`;
    toast('Converted!','success');
  });
}

// ════════════════════════════════════════════════════════════════════
//  CONTRAST CHECKER
// ════════════════════════════════════════════════════════════════════
function initContrast() {
  const fg=document.getElementById('contrastFg');
  const bg=document.getElementById('contrastBg');
  const update=()=>{
    const fHex=fg.value.toUpperCase();
    const bHex=bg.value.toUpperCase();
    document.getElementById('contrastFgHex').textContent=fHex;
    document.getElementById('contrastBgHex').textContent=bHex;
    const ratio=contrastRatio(fHex,bHex);
    const preview=document.getElementById('contrastPreview');
    if(preview){ preview.style.background=bHex; preview.style.color=fHex; }
    document.getElementById('contrastRatio').textContent=`${ratio.toFixed(2)}:1`;
    const badges=document.getElementById('contrastBadges');
    if(badges){
      const aa=ratio>=4.5, aaa=ratio>=7, aaLg=ratio>=3;
      badges.innerHTML=`
        <span class="wcag-badge ${aa?'pass':'fail'}">AA ${aa?'✓':'✗'}</span>
        <span class="wcag-badge ${aaa?'pass':'fail'}">AAA ${aaa?'✓':'✗'}</span>
        <span class="wcag-badge ${aaLg?'pass':'fail'}">AA Large ${aaLg?'✓':'✗'}</span>
      `;
    }
  };
  fg.addEventListener('input',update);
  bg.addEventListener('input',update);
  update();
}

// ════════════════════════════════════════════════════════════════════
//  HARMONY GENERATOR (tool card)
// ════════════════════════════════════════════════════════════════════
function initHarmonyTool() {
  const base=document.getElementById('harmonyBase');
  const type=document.getElementById('harmonyType');
  const update=()=>{
    const colors=generateHarmonies(base.value.toUpperCase(),type.value);
    const res=document.getElementById('harmonyResult');
    if(!res) return;
    res.innerHTML=colors.map(c=>`
      <div title="${c}" onclick="copyText('${c}','${c}')" style="
        width:40px;height:40px;border-radius:8px;background:${c};
        cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.18);
        transition:transform 0.2s ease;flex-shrink:0;
        border:2px solid var(--glass-border);
      " onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform=''"
        ></div>
    `).join('');
  };
  base.addEventListener('input',update);
  type.addEventListener('change',update);
  update();
}

// ════════════════════════════════════════════════════════════════════
//  FAVORITES / PALETTE
// ════════════════════════════════════════════════════════════════════
function getFavorites() { return JSON.parse(localStorage.getItem('hx-favs')||'[]'); }
function saveFavorites(arr) { localStorage.setItem('hx-favs',JSON.stringify(arr)); }
function isFavorite(hex) { return getFavorites().some(f=>f.hex===hex); }
function toggleFavorite(hex, name) {
  let favs=getFavorites();
  const idx=favs.findIndex(f=>f.hex===hex);
  if(idx===-1){ favs.push({hex,name}); toast(`Added ${name} to palette`,'success'); }
  else { favs.splice(idx,1); toast(`Removed ${name}`,'info'); }
  saveFavorites(favs);
  renderFavorites();
  updateFavButtons();
}
function renderFavorites() {
  const list=document.getElementById('favorites-list');
  if(!list) return;
  const favs=getFavorites();
  if(!favs.length){
    list.innerHTML=`<span class="empty-msg"><i class="fas fa-star"></i>Click ★ on any color card to save it here</span>`;
    return;
  }
  list.innerHTML=favs.map(f=>`
    <div class="fav-swatch" style="background:${f.hex};" title="${f.name}" onclick="copyText('${f.hex}','${f.name}')">
      <span class="swatch-tip">${f.name}&nbsp;${f.hex}</span>
      <button class="swatch-del" onclick="event.stopPropagation();toggleFavorite('${f.hex}','${f.name}');">×</button>
    </div>
  `).join('');
}
function updateFavButtons() {
  document.querySelectorAll('.cc-btn[data-fav]').forEach(btn=>{
    const hex=btn.dataset.fav;
    btn.classList.toggle('active',isFavorite(hex));
    btn.textContent=isFavorite(hex)?'★ Saved':'☆ Fav';
  });
}
function initPalette() {
  renderFavorites();
  document.getElementById('clearPalette').addEventListener('click',()=>{
    if(confirm('Clear all favorites?')){ saveFavorites([]); renderFavorites(); updateFavButtons(); }
  });
  document.getElementById('exportPalette').addEventListener('click',()=>{
    const favs=getFavorites();
    if(!favs.length){ toast('No colors in palette','error'); return; }
    const css=`:root {\n${favs.map(f=>`  --color-${f.name.toLowerCase().replace(/\s+/g,'-')}: ${f.hex};`).join('\n')}\n}`;
    copyText(css,'CSS variables');
  });
}

// ════════════════════════════════════════════════════════════════════
//  COLOR LIBRARY BUILDER
// ════════════════════════════════════════════════════════════════════
function buildLibrary(sortBy='default', filterCat='all') {
  const lib=document.getElementById('colorLibrary');
  if(!lib) return;
  lib.innerHTML='';

  const sections = filterCat==='all' ? SECTIONS : SECTIONS.filter(s=>s.id===filterCat);

  sections.forEach(sec=>{
    let entries=Object.entries(COLOR_DB).filter(([,v])=>sec.cats.includes(v.cat));
    if(sortBy==='name')       entries.sort((a,b)=>a[1].name.localeCompare(b[1].name));
    else if(sortBy==='hue')   entries.sort((a,b)=>hexToHsl(a[0]).h - hexToHsl(b[0]).h);
    else if(sortBy==='brightness') entries.sort((a,b)=>hexToHsl(a[0]).l - hexToHsl(b[0]).l);
    if(!entries.length) return;

    const section=document.createElement('div');
    section.className='color-section';
    section.innerHTML=`
      <h2 class="color-section-title">
        <span class="section-dot" style="background:${sec.dot};"></span>
        ${sec.label}
        <span class="section-badge">${entries.length} colors</span>
      </h2>
      <div class="color-grid" id="grid-${sec.id}"></div>
    `;
    lib.appendChild(section);

    const grid=section.querySelector(`#grid-${sec.id}`);
    entries.forEach(([hex,data])=>{
      const card=createColorCard(hex, data);
      grid.appendChild(card);
    });
  });
}
function createColorCard(hex, data) {
  const card=document.createElement('div');
  card.className='color-card';
  card.dataset.hex=hex;
  card.dataset.name=data.name;
  card.dataset.cat=data.cat;
  const txtCol=textOnColor(hex);
  const fav=isFavorite(hex);
  card.innerHTML=`
    <div class="color-display" style="background:${hex};">
      <span class="color-display-inner" style="color:${txtCol};">${hex}</span>
    </div>
    <div class="color-card-body">
      <div class="color-name">${data.name}</div>
      <div class="color-hex">${hex}</div>
    </div>
    <div class="color-card-actions">
      <button class="cc-btn" data-fav="${hex}" onclick="toggleFavorite('${hex}','${data.name}')" style="border-color:var(--warning);">${fav?'★ Saved':'☆ Fav'}</button>
      <button class="cc-btn" onclick="copyText('${hex}','${data.name}')">⎘ Copy</button>
      <button class="cc-btn harm-toggle-btn" data-hx="${hex}">🎨 Harmony</button>
    </div>
    <div class="harmonies-panel" id="harm-${hex.replace('#','')}"></div>
  `;
  // Harmony toggle
  card.querySelector('.harm-toggle-btn').addEventListener('click',()=>{
    const panel=card.querySelector('.harmonies-panel');
    if(panel.classList.contains('open')){ panel.classList.remove('open'); return; }
    panel.innerHTML=renderHarmonyPanel(hex);
    panel.classList.add('open');
  });
  return card;
}
function renderHarmonyPanel(hex) {
  const types={
    'Comp':generateHarmonies(hex,'complementary'),
    'Analog':generateHarmonies(hex,'analogous'),
    'Triadic':generateHarmonies(hex,'triadic'),
  };
  return Object.entries(types).map(([label,colors])=>`
    <div class="harmony-row">
      <span class="harmony-label-small">${label}</span>
      <div class="harmony-swatches">
        ${colors.map(c=>`<div class="h-swatch" style="background:${c};" title="${c}" onclick="copyText('${c}','${c}')"></div>`).join('')}
      </div>
    </div>
  `).join('');
}
function initLibrary() {
  buildLibrary();
  document.getElementById('sortColors').addEventListener('change',e=>{
    buildLibrary(e.target.value,document.getElementById('filterCategory').value);
  });
  document.getElementById('filterCategory').addEventListener('change',e=>{
    buildLibrary(document.getElementById('sortColors').value,e.target.value);
  });
}

// ════════════════════════════════════════════════════════════════════
//  SEARCH
// ════════════════════════════════════════════════════════════════════
function initSearch() {
  const input=document.getElementById('colorSearch');
  const clear=document.getElementById('clearSearch');
  input.addEventListener('input',()=>{
    const term=input.value.toLowerCase().trim();
    clear.classList.toggle('visible',!!term);
    document.querySelectorAll('.color-card').forEach(card=>{
      const n=card.dataset.name.toLowerCase();
      const h=card.dataset.hex.toLowerCase();
      card.style.display=(n.includes(term)||h.includes(term))?'':'none';
    });
    // show/hide sections with no visible cards
    document.querySelectorAll('.color-section').forEach(sec=>{
      const visible=[...sec.querySelectorAll('.color-card')].some(c=>c.style.display!=='none');
      sec.style.display=visible?'':'none';
    });
  });
  clear.addEventListener('click',()=>{
    input.value=''; clear.classList.remove('visible');
    document.querySelectorAll('.color-card').forEach(c=>c.style.display='');
    document.querySelectorAll('.color-section').forEach(s=>s.style.display='');
  });
}

// ════════════════════════════════════════════════════════════════════
//  QUIZ ENGINE
// ════════════════════════════════════════════════════════════════════
const Quiz = (() => {
  // State
  let state = {
    running: false, paused: false,
    mode: 'mcq',        // mcq | text | hex | reverse
    difficulty: 1,      // 1=easy,2=med,3=hard, 'all'=all
    score: 0, streak: 0, bestStreak: 0,
    lives: 3, maxLives: 3,
    total: 0, correct: 0,
    timeLeft: 30, maxTime: 30,
    timer: null,
    history: [],        // recent hexes to avoid repeats
    currentHex: '',
    currentName: '',
    answered: false,
  };

  const el = id => document.getElementById(id);
  const TOTAL_TIME = { 1:30, 2:25, 3:18, all:20 };

  function getPool() {
    const d=state.difficulty;
    return Object.entries(COLOR_DB).filter(([,v])=>
      d==='all' ? true : v.d <= +d
    );
  }

  function pickColor() {
    let pool=getPool().filter(([h])=>!state.history.includes(h));
    if(!pool.length){ state.history=[]; pool=getPool(); }
    const entry=pool[Math.floor(Math.random()*pool.length)];
    state.currentHex=entry[0];
    state.currentName=entry[1].name;
    state.history.push(state.currentHex);
    if(state.history.length>12) state.history.shift();
  }

  function renderQuestion() {
    state.answered=false;
    const display=el('quizColor');
    if(display){
      display.style.background=state.currentHex;
      display.querySelector('.color-hint-text').textContent=
        state.mode==='text'||state.mode==='hex' ? 'Type your answer ↓' : '';
      display.classList.add('quiz-color-pulse');
      setTimeout(()=>display.classList.remove('quiz-color-pulse'),500);
    }

    if(state.mode==='mcq')     renderMCQ();
    else if(state.mode==='text') setupTextMode();
    else if(state.mode==='hex')  setupHexMode();
    else if(state.mode==='reverse') renderReverse();

    el('quizResult').textContent='';
    el('quizResult').className='';
  }

  function renderMCQ() {
    const pool=getPool();
    let wrong=shuffle(pool.filter(([h])=>h!==state.currentHex)).slice(0,3).map(([,v])=>v.name);
    const options=shuffle([state.currentName,...wrong]);
    const grid=el('mcqGrid');
    if(!grid) return;
    grid.innerHTML=options.map((name,i)=>`
      <button class="mcq-option" data-answer="${name}" onclick="Quiz.selectMCQ(this)">
        <span class="mcq-key">${i+1}</span>${name}
      </button>
    `).join('');
  }

  function renderReverse() {
    // Show the name, pick 4 color swatches (1 correct + 3 wrong)
    el('reverseColorName').textContent=state.currentName;
    const pool=getPool();
    let wrong=shuffle(pool.filter(([h])=>h!==state.currentHex)).slice(0,3).map(([h])=>h);
    const options=shuffle([state.currentHex,...wrong]);
    const grid=el('reverseGrid');
    if(!grid) return;
    grid.innerHTML=options.map((hex,i)=>`
      <button class="mcq-option" data-answer="${hex}" onclick="Quiz.selectReverse(this)" style="align-items:center;justify-content:center;gap:0;">
        <div style="width:100%;height:48px;border-radius:8px;background:${hex};margin-bottom:4px;"></div>
        <span style="font-size:0.75rem;font-family:'JetBrains Mono',monospace;color:var(--text3);">${hex}</span>
      </button>
    `).join('');
  }

  function setupTextMode() {
    const inp=el('userGuess');
    if(inp){ inp.value=''; inp.focus(); }
  }
  function setupHexMode() {
    const inp=el('hexGuess');
    if(inp){ inp.value=''; inp.focus(); }
  }

  function startTimer() {
    clearInterval(state.timer);
    const d=state.difficulty;
    state.maxTime = TOTAL_TIME[d] || 25;
    state.timeLeft = state.maxTime;
    updateTimerUI();
    state.timer=setInterval(()=>{
      if(state.paused) return;
      state.timeLeft--;
      updateTimerUI();
      if(state.timeLeft<=0){
        clearInterval(state.timer);
        handleTimeout();
      }
    },1000);
  }
  function updateTimerUI() {
    const t=el('quizTimer');
    if(t) t.textContent=`${state.timeLeft}s`;
    const bar=el('timerBar');
    if(bar){
      const pct=(state.timeLeft/state.maxTime)*100;
      bar.style.width=pct+'%';
      bar.classList.toggle('urgent',state.timeLeft<=8);
    }
  }
  function handleTimeout() {
    if(state.answered) return;
    state.answered=true;
    showResult(false, `⏰ Time's up! It was ${state.currentName}.`);
  }

  function handleCorrect() {
    state.score++; state.streak++; state.correct++; state.total++;
    if(state.streak>state.bestStreak) state.bestStreak=state.streak;
    showResult(true, state.streak>2?`🔥 Correct! ${state.streak}x Streak!`:'✓ Correct!');
  }
  function handleWrong(correct) {
    state.streak=0; state.total++;
    state.lives--;
    updateLivesUI();
    showResult(false,`✗ Wrong! It was ${correct||state.currentName}.`);
    if(state.lives<=0) { setTimeout(()=>gameOver(false),1500); return; }
  }
  function showResult(ok, msg) {
    clearInterval(state.timer);
    const res=el('quizResult');
    if(res){ res.textContent=msg; res.className=ok?'correct':'wrong'; }
    updateStatsUI();
    // Auto-advance
    setTimeout(()=>{ if(state.running&&!state.paused&&state.lives>0) nextRound(); },1500);
  }

  function nextRound() {
    pickColor(); renderQuestion(); startTimer();
  }

  function updateStatsUI() {
    el('quizScore').textContent=state.score;
    el('streakCount').textContent=state.streak;
    const diffLabels={1:'⭐ Easy',2:'⭐⭐ Medium',3:'⭐⭐⭐ Hard',all:'⭐ All'};
    el('difficultyDisplay').textContent=diffLabels[state.difficulty]||'Easy';
    updateLivesUI();
    // Sidebar stats
    const acc=state.total?Math.round(state.correct/state.total*100)+'%':'—';
    el('stat-total').textContent=state.total;
    el('stat-correct').textContent=state.correct;
    el('stat-accuracy').textContent=acc;
    el('stat-best').textContent=state.bestStreak;
  }
  function updateLivesUI() {
    const display=el('livesDisplay');
    if(!display) return;
    display.innerHTML=Array.from({length:state.maxLives},(_,i)=>
      `<span class="life-heart ${i>=state.lives?'lost':''}">❤️</span>`
    ).join('');
  }

  function gameOver(hasLivesLeft=true) {
    clearInterval(state.timer);
    state.running=false;
    saveScore();
    renderLeaderboard();
    setButtonState('stopped');
    const res=el('quizResult');
    if(res){
      res.textContent=`Quiz Over! Final score: ${state.score}/${state.total}`;
      res.className=state.score>0?'correct':'wrong';
    }
    toast(`Quiz over! Score: ${state.score}`, state.score>0?'success':'info', 3000);
  }

  function start() {
    // Reset state
    state.score=0; state.streak=0; state.lives=state.maxLives;
    state.total=0; state.correct=0; state.history=[];
    state.running=true; state.paused=false; state.answered=false;
    updateStatsUI();
    setButtonState('running');
    pickColor(); renderQuestion(); startTimer();
    toast('Quiz started! 🎯','info');
  }
  function pause() {
    if(!state.running) return;
    state.paused=!state.paused;
    const btn=el('pauseQuizBtn');
    if(btn) btn.innerHTML=state.paused?'<i class="fas fa-play"></i> Resume':'<i class="fas fa-pause"></i> Pause';
    if(!state.paused){ nextRound(); }
    toast(state.paused?'Quiz paused ⏸':'Quiz resumed ▶','info');
  }
  function stop() {
    clearInterval(state.timer);
    state.running=false; state.paused=false;
    saveScore();
    renderLeaderboard();
    setButtonState('stopped');
    const res=el('quizResult');
    if(res){ res.textContent=`Stopped. Score: ${state.score}/${state.total}`; res.className=''; }
    toast(`Stopped. Score: ${state.score}`,'info');
  }
  function setButtonState(s) {
    el('startQuizBtn').style.display  = s==='stopped'?'':'none';
    el('pauseQuizBtn').style.display  = s==='running' ?'':'none';
    el('stopQuizBtn').style.display   = s==='running' ?'':'none';
    el('newQuizBtn').style.display    = s==='stopped' ?'':'none';
  }

  function saveScore() {
    if(!state.total) return;
    const scores=JSON.parse(localStorage.getItem('hx-scores')||'[]');
    scores.unshift({
      score:state.score, total:state.total,
      mode:state.mode, diff:state.difficulty,
      accuracy:state.total?Math.round(state.correct/state.total*100):0,
      date:new Date().toLocaleDateString()
    });
    scores.splice(10); // keep top 10
    localStorage.setItem('hx-scores',JSON.stringify(scores));
  }
  function renderLeaderboard() {
    const body=el('leaderboardBody');
    if(!body) return;
    const scores=JSON.parse(localStorage.getItem('hx-scores')||'[]');
    if(!scores.length){
      body.innerHTML='<tr><td colspan="4" style="text-align:center;color:var(--text3);font-style:italic;font-size:0.82rem;">No scores yet</td></tr>';
      return;
    }
    body.innerHTML=scores.slice(0,8).map((s,i)=>`
      <tr ${i===0?'class="rank-1"':''}>
        <td><span class="rank-badge ${i===0?'r1':i===1?'r2':i===2?'r3':''}">${i+1}</span></td>
        <td>${s.score}/${s.total}</td>
        <td>${s.mode}</td>
        <td>${s.date}</td>
      </tr>
    `).join('');
  }

  // MCQ answer handler
  function selectMCQ(btn) {
    if(state.answered||!state.running||state.paused) return;
    state.answered=true;
    clearInterval(state.timer);
    const answer=btn.dataset.answer;
    const allBtns=document.querySelectorAll('.mcq-option');
    allBtns.forEach(b=>{ b.disabled=true; if(b.dataset.answer===state.currentName) b.classList.add('correct'); });
    if(answer===state.currentName){ btn.classList.add('correct'); handleCorrect(); }
    else { btn.classList.add('wrong'); handleWrong(); }
  }
  function selectReverse(btn) {
    if(state.answered||!state.running||state.paused) return;
    state.answered=true;
    clearInterval(state.timer);
    const answer=btn.dataset.answer;
    const allBtns=document.querySelectorAll('#reverseGrid .mcq-option');
    allBtns.forEach(b=>{ b.disabled=true; if(b.dataset.answer===state.currentHex) b.classList.add('correct'); });
    if(answer===state.currentHex){ btn.classList.add('correct'); handleCorrect(); }
    else { btn.classList.add('wrong'); handleWrong(state.currentHex); }
  }

  function init() {
    // Mode buttons
    document.querySelectorAll('.quiz-mode-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        document.querySelectorAll('.quiz-mode-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        state.mode=btn.dataset.mode;
        // Show/hide mode panels
        ['mcq-mode','text-mode','hex-mode','reverse-mode'].forEach(id=>{
          const el2=el(id);
          if(el2) el2.style.display='none';
        });
        const activePanel=el(`${state.mode}-mode`);
        if(activePanel) activePanel.style.display='';
      });
    });

    // Difficulty
    el('difficultySelect').addEventListener('change',e=>{
      state.difficulty= e.target.value==='all'?'all':+e.target.value;
      state.maxTime=TOTAL_TIME[state.difficulty]||25;
    });

    // Buttons
    el('startQuizBtn').addEventListener('click', start);
    el('pauseQuizBtn').addEventListener('click', pause);
    el('stopQuizBtn').addEventListener('click', stop);
    el('newQuizBtn').addEventListener('click', start);

    // Submit text
    el('submitGuess').addEventListener('click',()=>{
      if(state.answered||!state.running||state.paused) return;
      state.answered=true;
      const g=el('userGuess').value.trim().toLowerCase();
      if(g===state.currentName.toLowerCase()) handleCorrect();
      else handleWrong();
    });
    el('userGuess').addEventListener('keydown',e=>{ if(e.key==='Enter') el('submitGuess').click(); });

    // Submit hex
    el('submitHex').addEventListener('click',()=>{
      if(state.answered||!state.running||state.paused) return;
      state.answered=true;
      const g=parseHexInput(el('hexGuess').value)||'';
      const ratio=g? contrastRatio(g, state.currentHex):0;
      // Accept within ~15% brightness tolerance by comparing contrast vs self
      const exact= g.toUpperCase()===state.currentHex.toUpperCase();
      const close = g && contrastRatio(g,state.currentHex)<1.08;
      if(exact||close) handleCorrect();
      else { el('quizResult').textContent=`Close! It was ${state.currentHex}`; handleWrong(state.currentHex); }
    });
    el('hexGuess').addEventListener('keydown',e=>{ if(e.key==='Enter') el('submitHex').click(); });

    // Keyboard shortcuts for MCQ (1-4)
    document.addEventListener('keydown',e=>{
      if(!state.running||state.paused||state.answered) return;
      if(state.mode==='mcq'){
        const n=parseInt(e.key);
        if(n>=1&&n<=4){
          const opts=document.querySelectorAll('.mcq-option');
          if(opts[n-1]) opts[n-1].click();
        }
      }
      if(state.mode==='reverse'){
        const n=parseInt(e.key);
        if(n>=1&&n<=4){
          const opts=document.querySelectorAll('#reverseGrid .mcq-option');
          if(opts[n-1]) opts[n-1].click();
        }
      }
    });

    // Clear scores
    el('clearScores').addEventListener('click',()=>{
      if(confirm('Clear leaderboard?')){ localStorage.removeItem('hx-scores'); renderLeaderboard(); }
    });
    el('clearStats').addEventListener('click',()=>{
      state.total=0; state.correct=0; state.bestStreak=0;
      updateStatsUI();
    });

    renderLeaderboard();
    setButtonState('stopped');
    updateStatsUI();
  }

  return { init, selectMCQ, selectReverse };
})();

// ════════════════════════════════════════════════════════════════════
//  SCROLL TO TOP
// ════════════════════════════════════════════════════════════════════
function initScrollTop() {
  const btn=document.getElementById('scrollTop');
  if(!btn) return;
  window.addEventListener('scroll',()=>{
    btn.classList.toggle('visible',window.scrollY>400);
  });
  btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
}

// ════════════════════════════════════════════════════════════════════
//  RESPONSIVE QUIZ LAYOUT
// ════════════════════════════════════════════════════════════════════
function initResponsiveQuiz() {
  const layout=document.getElementById('quiz-layout');
  if(!layout) return;
  const mq=window.matchMedia('(max-width:768px)');
  const adjust=()=>{
    layout.style.gridTemplateColumns=mq.matches?'1fr':'1fr 320px';
  };
  mq.addEventListener('change',adjust);
  adjust();
}

// ════════════════════════════════════════════════════════════════════
//  INIT
// ════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded',()=>{
  initTheme();
  initColorPicker();
  initGradient();
  initTabs();
  initConverter();
  initContrast();
  initHarmonyTool();
  initPalette();
  initLibrary();
  initSearch();
  Quiz.init();
  initScrollTop();
  initResponsiveQuiz();

  // Make toggleFavorite available globally (used in dynamic HTML)
  window.toggleFavorite=toggleFavorite;
  window.copyText=copyText;
  window.Quiz=Quiz;
});