var s=(t,e,n=!0,l=!0)=>{if(!t)return[];if(e==="")return t.split("");let i=t.split(e);return l&&(i=i.map(r=>r.trim())),n&&(i=i.filter(r=>r!=="")),i};export{s as splitText};
