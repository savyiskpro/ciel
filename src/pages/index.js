import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';
import BannerSection from '../components/blocks/bannerSection/bannerSection';
import Block from '../components/blocks/block';
import $ from 'jquery';



class RootIndex extends Component {
	componentDidMount() {
		$('.tab-section li a').click(function (e) {
			var getsection = $('.tab-section').offset().top;
			e.preventDefault();
			var getImage = $(this).attr('href');
			$(getImage).addClass('active').siblings().removeClass('active');
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
			if (window.innerWidth >= 767) {
				// if ($(this).parent().index())

				console.log($(this).parent().index())
				if ($(this).parent().index() == 0) {
					$('body,html').animate({ scrollTop: getsection });
				}
				if ($(this).parent().index() == 1) {
					$('body,html').animate({ scrollTop: getsection + 501 });
				}
				if ($(this).parent().index() == 2) {
					$('body,html').animate({ scrollTop: getsection + 1001 });
				}
				if ($(this).parent().index() == 3) {
					$('body,html').animate({ scrollTop: getsection + 1501 });
				}

			}

		})
		if (window.innerWidth >= 767) {

			$(window).scroll(function () {
				if ($('.tab-section') && $('.tab-section').length) {

					var getsection = $('.tab-section').offset().top;
					if ($(this).scrollTop() > getsection) {
						$('.tab-section .colmn-text li, .tab-section .colmn-img figure img').removeClass('active')
						$('.tab-section .colmn-text li:nth-child(1), .tab-section .colmn-img figure img:nth-child(1)').addClass('active')
					}
					if ($(this).scrollTop() > getsection + 500) {
						$('.tab-section .colmn-text li, .tab-section .colmn-img figure img').removeClass('active')
						$('.tab-section .colmn-text li:nth-child(2), .tab-section .colmn-img figure img:nth-child(2)').addClass('active')

					}
					if ($(this).scrollTop() > getsection + 1000) {
						$('.tab-section .colmn-text li, .tab-section .colmn-img figure img').removeClass('active')
						$('.tab-section .colmn-text li:nth-child(3), .tab-section .colmn-img figure img:nth-child(3)').addClass('active')
					}
					if ($(this).scrollTop() > getsection + 1500) {

						$('.tab-section .colmn-text li, .tab-section .colmn-img figure img').removeClass('active')
						$('.tab-section .colmn-text li:nth-child(4), .tab-section .colmn-img figure img:nth-child(4)').addClass('active')

					}
				}



			})
		}
		$(window).scroll(function () {
			if ($('.pardon-seciton') && $('.pardon-seciton').length) {
				if ($(this).scrollTop() > $('.pardon-seciton').offset().top - 1000) {
					$('.promo-box').addClass('active');

				}
			}



		})
		$('.promo-box .promo-icon').click(function () {
			$('.promo-box .promo-content').addClass('active open')
			$('.promo-box .promo-content').removeClass('close');

		})
		$('.promo-box .promo-content .btn-close').click(function () {
			$('.promo-box .promo-content').addClass('close');
			$('.promo-box .promo-content').removeClass('active open');
		})
	}
	render() {
		console.log(this.props.data)
		const sectionDetails = this.props.data.allContentfulNavigation.edges[0].node.page.blocks;
		const blocks = sectionDetails.map(detail => {
			switch (detail.internal.type) {
				case "ContentfulBannerSection":
					return <BannerSection sectionDetail={detail} />
				case "ContentfulCardSection":
					return "";
				case "ContentfulBackgroundImageSection":
					return "";
				case "ContentfulSliderSection":
					return "";
				case "ContentfulJoinSection":
					return "";
				case "ContentfulSectionBlock":
					return <Block sectionDetail={detail} />
				default:
					return detail;
			}
		})
		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>

				<Helmet title="CIEL || Home">
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
				</Helmet>
				{blocks}

			</DefaultLayout>
		)
	}
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
				  ... on ContentfulSeconderyNavigation {
				  
					title
					url
				  }
				}
			  }
			  socialLinks {
				title
				navigation {
				  ... on ContentfulSeconderyNavigation {
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
	  allContentfulNavigation(filter: {url: {eq: "/"}}) {
		edges {
		  node {
			url
			page {
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
						... on ContentfulSeconderyNavigation {
							url
							title
							internal {
							  type
							}
						}
						... on ContentfulCommunity {
							id
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
