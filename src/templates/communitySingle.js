import React from 'react'
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import Slider from "react-slick";
import $ from 'jquery';


class communitySingleTemplate extends React.Component {
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
					arrows: false,
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
		console.log(this.props.data.allContentfulCommunity.edges[0].node)
			;
		const pageDetail = this.props.data.allContentfulCommunity.edges[0].node;
		let getDate = new Date(pageDetail.eventDate)

		return (
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
				<div className="community-single-page">
					<Helmet title={"CIEL || " + this.props.data.allContentfulCommunity.edges[0].node.title}>
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
					</Helmet>

					<div className="community-banner event-section">
						<div className="event-box">
							<div className="colmn-img">
								<figure>
									<img src={pageDetail.image.file.url} />
								</figure>
							</div>
							<div className="colmn-text">
								<h2>{pageDetail.title}</h2>
								<h4>{pageDetail.subTitle}</h4>
								<p>{pageDetail.sortText}</p>
								<ul className="time-details">
									<li>{getDate.toDateString()}</li>
									<li>{pageDetail.eventTiming}</li>
								</ul>
								<ul>
									<li><a href="#" className="btn-underline">google calendar</a></li>
									<li><a href="#" className="btn-underline">iCal</a></li>
								</ul>
								<div className="btn-box">
									<a href="#" className="btn">Black Vines</a>
								</div>
							</div>
						</div>
					</div>
					<main>
						{pageDetail.moreDescription ? <div className="page-content">
							<div className="container">
								<h3 data-aos="fade-in" data-aos-duration="2000">MORE INFO</h3>
								<div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
									__html: pageDetail.moreDescription.childMarkdownRemark.html
								}}></div>

							</div>
						</div> : null}
						{pageDetail.moreImages ?
							<div className="studio-slider" data-aos="fade-in" data-aos-duration="2000">
								<h5>PICS FROM LAST YEAR</h5>
								<div className="slider-group">

									<Slider {...this.settings}>
										{pageDetail.moreImages.map((image, key) => (
											<div key={key}>
												<figure>
													<img src={image.file.url} />
												</figure>
											</div>
										))}
									</Slider>
								</div>
							</div> : null}
					</main>
				</div>
			</DefaultLayout>
		)
	}
}

export default communitySingleTemplate

export const pageQuery = graphql`
  query communitySingle($slug: String!) {
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
	  allContentfulCommunity(filter: {url: {eq: $slug}}) {
		edges {
		  node {
			title
			sortText
			subTitle
			eventDate(locale: "")
			eventTiming
			image {
			  file {
				url
			  }
			}
			moreDescription {
				childMarkdownRemark {
				  html
				}
			  }
			  moreImages {
				file {
				  url
				}
			  }
		  }
		}
	  }
  }
`


