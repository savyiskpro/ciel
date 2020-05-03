import React from 'react';

const aboutVideoSection = (props) => {
	return (
		<div className="about-video">
			<div className="container">
				<div className="text-box">
					<h5 data-aos="fade-in" data-aos-duration="2000">{props.sectionDetail.title}</h5>
					{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulTextBox") {
								return <div key={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
									__html: item.content.childMarkdownRemark.html
								}}></div>
							}
						})
					}
				</div>
				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulAssets") {
							return <figure key={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
								__html: item.items.childMarkdownRemark.html
							}}>
								{/* <iframe src={"https://www.youtube.com/embed/eA5wg_sKOvo"} frameBorder="0"
									allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe> */}
							</figure>
						}
					})
				}

			</div>
		</div>
	)

}

export default aboutVideoSection
