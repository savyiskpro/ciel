import React from 'react';
import Holder from '../../../hoc/holder';



const innerBanner = (props) => {
	console.log(props)
	return (
		<div className="inner-banner">
			<figure>
				{props.sectionDetail.imageVideo.file.contentType.split('/')[0] == 'image' ? <img src={props.sectionDetail.imageVideo.file.url} /> : <video autoPlay loop>
					{/* <source src="app/video/ciel_hero_video.webm" type="video/webm" /> */}
					<source src={props.sectionDetail.imageVideo.file.url} type="video/mp4" />
					{/* <source src="app/video/ciel_hero_video.ogv" type="video/ogv" /> */}
				</video>}

			</figure>
			<div className="text-layer">
				<h2 data-aos="fade-left" data-aos-duration="2000">{props.sectionDetail.title == 'community' ? <Holder><span>communit</span><span>y</span></Holder> : <span>{props.sectionDetail.title}</span>}</h2>
				<h3 data-aos="fade-left" data-aos-duration="2000">{props.sectionDetail.subtitle}</h3>
			</div>

		</div>
	)
}


export default innerBanner
