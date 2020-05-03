import React from 'react';
import { Link } from 'gatsby';
import closeIcon from '../../../assets/images/close-icon.svg';
import promoIcon from '../../../assets/images/lips.png';
const promo = (props) => {
	console.log(props)
	return (
		<div className="promo-box">
			<div className="promo-content">
				<span className="btn-close">
					<img src={closeIcon} />
				</span>

				<div className="text-box">
					<h5>{props.sectionDetail.title}</h5>
					<h4>{props.sectionDetail.subTitle}</h4>
					{/* <a target="_blank" href={item.link.url} className="btn-underline">{item.link.title}</a> */}
					<a href="/" className="btn-underline">learn more</a>
				</div>
			</div>
			<span className="promo-icon">
				<img src={promoIcon} />
				<p>{props.sectionDetail.buttonName}</p>
			</span>
		</div>

	)

}

export default promo
