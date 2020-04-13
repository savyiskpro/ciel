
import React from 'react';

const backgroundImageSectioon = (props) => {
	console.log(props);
	return (
		<div className="background-image-seciton bg-control" style={{ "backgroundImage": "url(" + props.sectionDetail.backgroundImage.file.url + ")" }}>
			<div className="text-box">

				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulImageHolder") {
							return (
								<figure key={key} data-aos="fade-in" data-aos-duration="2000">
									<img src={item.image.file.url} />
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
