import styles from '../styles/pages/about.module.scss';
import styled from 'styled-components';
import classNames from 'classnames/bind';
import { useState, useEffect, Fragment } from 'react';

import Skills from '../components/Skills';

const LinkedInUrl = 'https://www.linkedin.com/in/francisco-j-anaya/';
const myStyles = classNames.bind(styles);

const StandingGuyContainer = styled.img`
	position: absolute;
	width: 100%;
	margin-top: 5%;
	margin-left: 1.5%;
	max-width: 195px;
	/* height: 70%; */
	max-height: 567px;
`;

export default function AboutPage() {
	const [data, setData] = useState([]);

	const getData = () => {
		fetch('json/aboutMe.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setData(myJson);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	let scrollText = myStyles({ textContent: true });

	return (
		<Fragment>
			<div className={styles.aboutPage}>
				<StandingGuyContainer
					src="/svg/peep_standing.svg"
					alt="illustrated person"
				/>
				<div className={styles.top}>
					<div className={styles.lockup}>
						<div className={styles.photo}>
							<img src="/images/about_photo.png" alt="Photo" />
						</div>
						<div className={styles.name}>
							<img src="/svg/logo_name_sm.svg" alt="Francisco Anaya" />
						</div>
					</div>
					<div
						onClick={() => open(LinkedInUrl, '_blank')}
						className={styles.linkedIn}
					>
						<img src="/images/LI-Logo.png" alt="LinkedIn logo" />
					</div>
				</div>
				<div className={styles.background}>
					<div className={styles.aboutText}>
						<div id="content" className={scrollText}>
							{data.info}
						</div>
					</div>
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
						<div className={styles.lines}></div>
					</div>
				</div>
				<hr noshade="false" />
			</div>
			<div className={styles.skills}>
				<Skills />
			</div>
		</Fragment>
	);
}
