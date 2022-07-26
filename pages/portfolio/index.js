import styles from '../../styles/pages/work.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const myStyles = classNames.bind(styles);

export default function PortfolioPage() {
	const router = useRouter();
	console.log(router.pathname);

	return (
		<div className={styles.workPage}>
			<div className={styles.workContent}>
				<div className={styles.top}>
					<div className={styles.tabLogo}>
						<img src="/svg/homeNav_work.svg" alt="About Me Logo" />
					</div>
					<div className={styles.subheader}>
						<h1>
							I design, animate, <span>&amp;</span> code. Bringing a mixture of
							diverse skills and experieces to all projects.
						</h1>
					</div>
				</div>
				<div className={styles.workThumb}>
					<h1>Website</h1>
					<div className={styles.thumbImage}></div>
					<p>Project 1</p>
				</div>
				<div className={styles.background}>
					<div className={styles.infoBorder}></div>
				</div>
				{/* <div className={styles.bottom}></div> */}
			</div>
		</div>
	);
}
