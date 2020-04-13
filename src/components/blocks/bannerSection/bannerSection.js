import React from 'react';


const bannerSection = (props) => {
	return (
		<div className="cover-banner">
			<figure>
				<video autoPlay loop>
					{/* <source src="app/video/ciel_hero_video.webm" type="video/webm" /> */}
					<source src={props.sectionDetail.imageVideo.file.url} type="video/mp4" />
					{/* <source src="app/video/ciel_hero_video.ogv" type="video/ogv" /> */}
				</video>
			</figure>
			<div className="text-layer">
				<h2 data-aos="fade-right" data-aos-duration="2000">{props.sectionDetail.title}</h2>
				<h3 data-aos="fade-left" data-aos-duration="2000">{props.sectionDetail.subtitle}</h3>
			</div>
			<div className="logo">
				<a href=""><img src={props.sectionDetail.logo.file.url} alt="logo" /></a>
			</div>
		</div>
	)
}


export default bannerSection
