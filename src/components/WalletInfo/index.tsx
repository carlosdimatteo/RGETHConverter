import { shortenAddress } from '../../utils/shortenAddress';
import { WalletInfoProps } from './types';
import { Container, StyledButton } from './WalletInfo.styles';

export function WalletInfo({
	handleWalletConnection,
	address,
}: WalletInfoProps) {
	return (
		<Container>
			<StyledButton
				onClick={() => !address && handleWalletConnection()}
				withAddress={!!address}
			>
				{shortenAddress(address) || 'Connect Wallet'}
			</StyledButton>
		</Container>
	);
}
