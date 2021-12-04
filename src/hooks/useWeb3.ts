import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { DAI_ABI, DAI_ADDRESS, RAID_ABI, RAID_ADDRESS } from '../constants/abi';
const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider,
		options: {
			infuraId: '3d30748db4fc43439aedd3909843270c',
		},
	},
};
const web3Modal = new Web3Modal({
	network: 'mainnet',
	cacheProvider: true,
	providerOptions,
	theme: {
		background: '#2B2C34',
		main: '#ff3864',
		secondary: '#fff',
		hover: 'rgba(255, 255, 255, 0.08);',
		border: 'none',
	},
});

export function useWeb3() {
	const [provider, setProvider] = useState<ethers.providers.Web3Provider>(null);
	const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>(null);
	const [ready, setReady] = useState<boolean>(false);
	async function connect() {
		try {
			const modalProvider = await web3Modal.connect();
			const provider = new ethers.providers.Web3Provider(modalProvider);
			setProvider(provider);
			// console.log({provider})
			const signer = await provider.getSigner();
			setSigner(signer);
			setReady(true);
			(window as any).x = provider;
		} catch (err) {
			console.log('err', err);
			setProvider(null);
			setSigner(null);
			setReady(false);
			return;
		}
	}
	async function disconnect() {
		await web3Modal.clearCachedProvider();
	}

	async function getETHBalance() {
		if (!signer?.getBalance) {
			return null;
		}
		const wei = await signer.getBalance();
		const eth = ethers.utils.formatEther(wei);
		return { wei, eth };
	}
	async function getRAIDBalance() {
		if (!signer?.getBalance) {
			return null;
		}
		const daiContract = new ethers.Contract(RAID_ADDRESS, RAID_ABI, provider);
		const wei = daiContract.balanceOf(await signer.getAddress());
		const raid = ethers.utils.formatEther(wei);
		return { wei, raid };
	}
	async function getDAIBalance() {
		if (!signer?.getBalance) {
			return null;
		}
		const daiContract = new ethers.Contract(DAI_ADDRESS, DAI_ABI, provider);
		const wei = daiContract.balanceOf(await signer.getAddress());
		const dai = ethers.utils.formatEther(wei);

		return { wei, dai };
	}

	return {
		provider,
		connect,
		disconnect,
		signer,
		getETHBalance,
		getRAIDBalance,
		getDAIBalance,
		ready,
	};
}
