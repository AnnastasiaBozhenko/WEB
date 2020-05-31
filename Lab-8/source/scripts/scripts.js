let xmlreq = new XMLHttpRequest();
const ROWS = 8;
const COLLUMNS = 4;
const URL = "https://cloud.iexapis.com/v1/stock/market/batch?symbols=f,ge,aal,nflx,dal,gpro,msft,fit&types=quote&token=";
const REQUEST_UPDATE = 20000;
const TIMER_UPDATE = 100;
let latestUpdatedTime = 0;

const makeTable = ( values ) => 
{
    let keys = Object.keys(values);
    let body = document.body;
    let table = document.createElement("table");
    let title = table.insertRow();


    const attributes = [ ["bgcolor", "azure"], ["id", "mainTable"], ["align", "center"] , [ "style", "height: 500px; width: 400px; border: 1px solid black" ] ]
    const nodes = [ "Назва компанії", "Назва позиції", "Остання ціна", "Зміна ціни" ]
    const names = [ "companyName","symbol","latestPrice" ]
    
    attributes.map( el => table.setAttribute(el[0], el[1]) )
    nodes.map( el =>  title.insertCell().appendChild(document.createTextNode(el)))

    for(var i = 0; i < ROWS; i++)
    {
        let row = table.insertRow();

        for(var j = 0; j < COLLUMNS; j++)
        {
          let cell = row.insertCell();
          cell.setAttribute("style", "border: 1px solid black;")
          
          j < COLLUMNS ? cell.appendChild(document.createTextNode(values[keys[i]]["quote"][names[j]]))
          : cell.appendChild(document.createTextNode((0).toFixed(COLLUMNS)));
        }
    }
    
    body.appendChild(table);
}


const tableInsert = (values) =>
{
    let keys = Object.keys(values);
  
    let table = document.getElementById('mainTable');
    var j = 2
    for(var i = 1; i < ROWS+1; i++){
        let before, after;
        j = 2;
        before = table.rows[i].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = values[keys[i-1]]["quote"]["latestPrice"];
        after = table.rows[i].cells[j].innerHTML;
        j++;
        console.log(before - after)
        table.rows[i].cells[j].innerHTML = (before - after == undefined ? 0: before - after  ).toFixed(4);
    }
  }

const main = () =>
{
    let key = prompt("Input the key below");
    xmlreq.onreadystatechange = () =>
    {
        if (xmlreq.readyState == 4 && xmlreq.status == 200)
        {
          let values = JSON.parse(xmlreq.responseText);
          makeTable(values);
          latestUpdatedTime = Date.now();
        }
        else if (xmlreq.status == 403 || xmlreq.status == 400)
        {
          alert("Invalid key entered.")
          xmlreq.abort()
        }
      }
      xmlreq.open("GET", URL + key, true);
      xmlreq.send();
    
      rxjs.interval(REQUEST_UPDATE)
        .subscribe( () => {
            xmlreq.onreadystatechange = () => {
                if (xmlreq.readyState === 4 && xmlreq.status === 200)
                {
                    let values = JSON.parse(xmlreq.responseText);
                    tableInsert(values);
                    latestUpdatedTime = Date.now();
                }
            }
          xmlreq.open("GET", URL+key, true);
            xmlreq.send();
      });
    
      rxjs.interval(TIMER_UPDATE)
        .subscribe( () => {
          if (latestUpdatedTime) {
            let timeUpdatePlace = document.getElementById("timer");
            timeUpdatePlace.innerHTML = "Time since last update: " + 
            ((Date.now() - latestUpdatedTime)/1000).toFixed(1) + " секунд";
          }
      });
}
main();