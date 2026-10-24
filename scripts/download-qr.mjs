import fs from 'fs';

const urlSvg = 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&format=svg&data=' + encodeURIComponent('https://blinq.me/Gx7liy42p72L?bs=db');
const resSvg = await fetch(urlSvg);
const svg = await resSvg.text();
fs.writeFileSync('public/assets/stronghold-contact-qr.svg', svg);

const urlPng = 'https://api.qrserver.com/v1/create-qr-code/?size=600x600&format=png&data=' + encodeURIComponent('https://blinq.me/Gx7liy42p72L?bs=db');
const resPng = await fetch(urlPng);
const pngBuffer = Buffer.from(await resPng.arrayBuffer());
fs.writeFileSync('public/assets/stronghold-contact-qr.png', pngBuffer);
console.log('Saved QR SVG and PNG successfully');
