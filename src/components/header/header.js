import React, { Component } from 'react';
import './header.scss';
import { Link } from 'gatsby';
import Holder from '../../hoc/holder';
import menuBar from '../../assets/images/menu.svg';
import $ from 'jquery';
import AOS from 'aos';
import loadingImg from '../../assets/images/loading.png';
import loadingImgMobile from '../../assets/images/mobile-loading.png';
import loadingVideo from '../../assets/video/ciel_hero_video.mp4';
import cursorImg from '../../assets/images/cursor.png';



class Header extends Component {
	state = {
		showNav: false
	}
	navHendler = () => {
		this.setState((prevstate) => ({
			showNav: !prevstate.showNav
		}))
	}
	componentDidMount() {
		$('body').addClass('doNot-scroll')
		var interval = setInterval(function () {
			if (document.readyState === 'complete') {
				clearInterval(interval);
				console.log(document.readyState);
				// $('.open-btn').fadeIn();

			}
		}, 100);
		$('.open-btn').click(function () {
			$(this).addClass('active');
			$('.loading-group video').addClass('active')
			$('body').removeClass('doNot-scroll')
			setTimeout(function () {
				$(".loading-group").fadeOut(500);
				AOS.init({
					once: true,
					// disable: 'mobile',
				});
			}, 500)
		})
		$('.toggle-btn').click(function (e) {
			e.preventDefault();
			$('.navigation').fadeIn();
		});
		$('.close-btn').click(function (e) {
			e.preventDefault();
			$('.navigation').fadeOut();
		});
		if (window.innerWidth >= 767) {
			$('.navigation .colmn-text li').hover(
				function () {
					$(this).children('a').addClass('active');
					$(this).parent().addClass('active');
					var getImg = $(this).children('a').attr('data-img');
					$(getImg).addClass('active').siblings().removeClass('active');
				},
				function () {
					$(this).children('a').removeClass('active');
					$(this).parent().removeClass('active')
					// $('.navigation .colmn-img img:first').addClass('active');

				}
			)
		}
		// tab sections
		$('.tab-section li a').click(function (e) {
			e.preventDefault();
			var getImage = $(this).attr('href');
			$(getImage).addClass('active').siblings().removeClass('active');
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
		})
		$('.tab-section li:first,.tab-section figure img:first,.navigation .colmn-img img:first').addClass('active');




		$(window).scroll(function () {

			if ($(this).scrollTop() > $(this).height()) {
				$('header').addClass('header-fixed');
			}
			else {
				$('header').removeClass('header-fixed');
			}
		})


		$('.promo-box .promo-content .btn-close').click(function () {
			$('.promo-box').addClass('hide');
		})
		if (window.innerWidth >= 992) {
			$('.loading-group').mousemove(function (e) {
				$('.btn-box').css({ 'left': e.clientX, top: e.clientY })
				$('.open-btn').fadeIn();
			})
		}


		$('.loading-group').click(function () {
			$(this).addClass('active');
			$('.loading-group video').addClass('active')
			$('body').removeClass('doNot-scroll')
			setTimeout(function () {
				$(".loading-group").fadeOut(500);
				AOS.init({
					once: true,
					// disable: 'mobile',
				});
			}, 500)
		})
		if (location.pathname !== '/') {
			$('header').addClass('inner-header');
		}
		if (window.innerWidth <= 480) {
			$('.team-section .colmn-box').each(function () {
				// console.log($(this).index());
				if ($(this).index() < 7) {
					$(this).show()
				}

			})
			$('.team-section .btn-box .btn-underline').click(function (e) {
				e.preventDefault();

				$('.team-section .colmn-box').each(function () {
					// console.log($(this).index());
					if ($(this).index() > 7) {
						$(this).slideToggle();

					}

				})
				$('.team-section .flex').addClass('active')
				$(this).hide();

			})
		}



	}
	render() {
		console.log(this.props.headerData.navigationItems)
		return (
			<Holder>
				<div className="loading-group">
					<div className="background" style={{ "backgroundImage": "url(" + loadingImg + ")" }}>
					</div>
					<div className="background-mobile" style={{ "backgroundImage": "url(" + loadingImgMobile + ")" }}>

					</div>
					<div className="video-group">
						<video autoPlay loop>
							{/* <source src="app/video/ciel_hero_video.webm" type="video/webm" /> */}
							<source src={loadingVideo} type="video/mp4" />
							{/* <source src="app/video/ciel_hero_video.ogv" type="video/ogv" /> */}
						</video>
					</div>
					<div className="btn-box" id="openBtn">
						<button type="button" className="open-btn">EXPLORE</button>
					</div>
				</div>
				<header>
					<div className="container">
						<ul className="flex space-between items-align-center">
							<li><a href="" className="toggle-btn"><img src={menuBar} /></a></li>
							<li><a href="/" className="navbar-brand"><img src={this.props.headerData.logo.file.url} /></a></li>
							<li><a className="book-btn" href={this.props.headerData.rightNavigation.title}>{this.props.headerData.rightNavigation.title}</a></li>
						</ul>
					</div>
				</header>
				<div className="navigation">
					<div className="container">
						<a href="" className="close-btn">
							<span className="leftright"></span>
							<span className="rightleft"></span>

						</a>
						<div className="inner-wrapper">
							<div className="colmn-img">
								<figure>
									{this.props.headerData.navigationItems.map((navImg, key) => (
										<img key={key} id={navImg.navigationImage ? encodeURI('nav' + navImg.title) : ''} src={navImg.navigationImage ? navImg.navigationImage.fluid.src : ''} />
									))}
								</figure>
							</div>
							<div className="colmn-text">
								<ul className="navbar-tabs">
									{this.props.headerData.navigationItems.map((nav, key) => (
										<li key={key}><a href={nav.url} data-img={nav.navigationImage ? encodeURI('#nav' + nav.title) : ''} className={nav.extraClass ? nav.extraClass : null}>{nav.title}</a></li>
									))}

								</ul>
							</div>
						</div>
					</div>
				</div>
			</Holder>
		)
	}
}

export default Header;

