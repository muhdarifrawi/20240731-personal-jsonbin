document.addEventListener("DOMContentLoaded", async function(){
    console.log("DOM Loaded");
    
    await loadData();
    // console.log(data);


    addBtn();
    renderInfo();
})

function renderInfo(){
    console.log(originalData);
    let keyword="items";
    // console.log(data[keyword]);
    let dataToRender = originalData.records[keyword];

    let itemList = document.querySelector("#item-list");
    itemList.innerHTML = "";
    
    for (each of dataToRender){
        console.log(each);
        let info = `<tr>
                        <td>${each.id}</td>
                        <td>${each.name}</td>
                        <td>${each.cost}</td>
                        <td>
                            <button type="button" class="btn btn-secondary" 
                            data-${keyword}-id="${each.id}">
                                Edit
                            </button>
                            <button type="button" class="btn btn-danger"
                            data-${keyword}-id="${each.id}">
                                Delete
                            </button>
                        </td>
                    </tr>`
        itemList.innerHTML += info;
    }
}

function addInfo(){
    keyword = "items"
    let itemName = document.querySelector("#item-name").value;
    let itemCost = document.querySelector("#item-cost").value;
    addData(keyword, itemName,itemCost)
    renderInfo();
}

function addBtn(){
    let addBtn = document.querySelector("#add-btn");
    addBtn.addEventListener("click", addInfo);
}

