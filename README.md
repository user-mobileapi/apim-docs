# apim-docs

**This module will generate html files from markdown files inside md directory**; User doesn't need to have any knowledge about HTML, one just need to know a few simple basic tags - [Markdown language](https://help.github.com/articles/markdown-basics/);

###How to use this module

 * keep all the markdown files in md directory, then module will auto generate html files corresponding to .md files as well as index.html
  which contains every links to each html files.

 * How to call apim-docs module in app

 _install apim-docs module using command line:_ **_npm install apim-docs_** then using the below codes in app
  ```
      var apimdocs  = require('apim-docs');

      apimdocs.InitDocs('api');
  ```
     *where api is directory we need to store documents(api/docs/html)*

###How does it work?

 * module reads each markdown files in md directory and converts them into html files correspondent, the html files will be kept in
      the destination directory of app for example [api]; The structure of the documents will be *[api]/docs/html*;
      Each html file shares the same template which is located inside lib/layout.html.

 * module will also create index.html which contains all links to each html on the fly,  it is kept inside *[api]/docs*;
      Index.html uses template which is located inside lib/indexLayout.html.












