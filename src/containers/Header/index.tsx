import React from 'react';
import { Banner } from '../../components/Banner';
import { Modal } from '../../components/common/Modal';
import { WalletInfo } from '../../components/WalletInfo';
import { HeaderContainer } from './Header.styles';

export function Header() {
	return (
		<HeaderContainer>
			<Banner />
			<WalletInfo />
			<Modal show={false} />
		</HeaderContainer>
	);
}
