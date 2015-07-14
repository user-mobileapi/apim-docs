/**
 * Created by chkim on 7/9/2015.
 */
var markx = require('markx');
var fs = require('fs');
var path = require('path');
var ncp = require('ncp').ncp;



// write the result to file inside html file
function convertMarkdownToHtml (layoutFile,markdownFilePath,htmlFilePath){

    var fileName = path.basename(markdownFilePath,'.md');
    var jsonData= {
        pageTitle: fileName
    };

    markx({
        input: markdownFilePath, //can be either a filepath or a source string
        template: layoutFile, //can either be filepath or source string
        highlight: true, //parse code snippets for syntax highlighters, default: true
        data: jsonData //data that gets passed into template
    }, function(err, results) {

        if(err) throw err;
        if(results) {

            fs.writeFileSync(htmlFilePath +'/'+ fileName + '.html',results);
        }

    });
}

function writeIndexMarkDown(indexDirectory,fileDirectory){

    //var indexDirectory = "../markdown/index.md";
    // the index markodown should be like this [remote door get](remote-door-get.html)

    var writeStream = fs.createWriteStream(indexDirectory, {flags: 'a'});
    var link = path.basename(fileDirectory, '.md') + '.html';
    var text = '* [' + createDisplayedText(link) + '](./html/' + link + ")</br>\n";
    writeStream.write(text);
}

// REMOTE ENGINE: GET/POST/DELETE/UPDATE
function createDisplayedText(fileName){
    var textDisplayArray = fileName.split('.')[0].split('-');
    var displayedString ="";
    for(index=0 ;index<textDisplayArray.length-2;index ++){
        displayedString +=" " +textDisplayArray[index] ;
    }
    if(displayedString != null) return  displayedString + " [" + textDisplayArray[textDisplayArray.length-2].toUpperCase() + "]";
}

// read all markdown files from markDownDirectory and convert them to html files
function convertMarkdownsToHtmls (indexLayoutFile, contentLayoutFile, markDownDir,htmlDir,indexHtmlDir){

    var files = fs.readdirSync(markDownDir);
    // delete markdown/index.md  if exist
    var indexFilePath  = markDownDir+'/index.md';

    if(fs.existsSync(indexFilePath))
        fs.unlinkSync(indexFilePath);
    // convert all md file into html and save it into html folder except index.md which we are going to convert lastly.
    for(var i in files) {

        if(files[i]  != "index.md" ) {

            convertMarkdownToHtml(contentLayoutFile, markDownDir + '/' + files[i],htmlDir);
            // create index.md and convert it lastly
            writeIndexMarkDown(indexFilePath, markDownDir + '/' + files[i]);
        }
    }
    // end convert
    // lastly convert index.md to html/index.html
    convertMarkdownToHtml(indexLayoutFile, indexFilePath,indexHtmlDir);
    //end convert index.md
}

function copyDocsToApiDirectory(source,destination){
    ncp.limit = 16;

    ncp(source, destination, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('done!');
    });
}
module.exports ={
    convertMarkdownsToHtmls:convertMarkdownsToHtmls,
    copyDocsToApiDirectory: copyDocsToApiDirectory
}
