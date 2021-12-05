export function shortenAddress(address: string) {
	if (!address) return null;
	const length = address.length;
	return `${address.slice(0, 5)}...${address.slice(length - 5, length - 1)}`;
}
