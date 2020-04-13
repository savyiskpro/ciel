import React from 'react';
import './defaultLayout.scss';
import Holder from '../../../hoc/holder';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { graphql } from 'gatsby'
class DefaultLayout extends React.Component {


	render() {
		console.log(this.props)
		return <Holder>
			<Header headerData={this.props.headerData} />
			{this.props.children}
			<Footer footerData={this.props.footerData} />
		</Holder>

	}

}
export default DefaultLayout

