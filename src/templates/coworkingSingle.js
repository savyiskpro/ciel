import React from 'react'
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import Slider from "react-slick";
import $ from 'jquery';
import { Link } from 'gatsby'

class coworkingSingleTemplate extends React.Component {
	settings = {
		centerMode: true,
		centerPadding: '300px',
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '150px'
				}
			},
			{
				breakpoint: 992,
				settings: {
					centerPadding: '100px'
				}
			},
			{
				breakpoint: 767,
				settings: {
					centerPadding: '40px'
				}
			}
		]
	};
	componentDidMount() {
		$('.slick-prev').html('<span>p</span> <span>r</span> <span>e</span> <span>v</span>')
		$('.slick-next').html('<span>n</span><span>e</span><span>x</span><span>t</span>');

	}
	render() {
		console.log(this.props.data.allContentfulCoworking.edges)
		const pageDetail = this.props.data.allContentfulCoworking.edges[0].node;

		return (
			<div className="inner-page">
				<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
					<Helmet title={"CIEL || " + this.props.data.allContentfulCoworking.edges[0].node.title}>
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
					</Helmet>

					<div className="studio-single-page">
						<div className="detail-banner">
							<figure>
								<img src={pageDetail.bannerImage.file.url} />
							</figure>
							<div className="text-box">
								<h5 data-aos="fade-in" data-aos-duration="2000">{pageDetail.title}</h5>
								<div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
									__html: pageDetail.description.childMarkdownRemark.html
								}}></div>

								<span data-aos="fade-in" data-aos-duration="2000"><i className="fa fa-angle-down"
									aria-hidden="true"></i></span>
							</div>
						</div>
						<div className="featured-section">
							<h5 data-aos="fade-in" data-aos-duration="2000">Features</h5>
							<div className="container">
								<div className="flex">
									{pageDetail.featureds.map((featured, key) => (
										<div key={key} className="colmn-box" data-aos="fade-in" data-aos-duration="2000">
											<figure>
												<img src={featured.image.file.url} />
											</figure>
											<p>{featured.title} </p>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="book-section" data-aos="fade-in" data-aos-duration="2000">
							<div className="container">
								<h3>{pageDetail.bookText} </h3>
								<a href={pageDetail.bookUrl} target="_blank" className="btn">Book now</a>
							</div>
						</div>
						{pageDetail.images ?
							<div className="studio-slider" data-aos="fade-in" data-aos-duration="2000">
								<div className="slider-group">

									<Slider {...this.settings}>
										{pageDetail.images.map((image, key) => (
											<div key={key}>
												<figure>
													<img src={image.file.url} />
												</figure>
											</div>
										))}


									</Slider>
								</div>
							</div> : null}
						<div className="video-section">
							<h5 data-aos="fade-in" data-aos-duration="2000">virtual tour</h5>
							<figure data-aos="fade-in" data-aos-duration="2000">
								<video autoPlay loop controls>
									{/* <source src="app/video/ciel_hero_video.webm" type="video/webm" /> */}
									<source src={pageDetail.video.file.url} type="video/mp4" />
									{/* <source src="app/video/ciel_hero_video.ogv" type="video/ogv" /> */}
								</video>

							</figure>
						</div>
						{pageDetail.secondBookText ? <div className="book-section" data-aos="fade-in" data-aos-duration="2000">
							<div className="container">
								<h3>{pageDetail.secondBookText} </h3>
								<a href={pageDetail.bookUrl} target="_blank" className="btn">Book now</a>
							</div>
						</div> : null}

						{pageDetail.otherCoworking ? <div className="other-studios" data-aos="fade-in" data-aos-duration="2000">
							{pageDetail.otherCoworking.map((other, key) => (
								<Link to={other.url} key={key} className="colmn-box">
									<figure>
										<img src={other.images[0].file.url} />
									</figure>
									<h2>{other.title}</h2>
								</Link>
							))}


						</div> : null}

					</div>
				</DefaultLayout>
			</div>
		)
	}
}

export default coworkingSingleTemplate

export const pageQuery = graphql`
  query coworkingSingle($slug: String!) {
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
			  phoneNumber
			studioEmail
			googleMapUrl
			address
			generalEmail
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
	  allContentfulCoworking(filter: {url: {eq: $slug}}) {
		edges {
		  node {
			title
			url
			bookUrl
			bookText
			secondBookText
			otherCoworking {
				url
				title
				images {
				  file {
					url
				  }
				}
			}
			bannerImage {
				file {
					url
				}
			}
			description {
				childMarkdownRemark {
					html
				}
			}
			images {
				file {
					url
				}
			}
			featureds {
				title
				image {
					file {
					url
					}
				}
			}
			video {
				file {
				  url
				}
			}
		  }
		}
	  }
	  
	  
  }
`


