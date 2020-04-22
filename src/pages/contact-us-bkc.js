import React, { Component } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet';
import DefaultLayout from '../components/layouts/defaultLayout/defaultLayout';
import '../assets/scss/style.scss';
import InnerBanner from "../components/blocks/innerBanner/innerBanner";
import Select from 'react-select';
import axios from 'axios';

const reasonOptions = [
	{ value: 'Book a tour', label: 'Book a tour' },
	{ value: 'Host an event at CIEL', label: 'Host an event at CIEL' },
	{ value: 'Exhibit your art', label: 'Exhibit your art' },
	{ value: 'General inquiries', label: 'General inquiries' }
];

class ContactUs extends Component {
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
		contactMessageError: ''
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

	reasonChangeHandler = contactReason => {
		this.setState(
			{ contactReason, contactReasonError: null });
	};
	blurHendler = (e) => {
		this.checkField(e.target.name)
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

					<Helmet title="CIEL || Contact Us">
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
					</Helmet>
					{blocks}
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
					</div>
				</DefaultLayout>
			</div>
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
