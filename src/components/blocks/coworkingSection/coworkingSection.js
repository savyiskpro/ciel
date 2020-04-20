import React from 'react';
import { Link } from 'gatsby';

const coworkingSection = (props) => {
	console.log(props)
	return (
		<div className="studio-section">
			<div className="container">
				{props.sectionDetail.blockItems.map((item, key) => (
					<div key={key} className="studio-box" data-aos="fade-in" data-aos-duration="2000">
						<figure>
							<Link to={item.url} >
								<img src={item.images[0].file.url} />
							</Link>
						</figure>
						<h2>{item.title}</h2>
						<div className="text-box">
							<div dangerouslySetInnerHTML={{
								__html: item.description.childMarkdownRemark.html
							}}></div>

						</div>
						<ul>
							<li><Link to={item.url} className="btn-underline">learn more</Link></li>
							<li><a href={item.bookUrl} target="_blank" className="btn-underline">book now</a></li>
						</ul>
					</div>
				))}


			</div>
		</div>
	)

}

export default coworkingSection
