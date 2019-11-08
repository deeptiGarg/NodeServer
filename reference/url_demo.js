const url = require('url');

const myUrl = new url.URL('http://mywebsite.com/hello.html?id=10&name=deepti');

// Serialized url
console.log(myUrl.href);

// host domain
console.log(myUrl.host);

// get querystring objects
console.log(myUrl.search);

console.log(myUrl.searchParams);

// Loop through each param
myUrl.searchParams.forEach((val, na)=>{console.log(`${na}`)});



