import React from 'react';

const happeningSection = (props) => {
	console.log(props);
	return (
		<div className="happenings-section">
			<div className="container">
				<h5 data-aos="fade-in" data-aos-duration="2000">{props.sectionDetail.title}</h5>
				<ul data-aos="fade-in" data-aos-duration="2000">
					{props.sectionDetail.blockItems[0].images.map((image, key) => (
						< li key={key} >
							<figure>
								<img src={image.file.url} />
							</figure>
						</li>
					))}


				</ul>
			</div>
		</div>
	)

}

export default happeningSection
