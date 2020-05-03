import React from 'react';

const artistSection = (props) => {
	console.log(props)
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
							if (item.__typename == "ContentfulSecondaryNavigation") {
								return (
									<a key={key} target="_blank" href={item.url} className="btn">{item.title}</a>
								)
							}
						})
					}

				</div>

				<div className="art-box">
					{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulArtist") {
								return (
									<div key={key} className="box" data-aos="fade-in" data-aos-duration="2000">
										<figure>
											<img src={item.image.file.url} />
										</figure>

										<h6>{item.name}</h6>
										<ul>
											{item.website == "#" ? null : <li><a href={'http://' + item.website} target="_blank">{item.website}</a></li>}
											{item.instagramHandle ? <li><a href={'http://' + item.instagramUrl} target="_blank">{item.instagramHandle}</a></li> : null}
										</ul>
										<div className="content-box" dangerouslySetInnerHTML={{
											__html: item.content.childMarkdownRemark.html
										}}>
										</div>



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
