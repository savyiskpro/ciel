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



const hasWindow = (typeof window !== 'undefined') ? true : false;
if (hasWindow) {
	window.loader = true
}



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
		if (hasWindow) {


			if (window.loader) {
				$('body').addClass('doNot-scroll')
			}
			var interval = setInterval(function () {
				if (document.readyState === 'complete') {
					clearInterval(interval);
					console.log(document.readyState);
					$('.loading-group').addClass('active');
					setTimeout(function () {
						$('.open-btn').addClass('active');
					}, 1000)

					$('.white-screen').fadeOut();
					if (window.innerWidth >= 992) {
						$('.loading-group').mousemove(function (e) {
							$('.btn-box').css({ 'left': e.clientX, top: e.clientY })
							// $('.open-btn').fadeIn();
						})
					}

				}
			}, 100);
			$('.open-btn').click(function () {
				$(this).removeClass('active');
				$('body').removeClass('doNot-scroll')
				window.loader = false;
				setTimeout(function () {
					$(".loading-group").fadeOut(500);
					AOS.init({
						once: true,
						// disable: 'mobile',
					});
				}, 500)
			})
			$('.loading-group').click(function () {
				window.loader = false;
				$('.open-btn').removeClass('active');
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
						$(this).siblings().children('a').removeClass('active');
						$(this).parent().addClass('active');
						var getImg = $(this).children('a').attr('data-img');
						$(getImg).addClass('active').siblings().removeClass('active');
					},
					function () {
						// $(this).siblings().children('a').removeClass('active');
						// $(this).parent().removeClass('active')

						// $('.navigation .colmn-img img:first').addClass('active');

					}
				)
				$('.navigation .inner-wrapper').hover(function () { }, function () {
					$('.navigation .colmn-text ul,.navigation .colmn-text ul li a').removeClass('active')
					// $('.navigation .colmn-text ul').removeClass('active')
				})
			}

			// tab sections

			$('.tab-section li:first,.tab-section figure img:first,.navigation .colmn-img a:first').addClass('active');




			$(window).scroll(function () {

				if ($(this).scrollTop() > $(this).height()) {
					$('header').addClass('header-fixed');
				}
				else {
					$('header').removeClass('header-fixed');
				}
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
				$('.featured-section .colmn-box').each(function () {
					// console.log($(this).index());
					if ($(this).index() < 8) {
						$(this).show()
					}

				})
				$('.team-section .btn-box .btn-underline').click(function (e) {
					e.preventDefault();

					$('.team-section .colmn-box').each(function () {
						// console.log($(this).index());
						if ($(this).index() > 6) {
							$(this).slideToggle();

						}

					})
					$('.team-section .flex').addClass('active')
					$(this).hide();

				})
				$('.featured-section .btn-box .btn-underline').click(function (e) {
					e.preventDefault();

					$('.featured-section .colmn-box').each(function () {
						// console.log($(this).index());
						if ($(this).index() > 7) {
							$(this).slideToggle();

						}

					})
					$('.featured-section .flex').addClass('active')
					$(this).hide();

				})
			}

		}

	}
	render() {
		let showLoader = true
		if (hasWindow) {
			showLoader = window.loader
		}
		console.log(this.props.headerData.navigationItems)
		return (
			<Holder>
				{showLoader ? <div className="loading-group">
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
				</div> : null}
				<div className="white-screen">

				</div>
				<header>
					<div className="container">
						<ul className="flex space-between items-align-center">
							<li><a href="" className="toggle-btn"><img src={menuBar} /></a></li>
							<li><Link to="/" className="navbar-brand"><img src={this.props.headerData.logo.file.url} /></Link></li>
							<li><Link className="book-btn" to="/book-now">{this.props.headerData.rightNavigation.title}</Link></li>
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
										<Link to={navImg.url} id={navImg.navigationImage ? encodeURI('nav' + navImg.title.split(' ')[0]) : ''} >
											<img key={key} src={navImg.navigationImage ? navImg.navigationImage.file.url : ''} />
										</Link>
									))}
								</figure>
							</div>
							<div className="colmn-text">
								<ul className="navbar-tabs">
									{this.props.headerData.navigationItems.map((nav, key) => {
										if (nav.__typename == "ContentfulSecondaryNavigation") {
											return <li key={key}><a href={nav.url} target="_blank" className="btn-underline">{nav.title}</a></li>
										}
										else {
											return <li key={key}><Link to={nav.url} data-img={nav.navigationImage ? encodeURI('#nav' + nav.title.split(' ')[0]) : ''} className={nav.extraClass ? nav.extraClass : null}>{nav.title}</Link></li>
										}

									})}


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

