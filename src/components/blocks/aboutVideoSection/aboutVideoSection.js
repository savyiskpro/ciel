import React from 'react';

const aboutVideoSection = (props) => {
	return (
		<div className="about-video">
			<div className="container">
				<div className="text-box">
					<h5 data-aos="fade-in" data-aos-duration="2000">{props.title}</h5>
					<div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
						__html: props.sectionDetail.blockItems[0].content.childMarkdownRemark.html
					}}></div>

				</div>
				<figure data-aos="fade-in" data-aos-duration="2000">
					<iframe src="https://www.youtube.com/embed/eA5wg_sKOvo" frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen></iframe>
				</figure>
			</div>
		</div>
	)

}

export default aboutVideoSection
