const pathToAds = '/work/ads/';

export default function Ad() {
	const dataSrc = pathToAds + 'banner_hbo_watchmen/300x250/index.html';

	return (
		<iframe src={dataSrc} frameBorder="0" width={300} height={250}></iframe>
	);
}
