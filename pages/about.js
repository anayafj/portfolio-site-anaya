import styles from '../styles/pages/about.module.scss';
import Image from 'next/image';

export default function About() {

	return (
		<div className={styles.aboutPage}>

			<div className={styles.top}>
				<div className={styles.subheader}>
					<h1> About Me</h1>
					<h2>Let me introduce myselfe</h2>
				</div>
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.infoContainer}>
					<div className={styles.infoHeader}>
						<h1>Hi, I’m frankie</h1>
					</div>
					<div className={styles.infoBody}>
						<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet purus vitae lectus pellentesque, vel rhoncus lorem sagittis. Integer at risus nec felis sodales faucibus quis eu ante. Quisque at mattis dolor. Morbi et sem mattis, sollicitudin velit vitae, porta orci. Donec ut tortor venenatis, faucibus ex vitae, tincidunt urna. Ut pulvinar pellentesque eros eu tempus. Mauris finibus velit quis ante dictum pharetra. Mauris mollis nisi sed nulla imperdiet, sed varius mi fringilla. Nullam venenatis rutrum cursus. Integer consectetur urna eu quam sagittis, vitae semper sapien lobortis. Duis quis nibh sed ligula luctus blandit. Nullam facilisis mi nec velit tristique viverra. Nullam ante elit, suscipit id ante et, eleifend suscipit lorem.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet purus vitae lectus pellentesque, vel rhoncus lorem sagittis. Integer at risus nec felis sodales faucibus quis eu ante. Quisque at mattis dolor. Morbi et sem mattis, sollicitudin velit vitae, porta orci. Donec ut tortor venenatis, faucibus ex vitae, tincidunt urna. Ut pulvinar pellentesque eros eu tempus.ndit. Nullam facilisis mi nec velit tristique viverra. Nullam ante elit, suscipit id ante et, eleifend suscipit lorem.</h2>
					</div>
					
				</div>
				<div className={styles.backgroundImage}>
					<Image
						src="/images/nopal.png"
						alt="Close-up of a nopal"
						width={694}
						height={770}
						style={{
							width: 'auto',
							height: 'auto',
						  }}
					/>
				</div>
				

			</div>

			
			<hr noshade="false" />
		</div>
	);
}
