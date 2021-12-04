import {config} from "dotenv"
config()
export const headerConfig = {
    headers:{"X-CMC_PRO_API_KEY":
	'412bc3e9-3b59-4fb6-82ca-6144966c044b',
    "Access-Control-Request-Method":"GET"
}

}
const CMC_BASE_URL = 'https://pro-api.coinmarketcap.com'
const PROXY_URL = 'https://cors-enable.herokuapp.com'
const CMC_PRICE_URL = `${PROXY_URL}/${CMC_BASE_URL}/v1/tools/price-conversion`
export const PRICE_CONVERSION_ENDPOINT = `${CMC_PRICE_URL}`