import React from 'react';
import promoIcon from '../../../assets/images/lips.png';
import closeIcon from '../../../assets/images/close-icon.svg';
import Renderer from '../../renderer';


const backgroundImageSection = (props) => {
	return (
		<div className="pardon-seciton bg-control" style={{ "backgroundImage": "url(" + props.sectionDetail.backgroundImage.file.url + ")" }}>
			<div className="promo-box">
				<div className="promo-content">
					<span className="btn-close">
						<img src={closeIcon} />
					</span>

					<div className="text-box">
						<h5>FEB</h5>
						<h4>Get 15% off all in house rentals.</h4>
						<a href="#" className="btn-underline">learn more</a>
					</div>
				</div>
				<span className="promo-icon">
					<img src={promoIcon} />
					<p>feb deal</p>
				</span>
			</div>

			<div className="section-text left">
				<h2 data-aos="fade-right" data-aos-duration="1000">pardon</h2>
			</div>
			<div className="section-text right">
				<h2 data-aos="fade-left" data-aos-duration="1000">our</h2>
			</div>
			<div className="section-text bottom" >
				<h2 data-aos="fade-right" data-aos-duration="1000">french</h2>
			</div>
			<div className="text-box">
				<Renderer views={props.sectionDetail.blockItems} />
			</div>
		</div>

	)
}


export default backgroundImageSection
