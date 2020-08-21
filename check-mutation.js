const { setUpDataDirs, getDatafromURL, extractTableHTMLtoObject, checkMutation
, generateMutation, requestForUrl, requestForIdentifier } = require('./fx.js');
const CURRENT_DIR = './archive/current';
const DATA_DIR = './archive/data';
const MUTATIONS_DIR = './archive/mutations';

(async () => {
    await setUpDataDirs(CURRENT_DIR, DATA_DIR, MUTATIONS_DIR);
    let url = await requestForUrl();
    let identifier = await requestForIdentifier();
    let $ = await getDatafromURL(url);
    let extractedObject = await extractTableHTMLtoObject($, identifier);
    checkMutation(extractedObject, url, DATA_DIR);
})();