const CleanCSS = require("clean-css");

const fs = require("fs"),
  ejs = require("ejs"),
  paths = require("path"),
  minify = require("html-minifier").minify,
  cleanCss = require("clean-css"),
  projs = require("./projects");

function ejsToHTML(path) {
  ejs.renderFile(
    path,
    {
      projects: projs.array,
      views: paths.resolve(__dirname, "src"),
    },
    (err, html) => {
      const minified = minify(html, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
      });
      if (err) {
        console.error(err);
        return false;
      }
      fs.writeFile(
        paths.resolve(__dirname, "public", "index.html"),
        minified,
        function (err) {
          if (err) {
            console.log(err);
            return false;
          }
          return true;
        }
      );
    }
  );
}

function minifyCss(path) {
  const output = new CleanCSS({level: 2}).minify([path]);
  fs.writeFile(
    paths.resolve(__dirname, "public", "css", "stylesheet.min.css"),
    output.styles,
    function (err) {
      if (err) {
        console.log(err);
        return false;
      }
      return true;
    }
  );
}

ejsToHTML(__dirname + "/src/index.ejs");
minifyCss(__dirname + "/public/css/stylesheet.css");
