import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import { routes } from './routes';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

require('babel-register')({
  ignore: function(filename) {
    if (filename === './node_modules/flexboxgrid/dist/flexboxgrid.css') {
      return false;
    } else {
      return true;
    }
  }
});

require.extensions['.css'] = () => {
  return;
};

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  // routes is our object of React routes defined above
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      // if we got props, that means we found a valid component to render
      // for the given route
      const markup = renderToString(<RouterContext {...props} />);
      
      // render `index.ejs`, but pass in the markup we want it to display
      res.render('index', { markup })

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);
    }
  });
});
app.listen(3003, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3003');
});

// we start a webpack-dev-server with our config
new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    proxy: {
      "*": "http://localhost:3003"
    }
}).listen(3001, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at http://localhost:3001');
});

