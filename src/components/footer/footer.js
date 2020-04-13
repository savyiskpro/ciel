import React from 'react';
import Holder from '../../hoc/holder';

export default ({ footerData }) => (
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
						<div className="form-group">
							<input type="text" className="form-control" placeholder="emailaddress@email address.com" />
						</div>
						<button type="button" className="btn-underline">submit</button>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<div className="container">
				<div className="flex space-between">
					<div className="colmn-box">
						<a href="#">
							<img src={footerData.logo.file.url} />
						</a>
					</div>
					{footerData.navigationGroups.map((group, key) => (
						<div key={key} className="colmn-box">
							<h5>{group.title} </h5>
							{group.navigation ?
								<ul>
									{group.navigation.map((nav, key) => (
										<li key={key}><a href={nav.url}>{nav.title}</a></li>
									))}
								</ul> : ''}

						</div>
					))}

				</div>
			</div>
		</footer>
	</Holder>
)

