import styles from '../styles/components/MainNavigation.module.scss';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames/bind';

const myStyles = classNames.bind(styles);

export default function MainNavigation() {
	const [menu, setMenu] = useState(null);
	const [initialLoad, setInitialLoad] = useState(true);
	const [menuAnimating, setMenuAnimating] = useState(null);

	//gsap
	const menuContainer = useRef();
	const pink = useRef();
	const yellow = useRef();
	const yellowTxt = useRef();
	const blue = useRef();
	const blueTxt = useRef();
	const white = useRef();
	const whiteShape = useRef();
	const closeX = useRef();
	const menuTxt = useRef();
	const tl = gsap.timeline({ paused: true });

	// Initial setup -----------//
	useEffect(() => {
		collapseMenu();
		tl.pause('end');
		gsap.from(menuContainer.current, {
			x: '+= 400',
			ease: 'circ.easeIn',
			duration: 1,
			onComplete: function () {
				setMenu(false);
			},
		});
	}, []);

	// Menu state updated
	useEffect(() => {
		toggleMenu();
	}, [menu]);

	// Menu exp/col button hit
	const menuExpColBtnHandler = (e) => {
		e.preventDefault();

		console.log('menuAnimating = ', menuAnimating);
		if (menuAnimating) return;
		setMenuAnimating(true);
		if (menu === null) {
			setMenu(false);
		} else {
			setMenu(!menu);
		}
	};

	const toggleMenu = () => {
		if (initialLoad && menu != null) {
			setInitialLoad(false);
			return;
		}

		switch (menu) {
			case true:
				expandMenu();
				tl.play('start');
				break;
			case false:
				collapseMenu();
				tl.play();
				break;
			case null:
				break;
		}
	};

	// Collapse Animation for Nav Menu Bar
	const collapseMenu = () => {
		tl.addLabel('start', 0);
		tl.addLabel('showText', 0.6);
		tl.addLabel('end', 2);
		tl.to(closeX.current, { autoAlpha: 0, duration: 0 }, 'start');
		tl.to(yellowTxt.current, { autoAlpha: 0, duration: 0 }, 'start');
		tl.to(blueTxt.current, { autoAlpha: 0, duration: 0 }, 'start');
		tl.to(pink.current, { width: 0, autoAlpha: 0, duration: 0 }, 'start');
		tl.to(
			yellow.current,
			{ width: 4, x: '+=21', ease: 'expo.InOut', duration: 0.4 },
			'start',
		);
		tl.to(
			blue.current,
			{ width: 4, x: '+=21', ease: 'expo.InOut', duration: 0.2 },
			'start',
		);
		tl.to(
			whiteShape.current,
			{
				borderRightWidth: '320px',
				duration: 0,
			},
			'start',
		);
		tl.to(
			menuContainer.current,
			{ width: 115, ease: 'expo.Out', duration: 0.6 },
			'start += 0.1',
		);
		tl.to(
			white.current,
			{
				width: 86,
				x: '+=21',
				ease: 'expo.Out',
				duration: 0.5,
			},
			'start += 0.1',
		);
		tl.to(
			whiteShape.current,
			{
				borderRightWidth: '76px',
				ease: 'expo.Out',
				duration: 1,
			},
			'start += 0.1',
		);
		tl.to(
			menuTxt.current,
			{
				autoAlpha: 1,
				ease: 'circ.In',
				duration: 0.3,
				onComplete: () => {
					setMenuAnimating(false);
				},
			},
			'showText',
		);
	};

	// Expand Animation for Nav Menu Bar
	const expandMenu = () => {
		tl.addLabel('start', 0);
		tl.addLabel('showText', 0.8);
		tl.addLabel('end', 2);

		tl.to(menuTxt.current, { autoAlpha: 0, duration: 0 }, 'start');
		tl.to(
			menuContainer.current,
			{ width: 386, ease: 'expo.InOut', duration: 0.5 },
			'start',
		);
		tl.to(
			yellow.current,
			{ width: 114, x: '-= 21', ease: 'expo.Out', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(
			blue.current,
			{ width: 114, x: '-= 21', ease: 'expo.Out', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(
			white.current,
			{ x: '-= 21', ease: 'expo.In', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(white.current, { width: 51, duration: 0.3 }, 'showText -= 0.4');
		tl.to(
			whiteShape.current,
			{
				borderRightWidth: '42px',
				ease: 'expo.InOut',
				duration: 0.3,
			},
			'showText -= 0.4',
		);

		tl.to(
			pink.current,
			{ width: 106, autoAlpha: 1, duration: 0.2 },
			'showText -= 0.4',
		);
		tl.to(
			yellowTxt.current,
			{ autoAlpha: 1, duration: 0.3 },
			'showText -= 0.4',
		);
		tl.to(blueTxt.current, { autoAlpha: 1, duration: 0.4 }, 'showText -= 0.4');
		tl.to(
			closeX.current,
			{
				autoAlpha: 1,
				ease: 'circ.In',
				duration: 0.3,
				onComplete: () => {
					setMenuAnimating(false);
				},
			},
			'showText',
		);
	};

	const navigationHandler = (e) => {
		// console.log('navigationHandler --- e = ', e.target.id);
		e.preventDefault();

		switch (e.target.id) {
			case 'home':
				console.log('Home tab hit');
				break;
			case 'work':
				console.log('Work tab hit');
				break;
			case 'about':
				console.log('About tab hit');
				break;
		}
	};

	// Styles ----------------------------------------------------------------------->>

	let mainNavContainer = myStyles({ expandedNav: true });
	let menuExpand = myStyles({ menuCta: true });
	let menuCollapse = myStyles({ closeXtext: true });

	return (
		<nav className={styles.navContainer}>
			<div className={mainNavContainer} ref={menuContainer}>
				<div className={styles.expNavBg}>
					<div
						onClick={navigationHandler}
						id="home"
						className={styles.home}
						ref={pink}
					>
						<div className={styles.pinkTxt}>
							<img src="/svg/txt_home.svg" alt="Home tab txt" />
						</div>
						<hr></hr>
					</div>
					<div
						onClick={navigationHandler}
						id="work"
						className={styles.work}
						ref={yellow}
					>
						<div className={styles.yellow}></div>
						<div className={styles.yellowTxt} ref={yellowTxt}>
							<img src="/svg/txt_work.svg" alt="Work tab txt" />
						</div>
						<hr></hr>
					</div>
					<div
						onClick={navigationHandler}
						id="about"
						className={styles.about}
						ref={blue}
					>
						<div className={styles.blue}></div>
						<div className={styles.blueTxt} ref={blueTxt}>
							<img src="/svg/txt_about.svg" alt="About tab txt" />
						</div>
						<hr></hr>
					</div>
					<div
						onClick={menuExpColBtnHandler}
						className={styles.navMenu}
						ref={white}
					>
						<div className={styles.white} ref={whiteShape}></div>
						<div className={menuExpand} ref={menuTxt}>
							<img src="/svg/txt_menu.svg" alt="menu text" />
						</div>
						<div className={menuCollapse} ref={closeX}>
							X
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
