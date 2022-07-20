import styles from '../styles/pages/about.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const myStyles = classNames.bind(styles);

export default function AboutPage() {
	const [data, setData] = useState([]);

	const getData = () => {
		fetch('aboutMe.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				// console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				// console.log(myJson);
				setData(myJson);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className={styles.aboutPage}>
			{/* <div className={styles.aboutPage_background}></div> */}
			<div className={styles.standingGuy}>
				<img src="/svg/peep_standing.svg" alt="illustrated person" />
			</div>
			<div className={styles.aboutContent}>
				<div className={styles.top}>
					<div className={styles.lockup}>
						<div className={styles.photo}></div>
						<div className={styles.name}>
							<img src="/svg/logo_name_sm.svg" alt="Francisco Anaya" />
						</div>
					</div>
					<div className={styles.linkedIn}>
						<img src="/images/LI-Logo.png" alt="LinkedIn logo" />
					</div>
				</div>
				<div className={styles.background}>
					<div className={styles.aboutText}>{<p>{data.info}</p>}</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.subheader}>
						<h1>
							I design, animate, <span>&amp;</span> code. Bringing a mixture of
							diverse skills and experieces to all projects.
						</h1>
					</div>
					<div className={styles.tabLogo}>
						<img src="/svg/homeNav_me.svg" alt="About Me Logo" />
					</div>
				</div>
			</div>
			<hr noshade="false" />
		</div>
	);
}
