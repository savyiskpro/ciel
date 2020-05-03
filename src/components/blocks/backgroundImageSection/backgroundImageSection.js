
import React from 'react';

const backgroundImageSectioon = (props) => {
	let getLogoUrl = props.sectionDetail.blockItems.find(getUrl => {
		if (getUrl.__typename == 'ContentfulSecondaryNavigation') {
			return getUrl
		}
	})
	return (
		<div className="background-image-seciton bg-control" style={{ "backgroundImage": "url(" + props.sectionDetail.backgroundImage.file.url + ")" }}>
			<div className="text-box">

				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulImageHolder") {
							return (
								<figure key={key} data-aos="fade-in" data-aos-duration="2000">
									<a href={getLogoUrl.url} target="_blank">


										<img src={item.image.file.url} />
									</a>
								</figure>
							)
						}
					})
				}
				<h4 data-aos="fade-in" data-aos-duration="2000">{props.sectionDetail.title}</h4>
				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulTextBox") {
							return (
								<div ley={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
									__html: item.content.childMarkdownRemark.html
								}}>

								</div>
							)
						}
					})
				}

			</div>
		</div>
	)

}

export default backgroundImageSectioon
