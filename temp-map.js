const fs=require('fs');
const s=fs.readFileSync('public/images/africa-countries.svg','utf8');
const paths=[...s.matchAll(/<path d="([^"]+)" fill="([^"]+)"\s*\/>/g)];
let labels='';
for(let i=0;i<paths.length;i++){
 const d=paths[i][1]; const pts=[...d.matchAll(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)].map(m=>[+m[1],+m[2]]);
 const x=pts.reduce((a,p)=>a+p[0],0)/pts.length, y=pts.reduce((a,p)=>a+p[1],0)/pts.length;
 labels+=`<text x="${x}" y="${y}" text-anchor="middle" font-size="9" font-weight="bold" fill="white" stroke="black" stroke-width=".4" paint-order="stroke">${i}</text>`;
}
fs.writeFileSync('temp-map.svg',s.replace('</svg>',labels+'</svg>'));
require('sharp')('temp-map.svg').png().toFile('temp-map.png').then(x=>console.log('written',x.width,x.height)).catch(console.error);
