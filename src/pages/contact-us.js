import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';
import InnerBanner from "../components/blocks/innerBanner/innerBanner";
import Select from 'react-select';

const reasonOptions = [
	{ value: 'Book a tour', label: 'Book a tour' },
	{ value: 'Host an event at CIEL', label: 'Host an event at CIEL' },
	{ value: 'Exhibit your art', label: 'Exhibit your art' },
	{ value: 'General inquiries', label: 'General inquiries' }
];

class ContactUs extends Component {
	state = {
		name: '',
		reason: '',
		email: '',
		phone: '',
		subject: ''
	}
	inputHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	reasonChangeHandler = reason => {
		this.setState(
			{ reason });
	};
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
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>

				<Helmet title="CIEL || Contact Us">
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
				</Helmet>
				{blocks}
				<div className="contact-form-section">
					<div className="container">
						<div className="form">
							<div className="flex space-between">
								<div className="form-group full">
									<Select placeholder="Select a contact reason" value={this.state.reason} onChange={this.reasonChangeHandler} options={reasonOptions} />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.inputHandler} placeholder="Phone Number" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name="subject" value={this.state.subject} onChange={this.inputHandler} placeholder="Subject" />
								</div>
								<div className="form-group full">
									<textarea className="form-control" name="message" value={this.state.message} onChange={this.inputHandler} placeholder="Message"></textarea>
								</div>
								<div className="btn-box">
									<button type="submit" className="btn">Submit</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DefaultLayout>
		)
	}
}

export default ContactUs

export const pageQuery = graphql`
  query ContactQuery {
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
	  allContentfulNavigation(filter: {url: {eq: "/contact-us"}}) {
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
						contentType
					  }
					}
				  }
				 
			  }
			}
		  }
		}
	  }
  }
`
