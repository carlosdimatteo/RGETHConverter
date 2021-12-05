import { useState } from 'react';
import { Banner } from '../../components/Banner';
import { WalletInfo } from '../../components/WalletInfo';
import { useWeb3 } from '../../hooks/useWeb3';
import { HeaderContainer } from './Header.styles';

export function Header() {
	const { connect, signer, address } = useWeb3();

	function handleWalletConnection() {
		connect();
	}
	return (
		<HeaderContainer>
			<Banner />
			<WalletInfo
				handleWalletConnection={handleWalletConnection}
				address={address}
			/>
		</HeaderContainer>
	);
}
