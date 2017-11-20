import toot from "./toot.js";

export default () => {
  document.write(`
  <head>
  <title>Title ${toot}</title>
  <body>Body ${toot}</body>
  `)
  console.log(toot)
}
