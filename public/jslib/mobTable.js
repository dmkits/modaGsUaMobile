function createMobTable(tableData, trOnClickFunction){
    var table = document.createElement('table');
    table.className="mobTable";
    table.style.width="100%";
    var thead=document.createElement('thead');
    table.appendChild(thead);
    //formatDate(tableData.items);
    var visibleCol=getVisibleCol(tableData.columns);
    for (var i in visibleCol){
        var col=visibleCol[i];
        var th = document.createElement('th');
        th.innerText=col['name'];
        thead.appendChild(th);
    }

    var tbody=document.createElement("tbody");
    table.appendChild(tbody);
    var items=tableData.items;
    for (var j in items) {
        var dataItem = items[j];
        var tr = document.createElement("tr");
        tbody.appendChild(tr);

        for(var k in visibleCol){
            var vcol=visibleCol[k];
            var td = document.createElement("td");
            tr.appendChild(td);
            if(dataItem[vcol.data]){
                if(vcol.data.indexOf('Date')>=0)dataItem[vcol.data]=moment(dataItem[vcol.data]).format("DD.MM.YYYY");
                td.innerText=dataItem[vcol.data];
            }
        }
        tr.rowData=dataItem;
        tr.onclick = function () {
            trOnClickFunction(this.rowData);
        };
//        if (dataItem.DocID) {
//     //       tr.docData=dataItem;
////                            tr.ChID=dataItem["ChID"];
//            tr.onclick = function () {
//                //console.log("tr.onClick dataItem.DocID =", this.docData.DocID );
//                //view_main.showDetailView(this.docData /*, this.moveTo, this.url, this.detail_id, this.data_unit_id*/);
//            }
//        }
    }
    return table;
}
function getVisibleCol(columns){
    var visibleCol=[];
    for(var i in columns){
        var col=columns[i];
        console.log("data=",col['visible'], col['data'], col);
        if(!(col['visible']==false)){
            visibleCol.push(col);
        }
    }
    return visibleCol;
}

//function formatDate(items){  console.log("formatDate=");
//    for(var k in items){ console.log("k=",k);
//        if(k.indexOf("Date")>=0){
//            console.log("IF!!! items[k] Date=",items[k]);
//            items[k]=moment(items[k]).format("dd.MM.YYYY");
//            console.log("items[k] format=",items[k]);
//        }
//    }
//}