import React, { Component } from 'react';
import Slider from "react-slick";
import $ from 'jquery';
import { Link } from 'gatsby';
// import slick from 'slick-carousel';

class communitySection extends Component {
	render() {
		console.log(this.props.sectionDetail.blockItems)

		return (
			<div className="event-section">
				<div className="container">
					{this.props.sectionDetail.blockItems.map((item, key) => {
						let getDate = new Date(item.eventDate).toDateString();
						let getDateSplit = getDate.split(' ')
						console.log(getDateSplit)
						return (

							<div key={key} className="event-box" data-aos="fade-in" data-aos-duration="2000" >
								<div className="colmn-img">
									<Link to={item.url} >
										<figure>
											<img src={item.image.file.url} />
										</figure>
									</Link>
								</div>
								<div className="colmn-text">
									<Link to={item.url} >
										<h2>{item.title}</h2>
										<h4>{item.subTitle}</h4>
										<p>{item.sortText}</p>

										<ul className="time-details">
											<li>{getDateSplit[0] + ' ' + getDateSplit[1] + ' ' + getDateSplit[2] + ', ' + getDateSplit[3]} </li>
											<li>{item.eventTiming}</li>
										</ul>
									</Link>
									<ul>
										<li><a href="https://calendar.google.com/calendar/r/eventedit" target="_blank" className="btn-underline">google calendar</a></li>
										<li><a href="#" className="btn-underline">iCal</a></li>
									</ul>
								</div>
							</div>
						)
					})}

				</div>
			</div>
		)
	}
}

export default communitySection
