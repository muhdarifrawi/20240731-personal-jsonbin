// This just makes random id for use
// borrowed from: 
// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function generateId(key, loadData) {
    let keyLength = 12;
    // console.log("genId load data: ", loadData)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let generatedID = "";

    let counter = 0;
    while (counter < keyLength) {
        generatedID += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }

    // idk if this will work
    if(checkId(generatedID,key,loadData)){
        generateId(key,loadData);
    }

    return generatedID;
}

function checkId(generatedID, key, loadData){
    let itemsData = loadData[key];
    let searchId = itemsData.includes(generatedID);
    // console.log(searchId);
    return searchId;
}
