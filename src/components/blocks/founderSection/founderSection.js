import React from 'react';

const founderSection = (props) => {

	return (
		<div className="founder-detail">
			<div className="container">
				{props.sectionDetail.blockItems.map((item, key) => (
					<div key={key} className="detail-box">
						<h5 data-aos="fade-in" data-aos-duration="2000">{item.title}</h5>

						<div key={key} className="flex">
							{item.blockItems[0].__typename == 'ContentfulImageHolder' ? <div className="colmn-img">
								<figure data-aos="fade-in" data-aos-duration="2000">
									<img src={item.blockItems[0].image.file.url} />
								</figure>
							</div> : <div className="colmn-img">
									<figure data-aos="fade-in" data-aos-duration="2000">
										<img src={item.blockItems[1].image.file.url} />
									</figure>
								</div>}
							{item.blockItems[0].__typename == 'ContentfulTextBox' ?
								<div className="colmn-text" data-aos="fade-in" data-aos-duration="2000">
									<h5>{item.title}</h5>
									<div dangerouslySetInnerHTML={{
										__html: item.blockItems[0].content.childMarkdownRemark.html
									}}></div>

								</div> :
								<div className="colmn-text" data-aos="fade-in" data-aos-duration="2000">
									<h5>{item.title}</h5>
									<div dangerouslySetInnerHTML={{
										__html: item.blockItems[1].content.childMarkdownRemark.html
									}}></div>

								</div>}


						</div>


					</div>
				))}


			</div>
		</div>
	)

}

export default founderSection
