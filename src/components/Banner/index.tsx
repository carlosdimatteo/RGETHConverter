import {
	BannerContainer,
	Title,
	TextAndLogo,
	LogoContainer,
	TitleAndDescription,
	TwitterUsernamesContainer,
} from './Banner.styles';
import { ReactComponent as Logo } from '../../assets/s3Logo.svg';
import { Span } from '../common/Span/Span';
import { TwitterUsernames } from './constants';
import { TwitterLink } from '../TwitterLink';

export function Banner() {
	return (
		<BannerContainer>
			<TextAndLogo>
				<LogoContainer>
					<Logo />
				</LogoContainer>
				<TitleAndDescription>
					<Title>RaidGuild Converter</Title>
					<Span>
						Seamless eth unit converter, price check your bags and convert
						between tokens as easy as typing
					</Span>
					<TwitterUsernamesContainer>
						{TwitterUsernames.map((username) => (
							<TwitterLink username={username} />
						))}
					</TwitterUsernamesContainer>
				</TitleAndDescription>
			</TextAndLogo>
		</BannerContainer>
	);
}
