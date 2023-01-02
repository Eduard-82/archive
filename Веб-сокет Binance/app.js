let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('stock-price');

ws.onmessage = (event) => {
	//console.log(event.data);
	let stockObject = JSON.parse(event.data);
//	stockPriceElement.innerText = stockObject.p;
    stockPriceElement.innerText = parseFloat(stockObject.p).toFixed(2);
	console.log(stockObject.p);

};