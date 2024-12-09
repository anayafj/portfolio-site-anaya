import styles from '../styles/pages/contact.module.scss';
import Image from 'next/image';

export default function Contact() {

	return (
		<div className={styles.contactPage}>

			<div className={styles.top}>
				{/* <div className={styles.subheader}>
					<h1> About Me</h1>
					<h2>Let me introduce myselfe</h2>
				</div> */}
			</div>
			<div className={styles.mainContainer}>
				<div className={styles.headerContainer}>
				<Image
						src="/svg/contactMe_txt.svg"
						alt="CONTACT ME - Header text"
						width={1403}
						height={115}
						style={{
							width: '103%',
							height: 'auto',
						  }}
					/>				
					{/* <div className={styles.infoHeader}>
							<h1>CONTACT ME</h1> */}
							{/* <h2>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h2> */}
					{/* </div> */}
					{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet purus vitae lectus pellentesque, vel rhoncus lorem sagittis. Integer at risus nec felis sodales faucibus quis eu ante. Quisque at mattis dolor. Morbi et sem mattis, sollicitudin velit vitae, porta orci. Donec ut tortor venenatis, faucibus ex vitae, tincidunt urna. Ut pulvinar pellentesque eros eu tempus. Mauris finibus velit quis ante dictum pharetra. Mauris mollis nisi sed nulla imperdiet, sed varius mi fringilla. Nullam venenatis rutrum cursus. Integer consectetur urna eu quam sagittis, vitae semper sapien lobortis. Duis quis nibh sed ligula luctus blandit. Nullam facilisis mi nec velit tristique viverra. Nullam ante elit, suscipit id ante et, eleifend suscipit lorem.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet purus vitae lectus pellentesque, vel rhoncus lorem sagittis. Integer at risus nec felis sodales faucibus quis eu ante. Quisque at mattis dolor. Morbi et sem mattis, sollicitudin velit vitae, porta orci. Donec ut tortor venenatis, faucibus ex vitae, tincidunt urna. Ut pulvinar pellentesque eros eu tempus.ndit. Nullam facilisis mi nec velit tristique viverra. Nullam ante elit, suscipit id ante et, eleifend suscipit lorem.</p> */}
				</div>
				<div className={styles.pigeonImage}>
					<Image
						src="/images/pigeonMessenger.png"
						alt="Cyborg Messenger Pigeon"
						width={2048}
						height={2048}
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
