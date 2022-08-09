import styles from '../../styles/pages/work.module.scss';
// import styled from 'styled-components';
import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import PortfolioThumbCard from '../../components/PortfolioThumbCard';

const myStyles = classNames.bind(styles);

// Custom variables for Style properties
const TitleColor = '';

// const Button = styled.button`
// 	cursor: pointer;
// 	border: 5px red solid;
// `;

// const CardStyle = styled.div.attrs(props => ({
// 	border: props.border
// }))`
// 	border: 10px green solid;
// `;

////
////
//// - https://github.com/vercel/next.js/tree/canary/examples/with-styled-components-babel
////
////

export default function PortfolioPage() {
	const [projects, setProjects] = useState([]);
	const router = useRouter();

	const getProjects = () => {
		fetch('json/work.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setProjects(myJson);
			});
	};

	useEffect(() => {
		getProjects();
	}, []);

	const renderProjects = () => {
		// console.log(' The Projects to render - ', projects);
		if (projects.length != 0) {
			return projects.projects.projectItems.map(({ id, type, description }) => {
				return (
					<PortfolioThumbCard
						key={id}
						title={type}
						description={description}
						titleColor={TitleColor}
					/>
				);
			});
		} else {
			return <div className={styles.projectLoading}>Projects Loading</div>;
		}
	};

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
				<div className={styles.background}>
					<div className={styles.infoBorder}></div>

					<div className={styles.projects}>{renderProjects()}</div>
				</div>
				{/* <div className={styles.bottom}></div> */}
			</div>
		</div>
	);
}
