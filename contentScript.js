var url = window.location.href;
var sites = ['reddit'];

//alert("loaded");

const delay = ms => new Promise(res => setTimeout(res, ms));

async function playPuzzle()
{
    await delay(5000);
    window.location.replace(chrome.runtime.getURL('puzzle.html'));
    alert("5 seconds passed");
};

for (site of sites)
{
    if (url.indexOf(site) >= 0)
    {
        $("body").append('Test');
        //playPuzzle();
        break;
    }
}

