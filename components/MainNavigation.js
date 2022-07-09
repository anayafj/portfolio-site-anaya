import styles from '../styles/components/MainNavigation.module.scss';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import classNames from 'classnames/bind';

const myStyles = classNames.bind(styles);

export default function MainNavigation() {
	const [menu, setMenu] = useState(null);
	const [initialLoad, setInitialLoad] = useState(true);

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
		console.log('useEffect initial setup');
		// console.log('tl = ', tl);
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

	useEffect(() => {
		console.log('useEffect menu updated');

		toggleMenu();
	}, [menu]);

	const toggleMenu = () => {
		console.log('toggleMenu -- menu = ', menu);
		console.log('initialLoad  = ', initialLoad);
		if (initialLoad && menu != null) {
			setInitialLoad(false);
			return;
		}
		// collapseMenu();
		switch (menu) {
			case true:
				console.log('Menu - true');
				console.log('tl = ', tl);
				expandMenu();
				tl.play('start');
				// tl.reverse('end');
				break;
			case false:
				console.log('Menu - false');
				collapseMenu();
				tl.play();
				// tl.reverse('end');
				break;
			case null:
				console.log('Menu - null');
				break;
		}
	};

	const collapseMenu = () => {
		tl.addLabel('start', 0);
		tl.addLabel('showText', 1);
		tl.addLabel('end', 2);
		tl.to(menuContainer.current, { width: 115, duration: 1 }, 'start');
		tl.to(closeX.current, { autoAlpha: 0, duration: 0.3 }, 'start');
		tl.to(
			yellow.current,
			{ width: 4, x: '-= 74', duration: 0.6 },
			'start += 0.2',
		);
		tl.to(
			blue.current,
			{ width: 4, x: '-= 74', duration: 0.6 },
			'start += 0.2',
		);
		tl.to(
			white.current,
			{ width: 90, x: '-= 74', duration: 0.6 },
			'start += 0.2',
		);
		tl.to(menuTxt.current, { autoAlpha: 1, duration: 0.5 }, 'showText');
	};

	const expandMenu = () => {
		tl.addLabel('start', 0);
		tl.addLabel('showText', 1);
		tl.addLabel('end', 2);
		tl.to(menuTxt.current, { autoAlpha: 0, duration: 0.3 }, 'start');
		tl.to(menuContainer.current, { width: 386, duration: 1 }, 'start');
		tl.to(
			yellow.current,
			{ width: 114, x: '+= 74', duration: 0.6 },
			'start += 0.2',
		);
		tl.to(
			blue.current,
			{ width: 114, x: '+= 74', duration: 0.6 },
			'start += 0.2',
		);
		tl.to(
			white.current,
			{ width: 80, x: '+= 74', duration: 0.6 },
			'start += 0.2',
		);
		tl.to(closeX.current, { autoAlpha: 1, duration: 0.5 }, 'showText');
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
					</div>
					<div className={styles.about} ref={blue}>
						<div className={styles.blue}></div>
					</div>
					<div
						onClick={() => {
							if (menu === null) {
								setMenu(false);
							} else {
								setMenu(!menu);
							}
						}}
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
