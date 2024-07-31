const JSON_BIN_URL = "https://api.jsonbin.io/v3";
const JSON_BIN_ID = "66a9cdcce41b4d34e419881c";

async function loadData(){
    let response = await axios.get(`${JSON_BIN_URL}/b/${JSON_BIN_ID}/latest`);
    // console.log("data loaded: ", response);
    return response.data.record;
}

// async function exisitingItemsId(){
//     let a = "items";
//     let response = await axios.get(`${JSON_BIN_URL}/b/${JSON_BIN_ID}/latest`);
//     let itemsData = response.data.record[a];
//     let arrId = itemsData.map(arr => arr.id);
//     console.log(arrId);
// }

// exisitingItemsId();


async function addData(){
    let keyword = "items"
    generateId(keyword, await loadData());
}

addData();