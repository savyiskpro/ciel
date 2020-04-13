import React from 'react';

const bookSection = (props) => {
	return (
		<div className="book-section" data-aos="fade-in" data-aos-duration="2000">
			<div className="container">
				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulTextBox") {
							return (
								<div key={key} data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
									__html: item.content.childMarkdownRemark.html
								}}></div>
							)
						}
					})
				}
				{
					props.sectionDetail.blockItems.map((item, key) => {
						if (item.__typename == "ContentfulSeconderyNavigation") {
							return (
								<a key={key} href={item.url} className="btn">{item.title}</a>
							)
						}
					})
				}


			</div>
		</div>
	)

}

export default bookSection