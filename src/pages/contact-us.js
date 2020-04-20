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
		name: '',
		reason: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
		nameError: '',
		reasonError: '',
		emailError: '',
		phoneError: '',
		subjectError: '',
		messageError: ''
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
			field: 'name',
			rules: [

				{ type: 'required', message: 'This field is required' }

			]
		},
		{
			field: 'reason',
			rules: [
				{ type: 'required', message: 'This field is required' },

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
			field: 'subject',
			rules: [
				{ type: 'required', message: 'This field is required' },

			]
		},
		{
			field: 'message',
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

	reasonChangeHandler = reason => {
		this.setState(
			{ reason, reasonError: null });
	};
	blurHendler = (e) => {
		this.checkField(e.target.name)
	}
	submitHandler = (e) => {
		e.preventDefault();
		this.checkField('name', 'reason', 'email', 'phone', 'subject', 'message')
		const { nameError, reasonError, emailError, phonerError, messageError, subjectError } = this.state;
		if (nameError == null && reasonError == null && emailError == null && phonerError == null && messageError == null && subjectError == null) {
			this.setState({
				submiting: true,
			})
			axios.post(`https://d360v3wrocy350.cloudfront.net/mailer/mail.php?type=Contact&reason=${this.state.reason.value}&name=${this.state.name}&email=${this.state.email}&phone=${this.state.phone}&subject=${this.state.subject}`)
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
			<DefaultLayout headerData={this.props.data.allContentfulLayout.edges[0].node.header} footerData={this.props.data.allContentfulLayout.edges[0].node.footer}>

				<Helmet title="CIEL || Contact Us">
					<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
				</Helmet>
				{blocks}
				<div className="contact-form-section">
					<div className="container">
						<form onSubmit={this.submitHandler}>
							<div className="flex space-between">
								<div className="form-group full">
									<Select placeholder="Select a contact reason" value={this.state.reason} onChange={this.reasonChangeHandler} options={reasonOptions} />
									{this.state.reasonError ? <span className="error-message">{this.state.reasonError}</span> : null}
								</div>
								<div className="form-group">
									<input type="text" onBlur={this.blurHendler} className="form-control" name="name" value={this.state.name} onChange={this.inputHandler} placeholder="Name" />
									{this.state.nameError ? <span className="error-message">{this.state.nameError}</span> : null}
								</div>
								<div className="form-group">
									<input type="text" onBlur={this.blurHendler} className="form-control" name="email" value={this.state.email} onChange={this.inputHandler} placeholder="Email" />
									{this.state.emailError ? <span className="error-message">{this.state.emailError}</span> : null}
								</div>
								<div className="form-group">
									<input type="text" onBlur={this.blurHendler} className="form-control" name="phone" value={this.state.phone} onChange={this.numberHendler} placeholder="Phone Number" />
									{this.state.phoneError ? <span className="error-message">{this.state.phoneError}</span> : null}
								</div>
								<div className="form-group">
									<input type="text" onBlur={this.blurHendler} className="form-control" name="subject" value={this.state.subject} onChange={this.inputHandler} placeholder="Subject" />
									{this.state.subjectError ? <span className="error-message">{this.state.subjectError}</span> : null}
								</div>
								<div className="form-group full">
									<textarea onBlur={this.blurHendler} className="form-control" name="message" value={this.state.message} onChange={this.inputHandler} placeholder="Message"></textarea>
									{this.state.messageError ? <span className="error-message">{this.state.messageError}</span> : null}
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
