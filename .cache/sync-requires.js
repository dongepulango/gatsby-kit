const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-js": hot(preferDefault(require("/Users/dongepulango/Documents/Works/BalkanBrothers/gatsby-kit/src/templates/post.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/dongepulango/Documents/Works/BalkanBrothers/gatsby-kit/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/dongepulango/Documents/Works/BalkanBrothers/gatsby-kit/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/dongepulango/Documents/Works/BalkanBrothers/gatsby-kit/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/dongepulango/Documents/Works/BalkanBrothers/gatsby-kit/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dongepulango/Documents/Works/BalkanBrothers/gatsby-kit/src/pages/index.js")))
}

