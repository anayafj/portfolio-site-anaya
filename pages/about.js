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

	let scrollText = myStyles({ textContent: true });

	return (
		<div className={styles.aboutPage}>
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
					<div className={styles.aboutText}>
						<div id="content" className={scrollText}>
							{data.info}
						</div>
						{/* <div>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum. It is a long established fact that a reader will be
							distracted by the readable content of a page when looking at its
							layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using
							'Content here, content here', making it look like readable
							English. Many desktop publishing packages and web page editors now
							use Lorem Ipsum as their default model text, and a search for
							'lorem ipsum' will uncover many web sites still in their infancy.
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum. It is a long established fact that a reader will be
							distracted by the readable content of a page when looking at its
							layout. The point of using Lorem Ipsum is that it has a
							more-or-less normal distribution of letters, as opposed to using
							'Content here, content here', making it look like readable
							English. Many desktop publishing packages and web page editors now
							use Lorem Ipsum as their default model text, and a search for
							'lorem ipsum' will uncover many web sites still in their infancy.
						</div> */}
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
					</div>
				</div>
			</div>
			<hr noshade="false" />
		</div>
	);
}
