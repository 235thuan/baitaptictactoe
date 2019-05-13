let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < 10; i++) {
    if (i<1) {
        board[i] = ["X&nbsp;&nbsp;Y", i+1, i+2, i+3, i+4,5,6,7,8,9];}
    else {
        board[i]= [i,"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.","&nbsp;.","&nbsp;.","&nbsp;.","&nbsp;.","&nbsp;.","&nbsp;.","&nbsp;.","&nbsp;."];}
}

for (let i = 0; i < 10; i++) {
    data += "<br/>";
    for (let j = 0; j < 10; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
document.getElementById("carogame").innerHTML = data;


function changeValueX() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "X";
    for (let i = 0; i < 10; i++) {
        data += "<br/>";
        for (let j = 0; j < 10; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp";
            if (board[i][j] === board[i][j + 1]&&board[i][j +1] ===board[i][j-1]&&board[i][j-1]=== "X") {
                        alert("X thang")
                    }
            }
        }
    data += "<br/><br/><input type='button' value='Change ValueX' onclick='changeValueX()'>";
    data += "<br/><br/><input type='button' value='Change ValueO' onclick='changeValueO()'>";
    b.innerHTML = "<hr/>" + data;

}
function changeValueO() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    data = "";
    board[positionX][positionY] = "O";
    for (let i = 0; i < 10; i++) {
        data += "<br/>";
        for (let j = 0; j < 10; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp";
            if (board[i][j] === board[i][j + 1]&&board[i][j +1] ===board[i][j-1]&&board[i][j-1]=== "O") {
                alert("O thang")
            }
        }
    }
    data += "<br/><br/><input type='button' value='Change ValueX' onclick='changeValueX()'>";
    data += "<br/><br/><input type='button' value='Change ValueO' onclick='changeValueO()'>";
    b.innerHTML = "<hr/>" + data;
}

