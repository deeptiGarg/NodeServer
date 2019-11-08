const path = require('path');

// basename - gets base file
console.log(path.basename(__filename));

// Directory name

console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

//create path pbject
console.log(path.parse(__filename));

console.log(path.parse(__filename).dir);

// Concat paths - join
console.log(path.join(__dirname,'test','abc.html'));
