// const pathToAds = '/work/ads/';
// const pathToMotion = "/work/motion/";

export default function Ad(file) {
	// const filePath = file.dataFile.fileName;
	const mediaType = file.dataFile.mediaType;
	// console.log("Data file = ",mediaObj);

	const mainPath = "/work/"+mediaType+"/"+file.dataFile.fileName;
	const dataSrc = mainPath;

	// const dataSrc = (mediaType) => {
	// 	let src = null;
	// 	switch(mediaType){
	// 		case motion: 
	// 			src = pathToMotion +filePath;
	// 		break;
	// 		case banner:
	// 			src = pathToAds + filePath
	// 		break;
	// 	}		
	// 	console.log("src = ",src);
	// 	return src;
	// };

	console.log("dataSrc = ",dataSrc);

	return (
		<iframe src={dataSrc} width={300} height={250}></iframe>
	);
}