var n=(i,t)=>{let e=i;return t.trimLines&&(e=e.split(`
`).map(r=>r.trim()).join(`
`)),t.removeEmptyLines&&(e=e.split(`
`).filter(r=>r.trim()!=="").join(`
`)),t.removeExtraSpaces&&(e=e.replace(/[ \t]+/g," ")),t.trimText&&(e=e.trim()),e};export{n as cleanWhitespace};
