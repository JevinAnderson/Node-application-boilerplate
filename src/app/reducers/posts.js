const posts = [
  {
    title: 'It\'s about time.',
    meta: 'Sunday, August 14, 2016',
    author: 'Jevin',
    data: [
      {
        element: 'p',
        props: {},
        value: `Obviously my old home page was pretty terrible. I made it very quickly after I purchased my domain, and I had little to no experience in web development at the time. A redesign has been long overdue. So here it is.`
      },{
        element: 'hr'
      }, {
        element: 'h3',
        props: {},
        value: 'So what do we have going on here?'
      }, {
        element: 'p',
        props: {},
        value: `The site styles and layout all come directly from Bootstrap’s <a href=” http://getbootstrap.com/examples/blog/”>blog</a> example. I think that’s pretty obvious. Slightly more interesting is how the site is rendered. I wrote a simple <a href=” https://nodejs.org/”>Node.js</a>  <a href=” https://github.com/JevinAnderson/Node-application-boilerplate”>project</a> to quickly prototype <a href=” https://facebook.github.io/react/”>React</a>/<a href=” http://redux.js.org/”>Redux</a> applications. It’s been <a href=” https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.ng6vs5noq”>well</a> <a href=” https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html”>documented</a> that getting started with building React apps is terrible. So I wrote my application to give me something to copy paste for project startup. I had a few requirements I placed on myself when starting. The application should have isomorphic rendering, it should try to handle above the fold styling, and it should be able to generate static files for Apache/NGINX/IIS servers. And so it does. This site is a static file generated by the node application I wrote. Feel free to check out the <a href=” https://github.com/JevinAnderson/Node-application-boilerplate/tree/pages/JevinAnderson.com”>source</a>.`
      },{
        element: 'hr'
      },{
        element: 'p',
        props: {},
        value: 'I think that’s enough for now about the code.'
      },{
        element: 'p',
        props: {},
        value: '-Jevin'
      }
    ]
  }
];

export default function () {
  return posts;
}