import styles from '../../styles/components/MainNavigation.module.scss';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';

const myStyles = classNames.bind(styles);

export default function MainNavigation({ isPages }) {

	const router = useRouter();
	const [menu, setMenu] = useState(null);
	const [tab, setTab] = useState(null);
	// const [initialLoad, setInitialLoad] = useState(true);
	// const [menuAnimating, setMenuAnimating] = useState(null);

	// let PrevTab;

	//gsap
	// const menuContainer = useRef();
	const pink = useRef();
	const yellow = useRef();
	// const yellowTxt = useRef();
	const blue = useRef();
	// const blueTxt = useRef();
	const white = useRef();
	const whiteShape = useRef();
	// const closeX = useRef();
	// const menuTxt = useRef();
	// const tl = gsap.timeline({ paused: true });

	// Initial setup -----------//
	useEffect(() => {
		setNavigation();
		// collapseMenu();
		// tl.pause('end');
		// gsap.from(menuContainer.current, {
		// 	x: '+= 400',
		// 	ease: 'circ.easeIn',
		// 	duration: 1,
		// 	onComplete: function () {
		// 		setMenu(false);
		// 	},
		// });
	}, []);

	////
	//// MENU -------------------------------------------//
	// Menu state updated

	// useEffect(() => {
	// 	toggleMenu();
	// }, [menu]);

	// Menu exp/col button hit
	// const menuExpColBtnHandler = (e) => {
	// 	e.preventDefault();

	// 	// console.log('menuAnimating = ', menuAnimating);
	// 	if (menuAnimating) return;
	// 	setMenuAnimating(true);
	// 	if (menu === null) {
	// 		setMenu(false);
	// 	} else {
	// 		setMenu(!menu);
	// 	}
	// };

	// const toggleMenu = () => {
	// 	if (initialLoad && menu != null) {
	// 		setInitialLoad(false);
	// 		return;
	// 	}

		// switch (menu) {
		// 	case true:
		// 		// expandMenu();
		// 		// tl.play('start');
		// 		// console.log("Menu is set to - ",menu);
		// 		break;
		// 	case false:
		// 		// console.log("Menu is set to false - ",menu);
		// 		// collapseMenu();
		// 		// tl.play();
		// 		break;
		// 	case null:
		// 		break;
		// }
	// };

	// Collapse Animation for Nav Menu Bar
	// const collapseMenu = () => {
	// 	tl.addLabel('start', 0);
	// 	tl.addLabel('showText', 0.6);
	// 	tl.addLabel('end', 2);
	// 	tl.to(closeX.current, { autoAlpha: 0, duration: 0 }, 'start');
	// 	tl.to(yellowTxt.current, { autoAlpha: 0, duration: 0 }, 'start');
	// 	tl.to(blueTxt.current, { autoAlpha: 0, duration: 0 }, 'start');
	// 	tl.to(pink.current, { width: 0, autoAlpha: 0, duration: 0 }, 'start');
	// 	tl.to(
	// 		whiteShape.current,
	// 		{
	// 			borderRightWidth: '200px',
	// 			duration: 0,
	// 		},
	// 		'start',
	// 	);
	// 	tl.to(yellow.current, { x: '+=21', duration: 0 }, 'start');
	// 	tl.to(blue.current, { width: 86, duration: 0 }, 'start');
	// 	tl.to(
	// 		menuContainer.current,
	// 		{ width: 115, ease: 'expo.Out', duration: 0.5 },
	// 		'start',
	// 	);
	// 	tl.to(
	// 		white.current,
	// 		{
	// 			width: 86,
	// 			x: '+=21',
	// 			ease: 'expo.Out',
	// 			duration: 0.4,
	// 		},
	// 		'start+=.2',
	// 	);
	// 	tl.to(
	// 		yellow.current,
	// 		{ width: 4, ease: 'expo.Out', duration: 0.4 },
	// 		'start+=.2',
	// 	);
	// 	tl.to(
	// 		blue.current,
	// 		{ width: 4, ease: 'expo.Out', duration: 0.4 },
	// 		'start+=.2',
	// 	);
	// 	tl.to(
	// 		blue.current,
	// 		{ x: '+=21', ease: 'expo.Out', duration: 0.4 },
	// 		'start+=.2',
	// 	);
	// 	tl.to(
	// 		menuTxt.current,
	// 		{
	// 			autoAlpha: 1,
	// 			ease: 'circ.In',
	// 			duration: 0.3,
	// 			onComplete: () => {
	// 				setMenuAnimating(false);
	// 			},
	// 		},
	// 		'showText',
	// 	);
	// };

	// // Expand Animation for Nav Menu Bar
	// const expandMenu = () => {
	// 	tl.addLabel('start', 0);
	// 	tl.addLabel('showText', 0.8);
	// 	tl.addLabel('end', 2);

	// 	tl.to(menuTxt.current, { autoAlpha: 0, duration: 0 }, 'start');
	// 	tl.to(
	// 		menuContainer.current,
	// 		{ width: 386, ease: 'expo.InOut', duration: 0.5 },
	// 		'start',
	// 	);
	// 	tl.to(
	// 		yellow.current,
	// 		{ width: 114, x: '-= 21', ease: 'expo.Out', duration: 0.3 },
	// 		'start += 0.2',
	// 	);
	// 	tl.to(
	// 		blue.current,
	// 		{ width: 114, x: '-= 21', ease: 'expo.Out', duration: 0.3 },
	// 		'start += 0.2',
	// 	);
	// 	tl.to(
	// 		white.current,
	// 		{ x: '-= 21', ease: 'expo.In', duration: 0.3 },
	// 		'start += 0.2',
	// 	);
	// 	tl.to(white.current, { width: 51, duration: 0.3 }, 'showText -= 0.4');
	// 	tl.to(
	// 		whiteShape.current,
	// 		{
	// 			borderRightWidth: '42px',
	// 			ease: 'expo.InOut',
	// 			duration: 0.3,
	// 		},
	// 		'showText -= 0.4',
	// 	);

	// 	tl.to(
	// 		pink.current,
	// 		{ width: 106, autoAlpha: 1, duration: 0.2 },
	// 		'showText -= 0.4',
	// 	);
	// 	tl.to(
	// 		yellowTxt.current,
	// 		{ autoAlpha: 1, duration: 0.3 },
	// 		'showText -= 0.4',
	// 	);
	// 	tl.to(blueTxt.current, { autoAlpha: 1, duration: 0.4 }, 'showText -= 0.4');
	// 	tl.to(
	// 		closeX.current,
	// 		{
	// 			autoAlpha: 1,
	// 			ease: 'circ.In',
	// 			duration: 0.3,
	// 			onComplete: () => {
	// 				setMenuAnimating(false);
	// 			},
	// 		},
	// 		'showText',
	// 	);
	// };



	////
	//// TAB NAVIGATION -------------------------------------------//
	// initialLoad

	// Tab state updated
	////
	//// TAB NAVIGATION -------------------------------------------//
	// initialLoad

	// Tab state updated
	useEffect(() => {

		// console.log('TAB state update -- tab = ', tab);
		//  router.push('/');  //--- To Dashboard

		if (tab) {
			// console.log('tab selected');
			navigationRoutes(tab);
		} else {
			// console.log('No tab selected');
		}
	}, [tab]);

	const navigationRoutes = (route) => {
		switch (route) {
			case 1:
				// console.log('tab 1 effect');
				router.push('/portfolio');
				break;
			case 2:
				// console.log('tab 2 effect');
				router.push('/about');
				break;
			case 3:
				// console.log('tab 3 effect');
				break;
			default:
				break;
		}
	}

	// Tab clicked on ----------------------------
	const navigationHandler = (e) => {
		e.preventDefault();
		e.currentTarget.removeEventListener("click", navigationHandler);

		switch (e.currentTarget.id) {
			case "work":
				// console.log("Work -- PINK");
				yellow.current.addEventListener("click", navigationHandler);
				blue.current.addEventListener("click", navigationHandler);
				setTab(1);
				break;
			case "about":
				// console.log("About -- YELLOW");
				pink.current.addEventListener("click", navigationHandler);
				blue.current.addEventListener("click", navigationHandler);
				setTab(2);
				break;
			case "contact":
				// console.log("Contact -- BLUE");
				pink.current.addEventListener("click", navigationHandler);
				yellow.current.addEventListener("click", navigationHandler);
				setTab(3);
				break;
		}
	};

	// Default setup for navigation tab buttons
	const setNavigation = () => {
		setTab(0);
		setTabEventListener();
	};

	// Set tabs - active
	const setTabEventListener = () => {
		pink.current.addEventListener('click', navigationHandler);
		yellow.current.addEventListener('click', navigationHandler);
		blue.current.addEventListener('click', navigationHandler);
	};

	// Styles ----------------------------------------------------------------------->>

	// let mainNavContainer = myStyles({ expandedNav: true });
	// let menuExpand = myStyles({ menuCta: true });
	// let menuCollapse = myStyles({ closeXtext: true });

	// let navAboutText = myStyles({ blueTxt: true }, ``);
	let workTab = myStyles(
		{ work: true },
		`${tab == 1 ? 'workTabActive' : 'workTab'}`,
		`${menu === true ? '' : 'open'}`,
	);

	let aboutTab = myStyles(
		{ about: true },
		`${tab == 2 ? 'aboutTabActive' : 'aboutTab'}`,
		`${menu === true ? '' : 'open'}`,
	);

	let contactTab = myStyles(
		{ contact: true },
		`${tab === 3 ? 'contactTabActive' : 'contactTab'}`,
		`${menu === true ? '' : 'open'}`,
	);

	return (
		<nav className={styles.navContainer}>
			<div className={styles.navTabs}>
				<div id="work" className={workTab} ref={pink}>
					<div className={styles.pink}></div>
					<h2>My Work</h2>
					<hr></hr>
				</div>
				<div id="about" className={aboutTab} ref={yellow}>
					<div className={styles.yellow}></div>
					<h2>About Me</h2>
					<hr></hr>
				</div>
				<div id="contact" className={contactTab} ref={blue}>
					<div className={styles.blue}></div>
					<h2>Contact Me</h2>
					<hr></hr>
				</div>
				<div
					// onClick={menuExpColBtnHandler}
					className={styles.navMenu}
					ref={white}
				>
					<div className={styles.white} ref={whiteShape}></div>
					{/* <div className={menuExpand} ref={menuTxt}>
						<img src="/svg/txt_menu.svg" alt="menu text" />
					</div> */}
					{/* <div className={menuCollapse} ref={closeX}>
						X
					</div> */}
				</div>
			</div>
		</nav>
	);
}