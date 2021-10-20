import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';

import { Link } from 'react-scroll';

const Footer = () => {
	return (
		<FooterContainer>
			<SocialMedia>
				<SocialMediaWrap>
					<WebsiteRights>Louis Villain © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="https://www.linkedin.com/in/louis-villain/" target="_blank" aria-label="LinkedIn">
							<FaLinkedin />
						</SocialIconLink>
						<SocialIconLink href="https://github.com/bcmplx/" target="_blank" aria-label="Github">
							<FaGithub />
						</SocialIconLink>
						<SocialIconLink href="mailto:louis.villainl@gmail.com" target="_blank" aria-label="LinkedIn">
							<FaGoogle />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	)
}

export default Footer

const FooterContainer = styled.footer`
	position: relative;
    bottom: 0;
    width: 100%;
`

export const SocialMedia = styled.section`
	width: 100%;
`;
export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 40px auto 0 auto;
	flex-direction: column;
	background: rgba(0,0,0,0.8);
	border-radius: 8px;


	@media screen and ( max-width: 768px) {
		
	}
`;


export const SocialLogo = styled(Link)`
	color: #fefefe;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;

export const WebsiteRights = styled.small`
	color: #fefefe;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fefefe;
	font-size: 24px;
	transition: all 0.2s ease;

	&:hover {
		color: wheat;
		transition: all 0.2s ease;
	}
`;
