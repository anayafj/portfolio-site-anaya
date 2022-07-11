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
	const yellow = useRef();
	const blue = useRef();
	const white = useRef();
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
		tl.to(
			menuContainer.current,
			{ width: 115, ease: 'expo.InOut', duration: 0.4 },
			'start',
		);
		tl.to(
			white.current,
			{ width: 120, ease: 'expo.Out', duration: 0.2 },
			'start',
		);
		tl.to(
			yellow.current,
			{ width: 4, x: '-= 74', ease: 'expo.InOut', duration: 0.4 },
			'start += 0.2',
		);
		tl.to(
			blue.current,
			{ width: 4, x: '-= 74', ease: 'expo.InOut', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(
			white.current,
			{ x: '-= 74', ease: 'expo.InOut', duration: 0.3 },
			'start += 0.2',
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
			{ width: 114, x: '+= 74', ease: 'expo.Out', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(
			blue.current,
			{ width: 114, x: '+= 74', ease: 'expo.Out', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(
			white.current,
			{ x: '+= 74', ease: 'expo.In', duration: 0.3 },
			'start += 0.2',
		);
		tl.to(white.current, { width: 80, duration: 0.3 }, 'showText -= 0.4');
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

	// Styles ----------------------------------------------------------------------->>

	let mainNavContainer = myStyles({ expandedNav: true });
	let menuExpand = myStyles({ menuCta: true });
	let menuCollapse = myStyles({ closeXtext: true });

	return (
		<nav className={styles.navContainer}>
			<div className={mainNavContainer} ref={menuContainer}>
				<div className={styles.expNavBg}>
					<div className={styles.work} ref={yellow}>
						<div className={styles.yellow}></div>
						<div className={styles.yellowTxt}>
							<img src="/svg/txt_work.svg" alt="Work tab txt" />
						</div>
					</div>
					<div className={styles.about} ref={blue}>
						<div className={styles.blue}></div>
						<div className={styles.blueTxt}>
							<img src="/svg/txt_about.svg" alt="About tab txt" />
						</div>
					</div>
					<div
						onClick={menuExpColBtnHandler}
						className={styles.navMenu}
						ref={white}
					>
						<div className={styles.white}></div>
						<div className={menuExpand} ref={menuTxt}>
							<img src="/svg/arrow_left.svg" alt="double arrows left" />
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
