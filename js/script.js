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
    let counter = 1;
    for (each of dataToRender){
        console.log(counter, dataLength[keyword]);
        let className = "";
        let newPill = "";
        if(counter>dataLength[keyword] && dataLength[keyword] != 0){
            className =  ` class="table-success"`;
            newPill = `<span class="badge text-bg-success">New!</span>`;
        }
        console.log(each);
        let info = `<tr ${className}>
                        <td>${each.id}</td>
                        <td>${each.name} ${newPill}</td>
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
        counter += 1;
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

