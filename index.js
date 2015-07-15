/**
 * Created by chkim on 7/9/2015.
 */

var lib = require('./api/docs/lib/converter.js');

//var indexLayoutFile = 'api/docs/lib/indexLayout.html';
//var contentLayoutFile = 'api/docs/lib/layout.html';
//var  markdownDir= 'api/docs/md';
//var  htmlDir= 'api/docs/html';
//var indexHtmlDir='api/docs';

//InitDocs('destination');

function InitDocs(destination) {

    // copy all api folders to api folder
    lib.copyDocsToApiDirectory(destination);

    // generate html file
   // lib.convertMarkdownsToHtmls();
}

// copy files and folders in docs to the current working directory /api

module.exports ={
    InitDocs: InitDocs
}