export function shortenAddress(address: string) {
	if (!address) return null;
	const length = address.length;
	return `${address.slice(0,6)}...${address.substr(-7)}`;
}
