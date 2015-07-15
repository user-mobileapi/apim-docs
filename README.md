# apim-docs

    **This module will generate html files from markdown files inside md directory**; User doesn't need to have any knowledge about HTML, one just need to know a few simple basic [Markdown language](https://help.github.com/articles/markdown-basics/);

###How to use this module


    * keep all the markdown files into md directory, then module will auto generate html files correspondent to .md files as well as index.html
    which contain every links to each html files
    * How to call apim-docs module in app

          _install apim-docs module using command line:_ **_npm install apim-docs_** then using the below codes in app

          ```
              var apimdocs  = require('apim-docs');

              apimdocs.InitDocs('api');

              _where api is directory we need to store documents (api/docs/html)_

          ```

###How does it work?

    * module will read each markdown files in md directory and convert into html files correspondent, the html files will keep in the destination directory of app for example [api];
      the structure of the document will be _[api]/docs/html_; Each html file shares the same template which is located inside lib/layout.html.

    * module will also create index.html which contain all links to each html on the fly inside_[api]/docs_; Index.html uses template which is located inside lib/indexLayout.html.












