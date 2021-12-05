import { shortenAddress } from '../../utils/shortenAddress';
import { Button } from '../common/Button';
import { WalletInfoProps } from './types';
import { Container, StyledButton } from './WalletInfo.styles';

export function WalletInfo({
	handleWalletConnection,
	address,
}: WalletInfoProps) {
	console.log(!!address);
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
