let basketArray;

if (localStorage.getItem('basketLocal') == null) {
    basketArray = [];
} else {
    basketArray = JSON.parse(localStorage.getItem('basketLocal'));
}

let gamingPCs = document.querySelectorAll('.fnv-pcBlock');

for (let i = 0; i < gamingPCs.length; i++) {
    let gamingPCName = gamingPCs[i].querySelector('h4').innerHTML;
    let gamingPCPrice = parseInt(gamingPCs[i].querySelector('.fnv-pricePC').innerHTML);
    let ssdChoice = gamingPCs[i].querySelector('.fnv-ssd .fnv-aboutDetail').innerHTML;
    let cpuChoice = gamingPCs[i].querySelector('.fnv-cpu .fnv-aboutDetail').innerHTML;
    let gpuChoice = gamingPCs[i].querySelector('.fnv-gpu .fnv-aboutDetail').innerHTML;
    let ramChoice = gamingPCs[i].querySelector('.fnv-ram .fnv-aboutDetail').innerHTML;
    let imgChoice = gamingPCs[i].querySelector('img').src;

    let gamingPCToBasket = gamingPCs[i].querySelector('.fnv-toBasket');

    gamingPCToBasket.addEventListener('click', function () {
        basketArray.push({
            pcName: gamingPCName,
            ssd: ssdChoice,
            ssdCount: 1,
            cpu: cpuChoice,
            gpu: gpuChoice,
            gpuCount: 1,
            ram: ramChoice,
            ramCount: 1,
            img: imgChoice,
            finalPrice: gamingPCPrice
        });

        localStorage.setItem('basketLocal', JSON.stringify(basketArray));
    });
}
