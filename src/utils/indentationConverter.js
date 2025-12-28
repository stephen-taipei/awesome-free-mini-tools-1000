var o=(s,a,e)=>{if(!s)return"";let p=s.split(`
`);if(a==="toSpaces"){let n=" ".repeat(e);return p.map(t=>t.replace(/^(\t+)/g,r=>n.repeat(r.length))).join(`
`)}else{let n=new RegExp(`^(\\s{${e}})+`,"g");return p.map(t=>t.replace(n,r=>"	".repeat(r.length/e))).join(`
`)}};export{o as convertIndentation};
