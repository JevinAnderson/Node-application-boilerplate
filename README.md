# Node-application-boilerplate
Just some convenient boilerplate for me to copy to get up and running with a node app.

Routes
```/```
All the compiled resources served statically. 

```/application```
Serves out the index.html content from the server, isomorphically rendering react and redux content, and saving the output into a static file ```public/dist/index.html```
The main reason I wanted to do this, was so that both a live node server could render content isomorphically, but also, ANY content rendered by this application could also be served out statically on a server like Apache or Nginx.

Notable files
```/public/scss/before```
This is where you put the above/before the fold css content. Content here will be rendered inline in the header of the files.```
```/public/scss/index```
All other styles should go here, to be added to the bottom of the page.

```/public/js/index```
This is the entry point script for the client running javascript.
