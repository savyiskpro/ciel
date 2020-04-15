import React, { Component } from 'react';
import Slider from "react-slick";

class HappeningSection extends Component {
	settings = {
		centerMode: true,
		// centerPadding: '100px',
		dots: true,
		arrows: false
	};
	render() {
		return (
			<div className="happenings-section">
				<div className="container">
					<h5 data-aos="fade-in" data-aos-duration="2000">{this.props.sectionDetail.title}</h5>
					<ul data-aos="fade-in" data-aos-duration="2000">
						{this.props.sectionDetail.blockItems[0].images.map((image, key) => (
							<li key={key} >
								<figure>
									<img src={image.file.url} />
								</figure>
							</li>
						))}


					</ul>
					<div className="happening-slider">
						<Slider {...this.settings}>
							{this.props.sectionDetail.blockItems[0].images.map((image, key) => (
								<div key={key}>
									<figure>
										<img src={image.file.url} />
									</figure>
								</div>
							))}

						</Slider>
					</div>
				</div>
			</div>
		)
	}
}


export default HappeningSection
