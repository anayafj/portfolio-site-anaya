import styled from 'styled-components';
import { Icon } from '@iconify/react';

// icons
import fileTypeHtml from '@iconify/icons-vscode-icons/file-type-html';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import sassIcon from '@iconify/icons-logos/sass';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
// import pythonIcon from '@iconify/icons-logos/python';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import npmIcon from '@iconify/icons-logos/npm-icon';
import gitIcon from '@iconify/icons-logos/git-icon';
// import gulpIcon from '@iconify-icons/simple-icons/gulp';
import adobePhotoshop from '@iconify-icons/cib/adobe-photoshop';
import adobeIllustrator from '@iconify-icons/cib/adobe-illustrator';
import adobeAfterEffects from '@iconify-icons/cib/adobe-after-effects';

const SkillsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	height: 30px;
`;

const SkillIcon = styled(Icon)`
	width: auto;
	height: 100%;
`;

const colors = {
	adobeBlue: '#3da3f7',
	adobeOrange: '#f79500',
	adobePurple: '#9494f7',
};

export default function Skills() {
	return (
		<SkillsContainer>
			<SkillIcon icon={fileTypeHtml} />
			<SkillIcon icon={fileTypeCss} />
			<SkillIcon icon={sassIcon} />
			<SkillIcon icon={reactIcon} />
			<SkillIcon icon={reduxIcon} />
			<SkillIcon icon={gitIcon} />
			<SkillIcon icon={npmIcon} />
			<SkillIcon icon={nodejsIcon} />
			<SkillIcon icon={adobePhotoshop} color={colors.adobeBlue} />
			<SkillIcon icon={adobeIllustrator} color={colors.adobeOrange} />
			<SkillIcon icon={adobeAfterEffects} color={colors.adobePurple} />
		</SkillsContainer>
	);
}
