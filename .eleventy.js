module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/fonts"); // ✅ Serve fonts
  eleventyConfig.addPassthroughCopy("src/images"); // ✅ Copy images to _site
  eleventyConfig.addPassthroughCopy("src/css");   // ✅ Serve CSS
  eleventyConfig.addPassthroughCopy("src/js");   // ✅ Serve js
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon-96x96.png": "favicon-96x96.png" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md");
  });

  eleventyConfig.addGlobalData("env", process.env.ELEVENTY_ENV || "development");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};