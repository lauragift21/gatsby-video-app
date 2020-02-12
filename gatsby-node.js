/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
  if  (page.path.match(/^\/room/)) {
    page.matchPath = '/room/*'
    actions.createPage(page);
  }
}