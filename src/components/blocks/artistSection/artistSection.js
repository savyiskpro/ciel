import React from 'react';

const artistSection = (props) => {

	return (
		<div className="artist-section">
			<div className="container">
				<div className="text-box">
					<h5 data-aos="fade-in" data-aos-duration="2000">{props.sectionDetail.title}</h5>

					{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulTextBox") {
								return (
									<div key={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
										__html: item.content.childMarkdownRemark.html
									}}></div>
								)
							}
						})
					}
					{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulSeconderyNavigation") {
								return (
									<a key={key} href={item.url} className="btn">{item.title}</a>
								)
							}
						})
					}

				</div>

				<div className="art-box">
					{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulSectionBlock") {
								return (
									<div key={key} className="box" data-aos="fade-in" data-aos-duration="2000">
										{item.blockItems.map((image, key) => {
											if (image.__typename == "ContentfulImageHolder") {
												return (
													<figure key={key}>
														<img src={image.image.file.url} />
													</figure>
												)
											}
										})}

										<h6>{item.title}</h6>

										{item.blockItems.map((links, key) => {
											if (links.__typename == "ContentfulNavigationGroup") {
												return (
													<ul key={key}>
														{links.navigation.map((nav, key) => (
															<li key={key}><a href={nav.url}>{nav.title}</a></li>
														))}
													</ul>
												)
											}
										})}


									</div>
								)
							}
						})
					}


				</div>
			</div>
		</div>
	)

}

export default artistSection
