import React, { Component } from 'react';
import Holder from '../../hoc/holder';
import { Link } from 'gatsby'
import axios from 'axios';
class footer extends Component {
	state = {
		email: '',
		emailErroe: '',
		submiting: false,
		sentMessage: ''
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
			field: 'email',
			rules: [
				{ type: 'isEmail', message: 'Enter a valid email address.' },

			]
		}
	]
	checkField = (...para) => {
		let that = this
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
	blurHendler = (e) => {
		this.checkField(e.target.name)
	}
	submitHandler = (e) => {
		e.preventDefault()
		this.checkField('email')
		const { emailError } = this.state;
		if (emailError == null) {
			this.setState({
				submiting: true,
			})
			axios.post(`https://d360v3wrocy350.cloudfront.net/mailer/mail.php?type=Newsletter&email=${this.state.email}`)
				.then(res => {
					this.setState({
						sentMessage: 'Thank you! Your message has been successfully sent.',
						submiting: false,
					})
				})
		}

	}
	render() {
		return (
			<Holder>
				<div className="update-form" data-aos="fade-in" data-aos-duration="2000">
					<div className="container">
						<div className="form-section">
							<div className="section-text top">
								<h2>get updates</h2>
							</div>
							<div className="section-text middle">
								<h2>get updates</h2>
							</div>
							<div className="section-text bottom">
								<h2>get updates</h2>
							</div>
							<div className="form-box">
								<form onSubmit={this.submitHandler}>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="name@address.com" name="email" value={this.state.email} onChange={this.inputHandler} onBlur={this.blurHendler} />
										{this.state.emailError ? <span className="error-message">{this.state.emailError}</span> : null}
										<button type="submit" className="btn-underline">{this.state.submiting ? 'wait...' : 'submit'} </button>
									</div>

									{this.state.sentMessage ? <div className="success-message">
										<p>{this.state.sentMessage}</p>
									</div> : null}
								</form>
							</div>

						</div>
					</div>
				</div>
				<footer>
					<div className="container">
						<div className="flex space-between">
							<div className="colmn-box">
								<Link to="/">
									<img src={this.props.footerData.logo.file.url} />
								</Link>
							</div>
							<div className="colmn-box">
								<h5>Contact </h5>
								<ul>
									<li><Link to="/contact-us">email us</Link></li>
									{this.props.footerData.generalEmail ? <li><a href={"mailto:" + this.props.footerData.generalEmail}>General:{this.props.footerData.generalEmail}</a></li> : null}
									{this.props.footerData.studioEmail ? <li><a href={"mailto:" + this.props.footerData.studioEmail}>Studios:{this.props.footerData.studioEmail}</a></li> : null}
									{this.props.footerData.phoneNumber ? <li><a href={"tel:" + this.props.footerData.phoneNumber}>{this.props.footerData.phoneNumber}</a></li> : null}
								</ul>
							</div>
							<div className="colmn-box">
								<h5>Location </h5>
								<ul>
									<li><a href={this.props.footerData.googleMapUrl} target="_blank">{this.props.footerData.address}</a></li>
									<li><Link to="/contact-us">contact us for exact address</Link></li>
								</ul>
							</div>
							{/* {this.props.footerData.navigationGroups.map((group, key) => (
							<div key={key} className="colmn-box">
								<h5>{group.title} </h5>
								<ul>
									<li><a href={}></a></li>
								</ul>
								{group.navigation ?
									<ul>
										{group.navigation.map((nav, key) => {
											if (nav.__typename == 'ContentfulNavigation') {
												return <li key={key}><Link to={nav.url}>{nav.title}</Link></li>
											}
											else {
												return <li key={key}><a href={nav.url}>{nav.title}</a></li>
											}
	
										})}
									</ul> : ''}
							</div>
						))} */}
							{this.props.footerData.socialLinks ? <div className="colmn-box">
								<h5>{this.props.footerData.socialLinks[0].title} </h5>
								<ul className="social-nav">
									{this.props.footerData.socialLinks[0].navigation.map((nav, key) => (
										<li><a target="_blank" href={nav.url}><i className={"fa " + nav.title} aria-hidden="true"></i></a></li>
									))}
								</ul>


							</div> : null}

						</div>
					</div>
				</footer>
			</Holder>
		)
	}
}

export default footer;
