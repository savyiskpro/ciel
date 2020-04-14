import React, { Component } from 'react';
import Slider from "react-slick";
import $ from 'jquery';
// import slick from 'slick-carousel';

class communitySection extends Component {
	render() {
		console.log(this.props.sectionDetail.blockItems)

		return (
			<div className="event-section">
				<div className="container">
					{this.props.sectionDetail.blockItems.map((item, key) => (
						<a href={item.url} key={key} className="event-box" data-aos="fade-in" data-aos-duration="2000">
							<div className="colmn-img">
								<figure>
									<img src={item.image.file.url} />
								</figure>
							</div>
							<div className="colmn-text">
								<h2>{item.title}</h2>
								<h4>{item.subTitle}</h4>
								<p>{item.sortText}</p>

								<ul className="time-details">
									<li>{new Date(item.eventDate).toDateString()} </li>
									<li>{item.eventTiming}</li>
								</ul>
								<ul>
									<li><a href="#" className="btn-underline">google calendar</a></li>
									<li><a href="#" className="btn-underline">iCal</a></li>
								</ul>
							</div>
						</a>
					))}

				</div>
			</div>
		)
	}
}

export default communitySection
