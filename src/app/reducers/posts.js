const posts = [
  {
    title: 'JSON Resume',
    meta: 'Saturday, September 10, 2016',
    author: 'Jevin',
    data: [
      {
        element: 'p',
        props: {},
        value: `So occasionally I stalk my colleagues and go through their <a href="https://github.com/" target="__blank">Github</a> accounts. I like to see if there is anything I should be looking into, and am curious what they’ve been up to. A while back, I noticed <a href="https://github.com/jessicacollins" target="__blank">Jessica Collin’s</a> <a href="http://jessicacollins.io/" target="__blank">resume</a>, and liked it quite a bit. My resume has sucked for a long time, and I have never taken the appropriate time to correct this. Thinking she had built it herself I asked her if she minded if I emulated her style. Turns out she hadn’t done it herself, or at least, not the html/css.`
      }, {
        element: 'hr'
      }, {
        element: 'h3',
        props: {},
        value: 'Enter JSON Resume'
      }, {
        element: 'p',
        props: {},
        value: `Jessica had used the tools from <a href="https://jsonresume.org/" target="__blank">JSON Resume</a> to build her resume. And I think, though I’m not a hiring manager and certainly not a designer, that the finished product was a good one. And so , enter Jevin’s <a href="https://registry.jsonresume.org/JevinAnderson" target="__blank">resume</a>! I used the CLI to both export an <a href="/resume.html" target="__blank">html copy</a>, as well as publish it to their resume registry. It was easy, fast, and now I have my resume on <a href="https://bitbucket.org" target="__blank">version control</a> which is, in my opinion, awesome.`
      }, {
        element: 'p',
        props: {},
        value: '-Jevin'
      }
    ]
  }, {
    title: 'I feel the need for speed.',
    meta: 'Saturday, August 20, 2016',
    author: 'Jevin',
    data: [
      {
        element: 'p',
        props: {},
        value: `After <a target="__blank" href="https://developers.google.com/speed/pagespeed/insights/">Google</a> made fun of me I felt, as the title says, a <a target="__blank" href="https://www.youtube.com/watch?v=OlkInNZ7xis">need for speed</a>. So I made a few changes to address some of the big hits page speed slapped me with.`
      }, {
        element: 'p',
        props: {},
        value: `The biggest hit was caching. So I made some changes on my server to set the expires headers on my content. I also added gzip compression for many assets. Additionally, I inlined almost all of <a target="_blank" href="http://getbootstrap.com/">Bootstrap’s</a> css. I should have been more selective, but trying to go through and figure out exactly what pieces of Bootstrap I specifically needed for above the fold content seemed like more work than it was worth. So I went quick and dirty and brought the whole file in. I’m not super happy about it but Google is so that’s good enough for me for now.`
      }, {
        element: 'p',
        props: {},
        value: 'Finally, I’ve known for awhile that I needed to update my DNS settings, so I went ahead and did this while I was working on things.'
      }, {
        element: 'p',
        props: {},
        value: 'So Google is <a target="__blank" href="https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fjevinanderson.com%2F">happy</a> now.'
      }, {
        element: 'p',
        props: {},
        value: '-Jevin'
      }
    ]
  }, {
    title: 'It\'s about time.',
    meta: 'Sunday, August 14, 2016',
    author: 'Jevin',
    data: [
      {
        element: 'p',
        props: {},
        value: `Obviously my old home page was pretty terrible. I made it very quickly after I purchased my domain, and I had little to no experience in web development at the time. A redesign has been long overdue. So here it is.`
      }, {
        element: 'hr'
      }, {
        element: 'h3',
        props: {},
        value: 'So what do we have going on here?'
      }, {
        element: 'p',
        props: {},
        value: `The site styles and layout all come directly from Bootstrap’s <a target="_blank" href="http://getbootstrap.com/examples/blog/">blog</a> example. I think that’s pretty obvious. Slightly more interesting is how the site is rendered. I wrote a simple <a target="_blank" href="https://nodejs.org/">Node.js</a>  <a target="_blank" href="https://github.com/JevinAnderson/Node-application-boilerplate">project</a> to quickly prototype <a target="_blank" href="https://facebook.github.io/react/">React</a>/<a target="_blank" href="http://redux.js.org/">Redux</a> applications. It’s been <a target="_blank" href="https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4#.ng6vs5noq">well</a> <a target="_blank" href="https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html">documented</a> that getting started with building React apps is terrible. So I wrote my application to give me something to copy paste for project startup. I had a few requirements I placed on myself when starting. The application should have isomorphic rendering, it should try to handle above the fold styling, and it should be able to generate static files for Apache/NGINX/IIS servers. And so it does. This site is a static file generated by the node application I wrote. Feel free to check out the <a target="_blank" href="https://github.com/JevinAnderson/Node-application-boilerplate/tree/pages/JevinAnderson.com">source</a>.`
      }, {
        element: 'hr'
      }, {
        element: 'p',
        props: {},
        value: 'I think that’s enough for now about the code.'
      }, {
        element: 'p',
        props: {},
        value: '-Jevin'
      }
    ]
  }
];

export default function() {
  return posts;
}