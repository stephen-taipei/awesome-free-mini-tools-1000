var n=(e,r)=>{switch(r){case"text":return Array.from(e).reverse().join("");case"words":return e.split(`
`).map(s=>s.split(/\s+/).reverse().join(" ")).join(`
`);case"lines":return e.split(`
`).reverse().join(`
`);default:return e}};export{n as reverseText};
