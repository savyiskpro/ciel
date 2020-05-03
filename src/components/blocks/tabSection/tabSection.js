import React from 'react';
import { Link } from 'gatsby';


const tabSection = (props) => {
	return (
		<div className="tab-section">
			<div className="container">

				<div className="flex items-align-center">
					<div className="colmn-img">

						<figure>
							{props.sectionDetail.blockItems.map((tab, key) => (
								<Link key={key} to={tab.url} id={encodeURI(tab.title.split(' ')[0])}>
									<img src={tab.image.file.url} />
								</Link>
							))}

						</figure>
					</div>
					<div className="colmn-text">
						<ul>
							{props.sectionDetail.blockItems.map((tab, key) => (
								<li key={key}><Link to={tab.url} data-img={encodeURI("#" + tab.title.split(' ')[0])}>{tab.title}</Link></li>
							))}

						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}


export default tabSection
