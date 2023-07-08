const appList = [
    '367520',
    '1179080',
    '105600',
    '1150690',
    '504230',
    '1451940',
    '4000',
    '218620',
    '264710',
    '477160',
    '550',
    '620',
    '211820',
    '242760',
    '1030300',
    '1326470',
    '1304930',
    '1943950',
    '413150',
    '322330',
    '252490',
    '108600',
    '1144200',
    '739630',
    '534380',
];

function addWidget(item) {
    console.log(item);
    let widget = new SteamApp('#game-widgets', {
        appid: item,
        lang: 'spanish',
        onlinecount: ':count',
        rating: true,
        playtext: '+',
        author: ':developer',
        style: {
            border: 'max',
            shadow: true,
            colorBackground: '#16202d',
            colorTitle: '',
            colorDescription: '',
            colorAuthor: '#a06f6f',
            colorOnlinecount: '',
        }
    });
}

function loadWidgets() {
    let startIndex = (currentPage-1) * maxElements;
    for (let i = startIndex; i < appList.length && i < startIndex + maxElements; i++) {
        addWidget(appList[i]);
    }
}

function previewWidgets() {
    let random = getRandomElements(appList, 6);
    for (i in random) {
        addWidget(appList[i]);
    }
}

function getRandomElements(array, count) {
    var newArray = array.slice();
    // Perform a Fisher-Yates shuffle
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray.slice(0, count);
}

document.addEventListener('DOMContentLoaded', function() {

});