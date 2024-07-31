document.addEventListener("DOMContentLoaded", async function(){
    console.log("DOM Loaded");
    
    let data = await loadData();
    // console.log(data);
    renderData(data);
})

function renderData(data){
    let keyword="items";
    // console.log(data[keyword]);
    let dataToRender = data[keyword];

    
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
        let itemList = document.querySelector("#item-list");
        itemList.innerHTML += info;
    }
}

