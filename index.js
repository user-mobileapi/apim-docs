
var lib = require('./lib/converter.js');

//InitDocs('destination');
function InitDocs(destination) {
    lib.copyDocsToApiDirectory(destination);
}

module.exports ={
    InitDocs: InitDocs
}