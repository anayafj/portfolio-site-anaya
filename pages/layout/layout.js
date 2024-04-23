import {useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

// import Navbar from "../components/navbar";
import Footer from "./Footer";
import Header from "./header";

import styles from '../../styles/layouts/Layout.module.scss';

const myStyles = classNames.bind(styles);

export default function Layout({ children }) {
  const router = useRouter();
  const [path, setPath] = useState(null);
  console.log("path =  "+path);

	useEffect(() => {
		setPath(router.pathname);
	}, [router.pathname]);

	let container = myStyles(
		{ container: true },
		`${path != null ? path.slice(1) : ''}`,
	);

  let  section = myStyles(
    
  );

  return (
    <>
      <div className={container}>
	  	<div className={styles.headerBg}></div>
	  	<Header />
		<section>{children}</section>
		<Footer />
		</div>
    </>
  );
}