import React from 'react';
import { Link } from 'gatsby';
const cielSection = (props) => {
	console.log(props)
	return (
		<div className="ciel-section" data-aos="fade-in" data-aos-duration="2000">
			<div className="container">
				<div className="bg-section bg-control" style={{ "backgroundImage": "url(" + props.sectionDetail.backgroundImage.file.url + ")" }}>
					<div className="text-box top">
						<h2>C</h2>
					</div>
					<div className="text-box right">
						<h2>I</h2>
					</div>
					<div className="text-box left">
						<h2>E</h2>
					</div>
					<div className="text-box bottom">
						<h2>L</h2>
					</div>
					<div className="text-section">
						<h3>{props.sectionDetail.title} </h3>

						{
							props.sectionDetail.blockItems.map((item, key) => {
								if (item.__typename == "ContentfulSeconderyNavigation") {
									return (
										<Link key={key} to={item.url} className="btn">{item.title}</Link>
									)
								}
							})
						}
					</div>
				</div>
			</div>
		</div>
	)

}

export default cielSection
