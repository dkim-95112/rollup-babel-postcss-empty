import './index.scss';
import toot from './toot.js';

export default () => {
  console.log(toot)

  document.write(`
  <head>
    <title>Title ${toot}</title>
  </head>
  <body>
    <h1>Body ${toot}</h1>
  </body>
  `)
}
