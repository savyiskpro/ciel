const Promise = require('bluebird')
const path = require('path')




exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const prosimeOne = new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/page.js')
		resolve(
			graphql(
				`
        {
            allContentfulNavigation {
              edges {
                node {
                  title
				  url
				  page {
                    id
                  }
                }
              }
            }
          }
          
          `
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}



				const pages = result.data.allContentfulNavigation.edges
				pages.forEach((page, index) => {
					if (page.node.page != null) {
						createPage({
							path: `${page.node.url}/`,
							component: blogPost,
							context: {
								slug: page.node.url
							},
						})
					}
				})
			})
		)
	})
	const prosimeTwo = new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/communitySingle.js')
		resolve(
			graphql(
				`
        {
            allContentfulCommunity {
              edges {
                node {
                  title
				  url
				  
                }
              }
            }
          }
          
          `
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				console.log(result.data.allContentfulCommunity.edges)

				const pages = result.data.allContentfulCommunity.edges
				pages.forEach((page, index) => {

					createPage({
						path: `${page.node.url}/`,
						component: blogPost,
						context: {
							slug: page.node.url
						},

					})

				})
			})
		)
	})
	const prosimeThree = new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/studioSingle.js')
		resolve(
			graphql(
				`
        {
            allContentfulStudios {
              edges {
                node {
                  title
				  url
				  
                }
              }
            }
          }
          
          `
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				console.log(result.data.allContentfulStudios.edges)

				const pages = result.data.allContentfulStudios.edges
				pages.forEach((page, index) => {

					createPage({
						path: `${page.node.url}/`,
						component: blogPost,
						context: {
							slug: page.node.url
						},

					})

				})
			})
		)
	})
	const prosimeFour = new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/coworkingSingle.js')
		resolve(
			graphql(
				`
        {
            allContentfulCoworking {
              edges {
                node {
                  title
				  url
				  
                }
              }
            }
          }
          
          `
			).then(result => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				console.log(result.data.allContentfulCoworking.edges)

				const pages = result.data.allContentfulCoworking.edges
				pages.forEach((page, index) => {

					createPage({
						path: `${page.node.url}/`,
						component: blogPost,
						context: {
							slug: page.node.url
						},

					})

				})
			})
		)
	})
	return Promise.all([prosimeOne, prosimeTwo, prosimeThree, prosimeFour])
}
