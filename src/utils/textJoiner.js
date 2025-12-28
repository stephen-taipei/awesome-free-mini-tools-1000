var s=(e,i,r=!1)=>{if(!e)return"";let n=e.split(`
`);return r&&(n=n.map(t=>`"${t.replace(/"/g,'\\"')}"`)),n.join(i)};export{s as joinText};
