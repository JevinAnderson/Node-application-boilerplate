const fs = require('fs');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const React = require('react');
var ReactDOM = require('react-dom/server');
const { Provider } = require('react-redux');

const { Application, createStore } = require(path.join(__dirname, './../public/dist/js/application/main_application_bundle.js'));

const serverState = {
  data: 'test data'
};
const staticDirectory = __dirname.replace('server', 'public/dist');

const app = express();

app.engine('.html', exphbs({ extname: '.html', defaultLayout: 'index', layoutsDir: __dirname + '/views/layouts' }));
app.set('view engine', '.html');
app.set('views', __dirname + '/views');

function getBeforeTheFoldCSS(callback) {
  fs.readFile(__dirname + '/../public/dist/css/before.css', 'utf8', function(error, data) {
    var beforeTheFoldCss = '';
    if (!error) {
      beforeTheFoldCss = data;
    } else {
      console.log(error);
    }

    callback(beforeTheFoldCss)
  });
}

function renderApplication(callback) {
  const store = createStore(serverState);
  const data = { store };

  const application = React.createElement(Provider, data, React.createElement(Application));
  const applicationString = ReactDOM.renderToString(application);

  return applicationString;
}

function printOutputToFile(html) {
  fs.writeFile(staticDirectory + '/index.html', html, 'utf8', error => {
    if (error) {
      console.log(error);
    }
  });
}

app.get('/application', (req, res) => {
  getBeforeTheFoldCSS(beforeTheFoldCss => {
    const applicationString = renderApplication();
    const initialState = JSON.stringify(serverState, null, 4);

    res.render('application', { beforeTheFoldCss, initialState, applicationString }, (error, html) => {
      if (!error) {
        printOutputToFile(html);
        res.send(html);
      }
    });
  });
});

app.use(['/'], express.static(staticDirectory));


const port = 1985;
app.listen(port);
console.log(`Serving content on port: ${port}`);