const JSON_BIN_URL = "https://api.jsonbin.io/v3";
const JSON_BIN_ID = "66a9cdcce41b4d34e419881c";

let originalData = {};
let dataLength = {};

async function loadData(){
    let response = await axios.get(`${JSON_BIN_URL}/b/${JSON_BIN_ID}/latest`);
    console.log("data loaded: ", response);
    originalData.records = response.data.record;
    // return response.data.record;
    console.log(originalData)
    idKeeper(originalData.records)
    checkInitialDataLength();
    // return originalData
}

// async function exisitingItemsId(){
//     let a = "items";
//     let response = await axios.get(`${JSON_BIN_URL}/b/${JSON_BIN_ID}/latest`);
//     let itemsData = response.data.record[a];
//     let arrId = itemsData.map(arr => arr.id);
//     console.log(arrId);
// }

// exisitingItemsId();


async function addData(keyword, itemName,itemCost){
    // let keyword = "items"
    let id = generateId();
    let newData = {
        "id":id,
        "name":itemName,
        "cost":itemCost
    }
    console.log(newData)
    originalData.records[keyword].push(newData);
    console.log(originalData);
}

// addData();

function checkInitialDataLength(){
    for(each in originalData.records){
        console.log(originalData.records[each].length);
        let currentInfoLength = originalData.records[each].length;
        dataLength[each] = currentInfoLength
    }
}