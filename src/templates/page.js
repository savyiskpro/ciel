import React from 'react'
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import InnerBanner from '../components/blocks/innerBanner/innerBanner';
import Block from '../components/blocks/block';
import Select from 'react-select';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const reasonOptions = [
	{ value: 'Book a tour', label: 'Book a tour' },
	{ value: 'Host an event at CIEL', label: 'Host an event at CIEL' },
	{ value: 'Exhibit your art', label: 'Exhibit your art' },
	{ value: 'General inquiries', label: 'General inquiries' }
];

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


class PageTemplate extends React.Component {
	state = {
		regexp: /^[0-9\b]+$/,
		contactName: '',
		contactReason: '',
		contactEmail: '',
		contactPhone: '',
		contactSubject: '',
		contactMessage: '',
		contactNameError: '',
		contactReasonError: '',
		contactEmailError: '',
		contactPhoneError: '',
		contactSubjectError: '',
		contactMessageError: '',
		regexp: /^[0-9\b]+$/,
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
		startDate: new Date(),
		endDate: new Date(),
		nameError: '',
		emailError: '',
		phoneError: '',
		projectError: '',
		companyNameError: '',
		studioError: '',
		projectTypeError: '',
		paymentTypeError: '',
		BillingNameError: '',
		BillingEmailError: '',
		BillingPhoneError: '',
		messageError: '',
		startDateError: '',
		endDateError: '',
		companyAddressError: '',
		// crewSize: '',
		// reservedParking: '',
		sentMessage: '',
		projectTypes: '',
		studios: '',
		submiting: false,

	}
	checkValidity = (value, rules) => {
		let isvalid = null;
		rules.forEach(rule => {
			if (rule['type'] == 'required') {
				if (value.length == 0) {
					isvalid = { 'error': rule['message'] }
				}
			}
			if (rule['type'] == 'isEmail') {
				if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) == false) {
					isvalid = { 'error': rule['message'] }
				}

			}

		})
		return isvalid;
	}



	validateCheck = [
		{
			field: 'contactName',
			rules: [

				{ type: 'required', message: 'This field is required' }

			]
		},
		{
			field: 'contactReason',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'contactEmail',
			rules: [
				{ type: 'isEmail', message: 'Enter a valid email address.' },

			]
		},
		{
			field: 'contactPhone',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'contactSubject',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'contactMessage',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'name',
			rules: [

				{ type: 'required', message: 'This field is required' }

			]
		},
		{
			field: 'email',
			rules: [
				{ type: 'isEmail', message: 'Enter a valid email address.' },

			]
		},
		{
			field: 'phone',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'project',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'message',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'companyName',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'companyAddress',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'studio',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'projectType',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'paymentType',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'BillingName',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'BillingEmail',
			rules: [
				{ type: 'isEmail', message: 'Enter a valid email address.' },

			]
		},

		{
			field: 'BillingPhone',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'startDate',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'endDate',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		}

	]
	checkField = (...para) => {
		let that = this
		// console.log(para)
		this.validateCheck.forEach(field => {
			let value = that.state[field['field']]
			let isvalid = this.checkValidity(value, field['rules'])
			para.map(test => {
				if (isvalid != null) {
					if (field['field'] == test) {
						this.setState({
							[`${test}Error`]: isvalid.error,
						})
					}
				}
			})
		});
	}

	inputHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.name + 'Error']: null
		})
	}
	numberHendler = (e) => {
		if (e.target.value === '' || this.state.regexp.test(e.target.value)) {
			this.setState({
				[e.target.name]: e.target.value,
				[e.target.name + 'Error']: null
			})
		}
	}
	studioChangeHandler = studio => {
		var studios = studio.map(std => {
			return std.value
		})
		this.setState(
			{ studio, studioError: null, studios: studios.join(',') });
	};
	projectTypeChangeHandler = projectType => {
		var projectTypes = projectType.map(std => {
			return std.value
		})
		this.setState(
			{ projectType, projectTypeError: null, projectTypes: projectTypes.join(',') });
	};
	paymentTypeChangeHandler = paymentType => {
		this.setState(
			{ paymentType, paymentTypeError: null });
	};
	reservedParkingChangeHandler = reservedParking => {
		this.setState(
			{ reservedParking });
	};
	reasonChangeHandler = contactReason => {
		this.setState(
			{ contactReason, contactReasonError: null });
	};
	blurHendler = (e) => {
		this.checkField(e.target.name)
	}
	submitHandler = (e) => {
		e.preventDefault()
		console.log(this.state.startDate.toDateString())
		this.checkField('name', 'email', 'phone', 'project', 'message', 'companyName', 'companyAddress', 'studio', 'projectType', 'paymentType', 'BillingName', 'BillingEmail', 'BillingPhone', 'startDate', 'endDate')
		const { nameError, emailError, phoneError, messageError, projectError, companyNameError, companyAddressError, studioError, projectTypeError, BillingNameError, BillingEmailError, BillingPhoneError, startDateError, endDateError } = this.state;
		if (nameError == null && emailError == null && phoneError == null && messageError == null && projectError == null && companyNameError == null && companyAddressError == null && studioError == null && projectTypeError == null && BillingNameError == null && BillingEmailError == null && BillingPhoneError == null) {
			// console.log('working');
			this.setState({
				submiting: true,
			})
			axios.post(`https://d360v3wrocy350.cloudfront.net/mailer/mail.php?type=Booking&name=${this.state.name}&email=${this.state.email}&phone=${this.state.phone}&project=${this.state.project}&Company%20Name=${this.state.companyName}&Company%20Address=${this.state.companyAddress}&Studio=${this.state.studios}&Project%20Type=${this.state.projectTypes}&Payment%20Type=${this.state.paymentType}&Billing%20Name=${this.state.BillingName}&Billing%20Email=${this.state.BillingEmail}&Billing%20Phone=${this.state.BillingPhone}&Start%20Date=${this.state.startDate.toDateString()}&End%20Date=${this.state.endDate.toDateString()}`)
				.then(res => {
					this.setState({
						sentMessage: 'Thank you! Your message has been successfully sent.',
						submiting: false,
					})
				})
		}

	}
	contactSubmitHandler = (e) => {
		e.preventDefault();
		this.checkField('contactName', 'contactReason', 'contactEmail', 'contactPhone', 'contactSubject', 'contactMessage')
		const { contactNameError, contactReasonError, contactEmailError, contactPhoneError, contactMessageError, contactSubjectError } = this.state;
		if (contactNameError == null && contactReasonError == null && contactEmailError == null && contactPhoneError == null && contactMessageError == null && contactSubjectError == null) {
			this.setState({
				submiting: true,
			})
			axios.post(`https://d360v3wrocy350.cloudfront.net/mailer/mail.php?type=Contact&reason=${this.state.contactReason.value}&name=${this.state.contactName}&email=${this.state.contactEmail}&phone=${this.state.contactPhone}&subject=${this.state.contactSubject}&message=${this.state.contactMessage}`)
				.then(res => {
					this.setState({
						sentMessage: 'Thank you! Your message has been successfully sent.',
						submiting: false,
					})
				})
		}

	}
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
			<div className="inner-page">

				<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>
					<div className={this.props.data.allContentfulNavigation.edges[0].node.page.title}>
						<Helmet title={"CIEL || " + this.props.data.allContentfulNavigation.edges[0].node.page.title}>
							<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
						</Helmet>
						{blocks}
						{this.props.data.allContentfulNavigation.edges[0].node.url == '/contact-us' ?
							<div className="contact-form-section">
								<div className="container">
									<form onSubmit={this.contactSubmitHandler}>
										<div className="flex space-between">
											<div className="form-group full">
												<Select placeholder="Select a contact reason" value={this.state.contactReason} onChange={this.reasonChangeHandler} options={reasonOptions} />
												{this.state.contactReasonError ? <span className="error-message">{this.state.contactReasonError}</span> : null}
											</div>
											<div className="form-group">
												<input type="text" onBlur={this.blurHendler} className="form-control" name="contactName" value={this.state.contactName} onChange={this.inputHandler} placeholder="Name" />
												{this.state.contactNameError ? <span className="error-message">{this.state.contactNameError}</span> : null}
											</div>
											<div className="form-group">
												<input type="text" onBlur={this.blurHendler} className="form-control" name="contactEmail" value={this.state.contactEmail} onChange={this.inputHandler} placeholder="Email" />
												{this.state.contactEmailError ? <span className="error-message">{this.state.contactEmailError}</span> : null}
											</div>
											<div className="form-group">
												<input type="text" onBlur={this.blurHendler} className="form-control" name="contactPhone" value={this.state.contactPhone} onChange={this.numberHendler} placeholder="Phone Number" />
												{this.state.contactPhoneError ? <span className="error-message">{this.state.contactPhoneError}</span> : null}
											</div>
											<div className="form-group">
												<input type="text" onBlur={this.blurHendler} className="form-control" name="contactSubject" value={this.state.contactSubject} onChange={this.inputHandler} placeholder="Subject" />
												{this.state.contactSubjectError ? <span className="error-message">{this.state.contactSubjectError}</span> : null}
											</div>
											<div className="form-group full">
												<textarea onBlur={this.blurHendler} className="form-control" name="contactMessage" value={this.state.contactMessage} onChange={this.inputHandler} placeholder="Message"></textarea>
												{this.state.contactMessageError ? <span className="error-message">{this.state.contactMessageError}</span> : null}
											</div>
											<div className="btn-box">
												<button type="submit" disabled={this.state.submiting} className="btn">{this.state.submiting ? 'Wait...' : 'Submit'}</button>
											</div>
											{this.state.sentMessage ? <div className="success-message">
												<p>{this.state.sentMessage}</p>
											</div> : null}

										</div>
									</form>
								</div>
							</div> : null}
						{this.props.data.allContentfulNavigation.edges[0].node.url == '/book-now' ? <div className="book-form-section">
							<div className="container">
								<form onSubmit={this.submitHandler}>
									<div className="flex space-between">
										<div className="form-group">
											<label>Name</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="name" value={this.state.name} onChange={this.inputHandler} />
											{this.state.nameError ? <span className="error-message">{this.state.nameError}</span> : null}
										</div>
										<div className="form-group">
											<label>Email</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="email" value={this.state.email} onChange={this.inputHandler} />
											{this.state.emailError ? <span className="error-message">{this.state.emailError}</span> : null}
										</div>
										<div className="form-group">
											<label>Phone Number</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="phone" value={this.state.phone} onChange={this.inputHandler} />
											{this.state.phoneError ? <span className="error-message">{this.state.phoneError}</span> : null}
										</div>
										<div className="form-group">
											<label>Project Name</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="project" value={this.state.project} onChange={this.inputHandler} />
											{this.state.projectError ? <span className="error-message">{this.state.projectError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Production/Company Name</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="companyName" value={this.state.companyName} onChange={this.inputHandler} />
											{this.state.companyNameError ? <span className="error-message">{this.state.companyNameError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Production/Company Address</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="companyAddress" value={this.state.companyAddress} onChange={this.inputHandler} />
											{this.state.companyAddressError ? <span className="error-message">{this.state.companyAddressError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Studio</label>
											<Select isMulti={true} value={this.state.studio} onChange={this.studioChangeHandler} options={studioOptions} />
											{this.state.studioError ? <span className="error-message">{this.state.studioError}</span> : null}
										</div>
										<div className="form-group">
											<label>start Date</label>
											<DatePicker
												selectsStart
												selected={this.state.startDate}
												onChange={date => this.setState({ startDate: date })}
												startDate={this.state.startDate}
												minDate={new Date()}
												endDate={this.state.endDate}
											/>
											{this.state.startDateError ? <span className="error-message">{this.state.startDateError}</span> : null}
										</div>
										<div className="form-group">
											<label>end Date</label>
											<DatePicker
												selectsEnd
												selected={this.state.endDate}
												onChange={date => this.setState({ endDate: date })}
												startDate={this.state.startDate}
												minDate={new Date()}
												endDate={this.state.endDate}
											/>
											{this.state.endDateError ? <span className="error-message">{this.state.endDateError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Project Type</label>
											<Select isMulti={true} value={this.state.projectType} onChange={this.projectTypeChangeHandler} options={projectTypeOptions} />
											{this.state.projectTypeError ? <span className="error-message">{this.state.projectTypeError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Method of Payment for deposit</label>
											<Select value={this.state.paymentType} onChange={this.paymentTypeChangeHandler} options={paymentTypeOptions} />
											{this.state.paymentTypeError ? <span className="error-message">{this.state.paymentTypeError}</span> : null}
										</div>
										<div className="form-heading">
											<h4>Billing Details</h4>
										</div>
										<div className="form-group full">
											<label>Name</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="BillingName" value={this.state.BillingName} onChange={this.inputHandler} />
											{this.state.BillingNameError ? <span className="error-message">{this.state.BillingNameError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Email</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="BillingEmail" value={this.state.BillingEmail} onChange={this.inputHandler} />
											{this.state.BillingEmailError ? <span className="error-message">{this.state.BillingEmailError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Phone Number</label>
											<input type="text" onBlur={this.blurHendler} className="form-control" name="BillingPhone" value={this.state.BillingPhone} onChange={this.inputHandler} />
											{this.state.BillingPhoneError ? <span className="error-message">{this.state.BillingPhoneError}</span> : null}
										</div>
										<div className="form-group full">
											<label>Crew or Event size each day</label>
											<input type="text" className="form-control" name="crewSize" value={this.state.crewSize} onChange={this.inputHandler} />

										</div>
										<div className="form-group full">
											<label>Reserved parking</label>
											<Select value={this.state.reservedParking} onChange={this.reservedParkingChangeHandler} options={reservedParkingOptions} />
											<span className="note-text">note: Each space is $15/each/day </span>
										</div>
										<div className="form-group full">
											<label>messages</label>
											<textarea className="form-control" name="message" value={this.state.message} onChange={this.inputHandler}></textarea>
											{this.state.messageError ? <span className="error-message">{this.state.messageError}</span> : null}
										</div>
										<div className="btn-box">
											<button type="submit" className="btn">{this.state.submiting ? 'Wait...' : 'Submit'}</button>

										</div>
										{this.state.sentMessage ? <div className="success-message">
											<p>{this.state.sentMessage}</p>
										</div> : null}
									</div>
								</form>
							</div>
						</div> : null}
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
						... on ContentfulTable {
							title
							tableHeadings {
							  title
							}
							tableBody {
							  featureds {
								title
							  }
							  title
							}
						  }
						... on ContentfulArtist {
                  
							email
							website
							name
							instagramHandle
							image {
							  file {
								url
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


