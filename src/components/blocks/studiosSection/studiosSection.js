import React from 'react';

const studiosSection = (props) => {
	console.log(props)
	return (
		<div className="studio-section">
			<div className="container">
				{props.sectionDetail.blockItems.map((item, key) => (
					<div key={key} className="studio-box" data-aos="fade-in" data-aos-duration="2000">
						<figure>
							<img src={item.images[0].file.url} />
						</figure>
						<h2>{item.title}</h2>
						<div className="text-box">
							<div dangerouslySetInnerHTML={{
								__html: item.description.childMarkdownRemark.html
							}}></div>

						</div>
						<ul>
							<li><a href={item.url} className="btn-underline">learn more</a></li>
							<li><a href={item.bookUrl} className="btn-underline">book now</a></li>
						</ul>
					</div>
				))}


			</div>
		</div>
	)

}

export default studiosSection
