module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/fonts"); // ✅ Serve fonts
  eleventyConfig.addPassthroughCopy("src/images"); // ✅ Copy images to _site
  eleventyConfig.addPassthroughCopy("src/css");   // ✅ Serve CSS

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md");
  });

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