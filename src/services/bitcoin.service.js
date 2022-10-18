import axios from 'axios'
import { storageService } from "./storage.service.js"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    let rate
    if (storageService.load('rate'))
        rate = storageService.load('rate')
    else {
        const apiStr = 'https://blockchain.info/ticker'
        rate = await (await axios.get(apiStr)).data
        rate = _cleanRateData(rate)
        storageService.save('rate', rate)
    }
    return rate
}

function getMarketPriceHistory() {

}

function getAvgBlockSize() {

}

function _cleanRateData(rate) {
    const rateByCurrency = {
        usd: rate.USD.last,
        eur: rate.EUR.last
    }
    return rateByCurrency
}