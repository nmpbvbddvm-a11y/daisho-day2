const items = [
    { id: "D001",name: "オレンジジュース",price: 150,stock: 20,minStock: 5},
    { id: "D002",name: "コーラ",　　　　　price: 150,stock: 12,minStock: 5},
    { id: "D003",name: "お茶",　　　　　　price: 120,stock: 30,minStock: 10},
];

const tbody = document.getElementById("item-list");

function render(){
    tbody.innerHTML ="";

    items.forEach(items =>{
        const tr = document.createElement("tr");

        if(items.stock<items.minStock){
            tr.classList("low-stock");
        }

        tr.innerHTML =`
        <td>${items.id}</td>
        <td>${items.name}</td>
        <td>${items.price}</td>
        <td>${items.stock}</td>
        <td>
            <button onclick="changeStock('${items.id}',1)">＋</button>
            <button onclick="changeStock('${items.id}',-1)">－</button>
        </td>
        `;

        tbody.appendChild(tr);
    });
}

function changeStock(id,diff){
    const item = items.find(i =>i.id === id);
    if(!item){
        return;
    }

    item.stock += diff;
    if(item.stock<0){
        item.stock=0;
    }
    render();
}

render();
