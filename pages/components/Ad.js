const pathToAds = '/work/ads/';
// public/work/ads/banner_amazon_transparent/az_transparent.mp4
// /Users/franciscoanaya/Documents/WebDevelopment/PersonalWork/portfolio-site-anaya-2023/website-for-me/public/work/ads/banner_amazon_transparent/az_transparent.mp4

export default function Ad(file) {
	const mediaObj = file.dataFile;
	const filePath = mediaObj.fileName;
	console.log("Data file = ",mediaObj);
	console.log("filePath = ",filePath);
	
	// const dataSrc = pathToAds + 'banner_hbo_watchmen/300x250/index.html';
	const dataSrc = pathToAds + filePath;
	return (
		<iframe src={dataSrc} width={300} height={250}></iframe>
	);
}
