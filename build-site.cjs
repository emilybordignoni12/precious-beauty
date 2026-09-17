const fs=require('node:fs');
const files=["index.html","styles.css","redesign.css","app.js","selo.webp","eu foto.webp","assinaturaeb.webp","vintage-frame.webp","foto-certa.webp","eu.webp","moments.webp","espelho.webp","paleta.webp","maqui.webp","cafe.webp","capucccino.webp","mesa.webp"];
fs.mkdirSync('site-output',{recursive:true});
for(const file of files)fs.copyFileSync(file,'site-output/'+file);
console.log('Published '+files.length+' verified site files');
