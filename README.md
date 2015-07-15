# apim-docs

**This module will generate html files from markdown files inside md directory**;User doesn't need to have any knowledge about HTML, one just need to know a few simple basic [Markdown language](https://help.github.com/articles/markdown-basics/);

###How to use this library


* keep all the markdown files into md directory, then module will auto generate html files correspondent to .md files as well as index.html
which contain every links to each html files
* How to call apim-docs module in app

  install apim-docs module using command line: npm install apim-docs then

  ```
      var apimdocs  = require('apim-docs');

      apimdocs.InitDocs('api');

      where api is directory we need to store documents (api/docs/html)

  ```


###How does it work?









