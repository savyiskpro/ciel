import React from 'react';
import Holder from '../../hoc/holder';
import { Link } from 'gatsby'

export default ({ footerData }) => (
	<Holder>
		{console.log(footerData)}
		{/* <div className="update-form" data-aos="fade-in" data-aos-duration="2000">
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
						<div className="form-group">
							<input type="text" className="form-control" placeholder="emailaddress@email address.com" />
						</div>
						<button type="button" className="btn-underline">submit</button>
					</div>
				</div>
			</div>
		</div> */}
		<footer>
			<div className="container">
				<div className="flex space-between">
					<div className="colmn-box">
						<Link to="/">
							<img src={footerData.logo.file.url} />
						</Link>
					</div>
					<div className="colmn-box">
						<h5>Contact </h5>
						<ul>
							<li><Link to="/contact-us">Contact us</Link></li>
							<li><a href={"mailto:" + footerData.generalEmail}>General:{footerData.generalEmail}</a></li>
							<li><a href={"mailto:" + footerData.studioEmail}>Studios:{footerData.studioEmail}</a></li>
						</ul>
					</div>
					<div className="colmn-box">
						<h5>Location </h5>
						<ul>
							<li><a href={footerData.googleMapUrl} target="_blank">Studios:{footerData.address}</a></li>
							<li><Link to="/contact-us">contact us for exact address</Link></li>
						</ul>
					</div>
					{/* {footerData.navigationGroups.map((group, key) => (
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
					{footerData.socialLinks ? <div className="colmn-box">
						<h5>{footerData.socialLinks[0].title} </h5>
						<ul className="social-nav">
							{footerData.socialLinks[0].navigation.map((nav, key) => (
								<li><a target="_blank" href={nav.url}><i className={"fa " + nav.title} aria-hidden="true"></i></a></li>
							))}
						</ul>


					</div> : null}

				</div>
			</div>
		</footer>
	</Holder>
)

