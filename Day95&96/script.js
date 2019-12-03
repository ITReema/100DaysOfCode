let url = new URL('https://example.com'); 
let params = new URLSearchParams(url.search.slice(1)); 
 
params.set('par', 5); 
console.log(params.toString()); 