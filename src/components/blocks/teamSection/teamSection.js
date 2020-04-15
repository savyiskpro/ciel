import React from 'react';

const teamSection = (props) => {

	return (
		<div className="team-section">
			<div className="container">
				<h4 data-aos="fade-in" data-aos-duration="2000">{props.sectionDetail.title}</h4>
				<div className="flex space-between" data-aos="fade-in" data-aos-duration="2000">
					{props.sectionDetail.blockItems.map((item, key) => (
						<div key={key} className="colmn-box">
							<figure>
								<img src={item.image.file.url} />
							</figure>
							<h5>{item.name}</h5>
							<div dangerouslySetInnerHTML={{
								__html: item.description.childMarkdownRemark.html
							}}></div>
						</div>
					))}


				</div>
				<div className="btn-box">
					<a href="#" className="btn-underline">view more</a>
				</div>
			</div>
		</div>
	)

}

export default teamSection
