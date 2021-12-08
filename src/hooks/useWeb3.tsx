import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {
	useContext,
	useState,
	createContext,
	ReactElement,
	useEffect,
} from 'react';
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

export function useWeb3State() {
	const [provider, setProvider] = useState<ethers.providers.Web3Provider>(null);
	const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner>(null);
	const [ready, setReady] = useState<boolean>(false);
	const [address, setAddress] = useState<string>('');

	async function connect() {
		try {
			const modalProvider = await web3Modal.connect();
			const provider = new ethers.providers.Web3Provider(modalProvider);
			setProvider(provider);
			const signer = await provider.getSigner();
			setSigner(signer);
			const address = await signer.getAddress();
			setAddress(address);
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
		try {
			if (!signer?.getBalance) {
				return null;
			}
			const wei = await signer.getBalance();
			const eth = ethers.utils.formatEther(wei);
			return { wei, eth };
		} catch (e) {
			console.log('getETH error : ', { e });
			throw e;
		}
	}
	async function getRAIDBalance() {
		try {
			if (!signer?.getBalance) {
				return null;
			}
			const raidContract = new ethers.Contract(
				RAID_ADDRESS,
				RAID_ABI,
				provider,
			);
			const wei = await raidContract.balanceOf(await signer.getAddress());
			console.log({ wei });
			const raid = ethers.utils.formatEther(wei);
			return { wei, raid };
		} catch (e) {
			console.log('getRAID error : ', { e });
			throw e;
		}
	}
	async function getDAIBalance() {
		try {
			if (!signer?.getBalance) {
				return null;
			}
			const daiContract = new ethers.Contract(DAI_ADDRESS, DAI_ABI, provider);
			const wei = await daiContract.balanceOf(await signer.getAddress());
			const dai = ethers.utils.formatEther(wei);

			return { wei, dai };
		} catch (e) {
			console.log('getDAI error : ', { e });
			throw e;
		}
	}

	async function checkIfWalletIsConnected() {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have MetaMask!');
			return;
		} else {
			try {
				const provider = new ethers.providers.Web3Provider(window.ethereum);
				const accounts = await ethereum.request({ method: 'eth_accounts' });
				const account = accounts[0];
				const signer = provider.getSigner();
				console.log({ account, signer });
				if (account && signer) {
					setAddress(account);
					setSigner(signer);
					setProvider(provider);
					setReady(true);
				}
			} catch (err) {
				console.log('checkIfWalletIsConnected err: ', err);
			}
		}
	}

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return {
		provider,
		connect,
		disconnect,
		signer,
		getETHBalance,
		getRAIDBalance,
		getDAIBalance,
		ready,
		address,
	};
}

export const Web3Context: React.Context<{
	provider: ethers.providers.Web3Provider;
	connect: () => Promise<void>;
	disconnect: () => Promise<void>;
	signer: ethers.providers.JsonRpcSigner;
	getETHBalance: () => Promise<{ wei: ethers.BigNumber; eth: string }>;
	getRAIDBalance: () => Promise<{ wei: ethers.BigNumber; raid: string }>;
	getDAIBalance: () => Promise<{ wei: ethers.BigNumber; dai: string }>;
	ready: boolean;
	address: string;
}> = createContext({} as any);

export function Web3Provider({ children }: { children?: ReactElement }) {
	const web3 = useWeb3State();

	return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
}

export function useWeb3() {
	return useContext(Web3Context);
}
