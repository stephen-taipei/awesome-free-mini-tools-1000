var c=(r,e)=>{let n=r.replace(/\r\n/g,`
`).replace(/\r/g,`
`);switch(e){case"windows":return n.replace(/\n/g,`\r
`);case"unix":return n;case"mac":return n.replace(/\n/g,"\r");default:return r}};export{c as convertNewlines};
