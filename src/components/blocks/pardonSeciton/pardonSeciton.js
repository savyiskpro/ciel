import React from 'react';
import promoIcon from '../../../assets/images/lips.png';
import closeIcon from '../../../assets/images/close-icon.svg';
import Renderer from '../../renderer';
import { Link } from 'gatsby';


const backgroundImageSection = (props) => {
	console.log(props)
	return (
		<div className="outer-group">
			<div className="pardon-seciton bg-control" style={{ "backgroundImage": "url(" + props.sectionDetail.backgroundImage.file.url + ")" }}>
				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulPromo") {
							return (
								<div key={key} className="promo-box">
									<div className="promo-content">
										<span className="btn-close">
											<img src={closeIcon} />
										</span>

										<div className="text-box">
											<h5>{item.title}</h5>
											<h4>{item.subTitle}</h4>
											{/* <a target="_blank" href={item.link.url} className="btn-underline">{item.link.title}</a> */}
											<a href="/" className="btn-underline">learn more</a>
										</div>
									</div>
									<span className="promo-icon">
										<img src={promoIcon} />
										<p>{item.buttonName}</p>
									</span>
								</div>
							)


						}
					})
				}


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
					{/* <Renderer views={props.sectionDetail.blockItems} /> */}
					{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulTextBox") {
								return (
									<div key={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
										__html: item.content.childMarkdownRemark.html
									}}>

									</div>
								)
							}
						})
					}{
						props.sectionDetail.blockItems.map((item, key) => {
							if (item.__typename == "ContentfulNavigation") {
								return <Link key={key} to={item.url} className="btn-underline">{item.title}</Link>



							}
						})
					}
				</div>
			</div>
		</div>

	)
}


export default backgroundImageSection
