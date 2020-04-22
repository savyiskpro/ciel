import React from 'react'
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import InnerBanner from '../components/blocks/innerBanner/innerBanner';
import Block from '../components/blocks/block';



class PageTemplate extends React.Component {
	componentDidMount() {

	}
	render() {
		console.log(this.props.data)
		const sectionDetails = this.props.data.allContentfulNavigation.edges[0].node.page.blocks;
		const blocks = sectionDetails.map(detail => {
			switch (detail.internal.type) {
				case "ContentfulBannerSection":
					return <InnerBanner sectionDetail={detail} />
				case "ContentfulSectionBlock":
					return <Block sectionDetail={detail} />
				default:
					return detail;
			}
		})

		return (
			<div>

				<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
					<div className={this.props.data.allContentfulNavigation.edges[0].node.page.title}>
						<Helmet title={"CIEL || " + this.props.data.allContentfulNavigation.edges[0].node.page.title}>
							<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
						</Helmet>
						{blocks}
					</div>
					{/* <h2>inner page</h2> */}
				</DefaultLayout>

			</div>
		)
	}
}

export default PageTemplate

export const pageQuery = graphql`
  query InnerPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
	}
	allContentfulLayout {
		edges {
		  node {
			footer {
			  logo {
				file {
				  url
				}
			  }
			  navigationGroups {
				title
				navigation {
				  ... on ContentfulNavigation {
				  
					title
					url
				  }
				  ... on ContentfulSecondaryNavigation {
				  
					title
					url
				  }
				}
			  }
			  socialLinks {
				title
				navigation {
				  ... on ContentfulSecondaryNavigation {
					title
					url
				  }
				}
			  }
			}
			header {
				rightNavigation {
				  title
				  url
				}
				navigationItems {
				  title
				  url
				  extraClass
				  navigationImage {
						fluid {
						src
						}
					}
				  }
				  logo {
					file {
					  url
					}
				  }
			  }
		  }
		}
	  }
	  allContentfulNavigation(filter: {url: {eq: $slug}}) {
		edges {
		  node {
			url
			page {
				title
			  blocks {
				  
				... on ContentfulBannerSection {
					id
					internal {
					  type
					}
					title
					subtitle
					logo {
					  file {
						url
						
					  }
					}
					imageVideo {
					  file {
						url
						contentType
					  }
					}
				  }
				  ... on ContentfulSectionBlock {
					id
					blockClass
					title
					backgroundImage {
						file {
						  url
						}
					}
					blockItems {
						... on ContentfulAssets {
							title
							items {
							  childMarkdownRemark {
								html
							  }
							}
						}
						... on ContentfulPromo {
							id
							title
							internal {
								type
							  }
							subTitle
							link {
							  title
							  url
							}
						  }
						... on ContentfulCoworking {
							id
							images {
							  file {
								url
							  }
							}
							title
							url
							bookUrl
							description {
							  childMarkdownRemark {
								html
							  }
							}
						}
						... on ContentfulStudios {
							id
							images {
							  file {
								url
							  }
							}
							title
							url
							bookUrl
							description {
							  childMarkdownRemark {
								html
							  }
							}
						}
						... on ContentfulImageGroup {
							id
							images {
							  file {
								url
							  }
							}
						}
						... on ContentfulPersonDetail {
							id
							name
							description {
							  childMarkdownRemark {
								html
							  }
							}
							image {
							  file {
								url
							  }
							  title
							}
						  }
						... on ContentfulSectionBlock {
							id
							title
							internal {
							  type
							}
							blockItems {
								... on ContentfulNavigationGroup {
									id
									navigation {
									  ... on ContentfulSecondaryNavigation {
										
										url
										title
									  }
									  ... on ContentfulNavigation {
										
										url
										title
									  }
									}
								}
								... on ContentfulImageGroup {
									id
									images {
									  file {
										url
									  }
									}
								}
							  ... on ContentfulTextBox {
								id
								content {
								  childMarkdownRemark {
									html
								  }
								}
							  }
							  ... on ContentfulImageHolder {
								id
								image {
								  file {
									url
								  }
								}
							  }
							}
						  }
						... on ContentfulSecondaryNavigation {
							url
							title
							internal {
							  type
							}
						}
						... on ContentfulCommunity {
							id
							url
							subTitle
							title
							tag
							image {
							  file {
								url
							  }
							}
							sortText
							url
							eventDate(locale: "")
                  			eventTiming
						}
						... on ContentfulNavigation {
							title
							url
							internal {
								type
							}
						}
						... on ContentfulTabGroup {
							title
							internal {
							  type
							}
							image {
							  file {
								url
							  }
							}
						}
						... on ContentfulImageHolder {
							internal {
								type
							  }
							image {
							  file {
								url
							  }
							}
						}
						... on ContentfulTextBox {
							title
							internal {
							  type
							}
							content {
							  childMarkdownRemark {
								html
							  }
							}
						}
					}
					internal {
					  type
					}
				  }
			  }
			}
		  }
		}
	  }
  }
`


