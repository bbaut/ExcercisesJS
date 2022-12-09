const table = document.getElementById("table");
const sortButton = document.getElementById("sortbtn");

sortButton.addEventListener("click", () => {
    let i, first, second;

    let rows = table.rows;
    let rowsLength = rows.length;

    let switching = true;
    let shouldSwitch = true;

    while (switching){
        switching = false;
        
        for (i = 1; i < rowsLength - 1; i++){
            shouldSwitch = false;
            first = rows[i].getElementsByTagName("td")[1];
            second = rows[i+1].getElementsByTagName("td")[1];
            if(first.innerHTML > second.innerHTML){
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
        }
    }
})