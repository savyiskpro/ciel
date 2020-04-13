import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'gatsby'
// import slick from 'slick-carousel';
class sliderSection extends Component {
	settings = {
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 10000,
		fade: true
	};
	componentDidMount() {

	}

	render() {
		console.log(this.props.sectionDetail)
		return (
			<div className="event-section" data-aos="fade-in" data-aos-duration="2000">
				<div className="container">
					<div className="slider-group">
						{/* <span className="active-bar"></span> */}
						<div className="slider-section">
							<Slider {...this.settings}>
								{this.props.sectionDetail.blockItems.map((slide, key) => (
									<div key={key}>
										<div className="slide-box">
											<div className="colmn-img">
												<figure>
													<img src={slide.image.file.url} />
												</figure>
											</div>
											<div className="colmn-text">
												<span className="tag"> {slide.tag}</span>
												<h2>{slide.title}</h2>
												<h4>{slide.subTitle} </h4>
												<p>{slide.sortText}</p>
												<ul>
													<li><a href={slide.url} className="btn-underline">learn more</a></li>
													<li><a href='/community' className="btn-underline">see all events</a></li>
												</ul>
											</div>
										</div>
									</div>
								))}

							</Slider>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default sliderSection