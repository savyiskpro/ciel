import React from 'react';
import textBg from '../../../assets/images/decorative-text-full.svg';


const textBgSection = (props) => {
	console.log(props);
	let sectionImage = props.sectionDetail.blockItems.find(item => {
		if (item.__typename == "ContentfulImageHolder") {
			return item
		}
	})
	let sectionText = props.sectionDetail.blockItems.find(item => {
		if (item.__typename == "ContentfulTextBox") {
			return item
		}
	})
	return (
		<div className="text-bg-section">
			<div className="container-sm">
				<div className="colmn-img">
					<figure data-aos="fade-right" data-aos-duration="1000">
						<img src={textBg} alt="" />
					</figure>
					<figure data-aos="fade-left" data-aos-duration="1000">
						<img src={sectionImage.image.file.url} />

					</figure>
				</div>
				<div className="colmn-text">

					<div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
						__html: sectionText.content.childMarkdownRemark.html

					}}></div>

				</div>
			</div>
		</div>

	)
}


export default textBgSection
