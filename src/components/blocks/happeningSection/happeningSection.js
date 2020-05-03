import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';


class HappeningSection extends Component {
	settings = {
		centerMode: true,
		// centerPadding: '100px',
		dots: true,
		arrows: false,

	};
	state = {
		instaFeeds: [],
	}
	componentDidMount() {
		axios.get(`https://graph.instagram.com/me/media?fields=media,caption,media_url,thumbnail_url&access_token=IGQVJWUTJITjNqWHF1MDdiWlR1Tm0tRWxTT2tKUGQ5ZA3hKNWNYZAzlVUk5kOE4tSVo1ay1Ebm84LTVoTTF6LVRSb0U0bXdIZA1pKTFh1UmFhYVhQaWJYcnNJdHhkYWl1SGJtY2RqdmpFcExvU2dVc1kybAZDZD`)
			.then(res => {
				this.setState({
					instaFeeds: res.data.data.slice(0, 6)
				})
			})
	}
	render() {
		let feedImages = this.state.instaFeeds ? this.state.instaFeeds : []
		return (
			<div className="happenings-section">
				<div className="container">
					<h5 data-aos="fade-in" data-aos-duration="2000">{this.props.sectionDetail.title}</h5>
					<ul data-aos="fade-in" data-aos-duration="2000">
						{feedImages.map((image, key) => (
							<li key={key} >
								<figure>
									<img src={image.media_url} />
								</figure>
							</li>
						))}


					</ul>
					<div className="happening-slider">
						<Slider {...this.settings}>
							{feedImages.map((image, key) => (
								<div key={key}>
									<figure>
										<img src={image.media_url} />
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
