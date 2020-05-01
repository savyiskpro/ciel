import React from 'react';

const joinSection = (props) => {

	let contentBox = props.sectionDetail.blockItems.find(content => {
		if (content.internal.type == "ContentfulTextBox") {
			return content
		}
	})
	let sectionImages = props.sectionDetail.blockItems.filter(image => {
		if (image.internal.type == "ContentfulImageHolder") {
			return image
		}
	})
	let sectionLink = props.sectionDetail.blockItems.find(link => {
		if (link.internal.type == "ContentfulSecondaryNavigation") {
			return link
		}
	})

	return (
		<div className="join-section">
			<div className="flex">
				<div className="colmn-text">
					<figure>
						<img src={sectionImages[0].image.file.url} />
					</figure>
					<div className="text-box" data-aos="fade-in" data-aos-duration="2000">
						<h2>{props.sectionDetail.title}</h2>
						<div dangerouslySetInnerHTML={{
							__html: contentBox.content.childMarkdownRemark.html

						}}>
						</div>
						<a target="_blank" href={sectionLink.url} className="btn-underline">{sectionLink.title}</a>
					</div>
				</div>
				<div className="colmn-heading" data-aos="fade-in" data-aos-duration="2000">
					<h2>{props.sectionDetail.title}</h2>
					{sectionImages[1] ? <figure>
						<img src={sectionImages[1].image.file.url} />
					</figure> : null}

				</div>
			</div>
		</div>


	)
}


export default joinSection
