global.navigator = { userAgent: 'all' };
import express  from 'express';
import React    from 'react';
import ReactDom from 'react-dom/server';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App      from 'components/App';
import configureStore from './configureStore';

const app = express();

app.use('/api/goods', (req, res) => {
  return res.send({
    goods: {
      favorite: [
        {
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Fagopyrum_%D0%B3%D1%80%D0%B5%D1%87%D0%BA%D0%B0.jpg/1024px-Fagopyrum_%D0%B3%D1%80%D0%B5%D1%87%D0%BA%D0%B0.jpg',
          name: 'Grecha',
          description: 'Eat'
        },
        {
          photo: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAPgmj0Nxfpx5zHkwbuWXtyDnnHYGb3QkkPNFxeDGkJgc-R4ai',
          name: 'Hlebushek',
          description: 'Eat'
        },
        {
          photo: 'http://gospodarka.in.ua/wp-content/uploads/2013/07/kurka.jpg',
          name: 'Ryaba',
          description: 'Eat'
        },
        {
          photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flasche_Coca-Cola_0,2_Liter.jpg/170px-Flasche_Coca-Cola_0,2_Liter.jpg',
          name: 'Coca-cola',
          description: 'Eat'
        },
        {
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJXHbPEiLSQebEYeQtXvPlDyUFXT8SLldrBuIvO5Mo0Rc7Fgm',
          name: 'Solt',
          description: 'Eat'
        }
      ],
      all: [
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
        {
          photo: 'https://pbs.twimg.com/profile_images/751191662810963972/yBFCSs3b.jpg',
          name: 'Some',
          description: 'Other'
        },
      ]
    }
  });
  /*return res.send({ goods : { favorite : [], all: []}});*/
});

app.use((req, res) => {
  const componentHTML = ReactDom.renderToString(
    <Provider store={configureStore()}>
      <Router history={hashHistory}>
        <Route path='/' component={App}/>
        <IndexRoute component={App}/>
      </Router>
    </Provider>);

  return res.end(renderHTML(componentHTML));
});

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Hello React</title>
          <link rel="stylesheet" href="${assetUrl}/public/assets/styles.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="${assetUrl}/public/assets/bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});