import React from 'react';
import Renderer from '../../renderer';


const founderSection = (props) => {

	return (
		<div className="founder-detail">
			<div className="container">
				{props.sectionDetail.blockItems.map((item, key) => (
					<div key={key} className="detail-box">
						<h5 data-aos="fade-in" data-aos-duration="2000">{item.title}</h5>

						<div key={key} className="flex">
							{item.blockItems.map((innerItem, key) => {
								if (innerItem.__typename == 'ContentfulImageHolder') {
									return <div key={key} className="colmn-img">
										<figure data-aos="fade-in" data-aos-duration="2000">
											<img src={innerItem.image.file.url} />
										</figure>
									</div>
								}
								if (innerItem.__typename == 'ContentfulTextBox') {
									return <div className="colmn-text" data-aos="fade-in" data-aos-duration="2000">
										<h5>{item.title}</h5>
										<div dangerouslySetInnerHTML={{
											__html: innerItem.content.childMarkdownRemark.html
										}}></div>

									</div>
								}
							})}



						</div>


					</div>
				))}


			</div>
		</div>
	)

}

export default founderSection
