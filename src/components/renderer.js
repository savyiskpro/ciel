import React from 'react';

const components = {
	ContentfulTextBox: function (content) {
		return <div data-aos="fade-in" data-aos-duration="2000" dangerouslySetInnerHTML={{
			__html: content.data.content.childMarkdownRemark.html
		}}></div>
	},
	ContentfulSeconderyNavigation: function (nav) {
		return <a href={nav.data.url} className="btn-underline">{nav.data.title}</a>
	},
	ContentfulNavigation: function (nav) {
		return <a href={nav.data.url} className="btn-underline">{nav.data.title}</a>
	},
	ContentfulImageHolder: function (image) {
		return <figure><img src={image.data.image.file.url} /></figure>
	}
	// ContentfulTextBlock: textBlock,
	// ContentfulBannerTitle: function (title) {
	// 	return <div className="section-heading"><h2>{title.data.title}</h2></div>
	// },
	// ContentfulSectionTitle: function (title) {
	// 	return <h4 className="line-heading">{title.data.title}</h4>
	// },
	// ContentfulAccordionBox: accordionSection,
	// ContentfulSectionImage: sectionImage,
	// ContentfulCardBox: cardBox,
	// ContentfulContentBox: contentBox,
	// ContentfulContactDetailBox: contactDetailBox,
	// ContentfulSliderSection: sliderSection
}

class Renderer extends React.Component {
	render() {
		var views = this.props.views.map((view, key) => {
			if (components[view.internal.type] != undefined) {
				let View = components[view.internal.type]
				return <View key={key} data={view}></View>
			}

		})
		return views
	}


}
export default Renderer;
