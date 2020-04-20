import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';
import InnerBanner from "../components/blocks/innerBanner/innerBanner";
import Select from 'react-select';

const studioOptions = [
	{ value: 'Studio 1', label: 'Studio 1' },
	{ value: 'Studio 2', label: 'Studio 2' },
	{ value: 'Studio 3', label: 'Studio 3' },
	{ value: 'Studio 4', label: 'Studio 4' },
	{ value: 'Atelier', label: 'Atelier' },
	{ value: 'Cafe', label: 'Cafe' },
];
const projectTypeOptions = [
	{ value: 'Stills or Motion', label: 'Stills or Motion' },
	{ value: 'Sync sound or Motion', label: 'Sync sound or Motion' },
	{ value: 'MOS', label: 'MOS' },
]
const paymentTypeOptions = [
	{ value: 'ACH Transfer', label: 'ACH Transfer' },
	{ value: 'Check', label: 'Check' },
	{ value: 'Cash', label: 'Cash' },
	{ value: 'Credit Card (5% processing fee)', label: 'Credit Card (5% processing fee)' },
]
const reservedParkingOptions = [
	{ value: '0', label: '0' },
	{ value: '1', label: '1' },
	{ value: '2', label: '2' },
	{ value: '3', label: '3' },
	{ value: '4', label: '4' },
	{ value: '5', label: '5' },
	{ value: '6', label: '6' },
	{ value: '7', label: '7' },
	{ value: '8', label: '8' },
	{ value: '9', label: '9' },
	{ value: '10', label: '10' },
	{ value: '11', label: '11' },
	{ value: '12', label: '12' },
	{ value: '13', label: '13' },
	{ value: '14', label: '14' },
	{ value: '15', label: '15' },
	{ value: '16', label: '16' },
	{ value: '17', label: '17' },
	{ value: '18', label: '18' },
	{ value: '19', label: '19' },
	{ value: '20', label: '20' },
]
const equipmentRentalsOptions = [
	{ value: 'test 1', label: 'test 1' },
	{ value: 'test 2', label: 'test 2' },
	{ value: 'test 3', label: 'test 3' },
]
class ContactUs extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		project: '',
		companyName: '',
		companyAddress: '',
		studio: '',
		projectType: '',
		paymentType: '',
		BillingName: '',
		BillingEmail: '',
		BillingPhone: '',
		crewSize: '',
		reservedParking: '',
		message: '',
		equipmentRentals: ''
	}
	inputHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	studioChangeHandler = studio => {
		this.setState(
			{ studio });
	};
	projectTypeChangeHandler = projectType => {
		this.setState(
			{ projectType });
	};
	paymentTypeChangeHandler = paymentType => {
		this.setState(
			{ paymentType });
	};
	reservedParkingChangeHandler = reservedParking => {
		this.setState(
			{ reservedParking });
	};
	equipmentRentalsChangeHandler = equipmentRentals => {
		this.setState(
			{ equipmentRentals });
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
								<div className="form-group">
									<lable>Name</lable>
									<input type="text" className="form-control" name="name" value={this.state.name} onChange={this.inputHandler} />
								</div>
								<div className="form-group">
									<label>Email</label>
									<input type="text" className="form-control" name="email" value={this.state.email} onChange={this.inputHandler} />
								</div>
								<div className="form-group">
									<label>Phone Number</label>
									<input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.inputHandler} />
								</div>
								<div className="form-group">
									<label>Project Name</label>
									<input type="text" className="form-control" name="project" value={this.state.project} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Production/Company Name</label>
									<input type="text" className="form-control" name="companyName" value={this.state.companyName} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Production/Company Address</label>
									<input type="text" className="form-control" name="companyAddress" value={this.state.companyAddress} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Studio</label>
									<Select isMulti={true} value={this.state.studio} onChange={this.studioChangeHandler} options={studioOptions} />
								</div>
								<div className="form-group full">
									<label>Project Type</label>
									<Select isMulti={true} value={this.state.projectType} onChange={this.projectTypeChangeHandler} options={projectTypeOptions} />
								</div>
								<div className="form-group full">
									<label>Method of Payment for deposit</label>
									<Select value={this.state.paymentType} onChange={this.paymentTypeChangeHandler} options={paymentTypeOptions} />
								</div>
								<div className="forr-heading">
									<h4>Billing Contact</h4>
								</div>
								<div className="form-group full">
									<lable>Name</lable>
									<input type="text" className="form-control" name="BillingName" value={this.state.BillingName} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Email</label>
									<input type="text" className="form-control" name="BillingEmail" value={this.state.BillingEmail} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Phone Number</label>
									<input type="text" className="form-control" name="BillingPhone" value={this.state.BillingPhone} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Crew or Event size each day</label>
									<input type="text" className="form-control" name="crewSize" value={this.state.crewSize} onChange={this.inputHandler} />
								</div>
								<div className="form-group full">
									<label>Reserved parking</label>
									<Select value={this.state.reservedParking} onChange={this.reservedParkingChangeHandler} options={reservedParkingOptions} />
									<span>note: of additional parking spaces needed. Each space is $15/each/day </span>
								</div>
								<div className="form-group full">
									<label>Equipment rentals</label>
									<Select value={this.state.equipmentRentals} onChange={this.equipmentRentalsChangeHandler} options={equipmentRentalsOptions} />

								</div>
								<div className="form-group full">
									<label>messages</label>
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
  query BookQuery {
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
	  allContentfulNavigation(filter: {url: {eq: "/book-now"}}) {
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
