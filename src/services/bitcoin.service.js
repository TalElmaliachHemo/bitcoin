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

async function getMarketPriceHistory() {
    let priceHistory
    if (storageService.load('market-price-history'))
        priceHistory = storageService.load('market-price-history')
    else {
        const apiStr = 'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true'
        priceHistory = await (await axios.get(apiStr)).data
        console.log(priceHistory)
        priceHistory = _cleanPriceHistoryData(priceHistory)
        storageService.save('market-price-history', priceHistory)
    }
    return priceHistory
}

function getAvgBlockSize() {

}

function _cleanRateData(rate) {
    return {
        usd: rate.USD.last,
        eur: rate.EUR.last
    }
}

function _cleanPriceHistoryData(priceHistory) {
    const cleanPriceHistory = {
        name: priceHistory.name,
        unit: priceHistory.unit,
        description: priceHistory.description,
    }

    const cleanValues = priceHistory.values.map(value => {
        return {
            x: value.x * 1000,
            y: value.y
        }
    })

    cleanPriceHistory.values = [...cleanValues]

    return cleanPriceHistory
}