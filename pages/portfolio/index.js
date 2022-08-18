import styles from '../../styles/pages/work.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import PortfolioThumbCard from '../../components/PortfolioThumbCard';
import ProjectModal from '../../components/ProjectModal';
import Modal from '../../components/Modal';

const myStyles = classNames.bind(styles);

// Custom variables for Style properties
const TitleColor = '';
const ImageBorderColor = '';
const DescriptionColor = '';

export default function PortfolioPage() {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);

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

	const handleClick = (id) => {
		setSelectedProject(projects.projects.projectItems[id - 1]);
		setModalOpen(true);
	};

	const renderProjects = () => {
		if (projects.length != 0) {
			return projects.projects.projectItems.map(({ id, type, description }) => {
				return (
					<PortfolioThumbCard
						handleClick={handleClick}
						key={id}
						id={id}
						title={type}
						titleColor={TitleColor}
						imgBorderColor={ImageBorderColor}
						description={description}
						descriptionColor={DescriptionColor}
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
					<div className={styles.projectContainer}>
						<div className={styles.projects}>{renderProjects()}</div>
					</div>
				</div>
				{/* <div className={styles.bottom}></div> */}
			</div>
			<Modal
				id="modalContainer"
				isOpen={modalOpen}
				bgCloseModal={() => setModalOpen(false)}
			>
				<ProjectModal
					onCloseModal={() => setModalOpen(false)}
					project={selectedProject}
				/>
			</Modal>
		</div>
	);
}
