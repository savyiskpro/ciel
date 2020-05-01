import React from 'react';

const partnerSection = (props) => {
	console.log(props)
	return (
		<div className="partner-section">
			<div className="container">
				{props.sectionDetail.blockItems.map((item, key) => (
					<div className="partner-group">
						<h5 data-aos="fade-in" data-aos-duration="2000">{item.title}</h5>
						{item.blockItems.map((textbox, key) => {
							if (textbox.__typename == 'ContentfulTextBox') {
								return (
									<div key={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
										__html: textbox.content.childMarkdownRemark.html
									}}></div>
								)
							}
						})}
						{item.blockItems.map((imageGroup, key) => {
							if (imageGroup.__typename == 'ContentfulImageGroup') {
								return (
									<ul key={key} data-aos="fade-in" data-aos-duration="2000">
										{imageGroup.images.map((image, key) => (
											<li key={key}>
												<a href={image.description} target="_blank">
													<figure>
														<img src={image.file.url} />
													</figure>
												</a>
											</li>
										))}
									</ul>
								)
							}
						})}

					</div>
				))}


			</div>
		</div>
	)

}

export default partnerSection
