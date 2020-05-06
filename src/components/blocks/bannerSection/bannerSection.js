import React from 'react';


const bannerSection = (props) => {
	console.log(props)
	return (
		<div className="cover-banner">
			{props.sectionDetail.video ? <figure>
				<video autoPlay loop>
					{props.sectionDetail.video.map((vid, key) => (
						<source key={key} src={vid.file.url} type={vid.file.contentType} />
					))}
					{/* <source src="app/video/ciel_hero_video.webm" type="video/webm" /> */}
					{/* <source src={props.sectionDetail.imageVideo.file.url} type="video/mp4" /> */}
					{/* <source src="app/video/ciel_hero_video.ogv" type="video/ogv" /> */}
				</video>
			</figure> : null}

			<div className="text-layer">
				<h2 data-aos="fade-right" data-aos-duration="2000">{props.sectionDetail.title}</h2>
				<h3 data-aos="fade-left" data-aos-duration="2000">{props.sectionDetail.subtitle}</h3>
			</div>
			<div className="logo">
				<img src={props.sectionDetail.logo.file.url} alt="logo" />
			</div>
		</div>
	)
}


export default bannerSection
