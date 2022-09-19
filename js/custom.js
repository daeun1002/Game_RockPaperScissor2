let total = 0, wins = 0, loses = 0, winningRate = 0;
let mrps = ['scissors', 'rock', 'paper'];
function rps(e) {
    let str;
    let d = Math.ceil(Math.random()*3);
    let mimg = mrps[e-1]+".png";
    let dimg = mrps[d-1]+".png";
    switch(e) {
        case 1:
            if(d == 1) {
                str = "비겼습니다.";
            }else if(d == 2) {
                str = "졌네요. 안됐습니다."
                total++;
                loses++;
            }else{
                str = "축하합니다. 이겼습니다.";
                total++;
                wins++;
            }
        break;
        case 2:
            if(d == 2) {
                str = "비겼습니다.";
            }else if(d == 1) {
                str = "축하합니다. 이겼습니다."
                total++;
                loses++;
            }else{
                str = "졌네요. 안됐습니다.";
                total++;
                wins++;
            }
        break;
      case 3:
         if(d == 3) {
           str = "비겼습니다.";
         }else if(d == 2) {
           str = "축하합니다. 이겼습니다."
           total++;
           loses++;
         }else{
           str = "졌네요. 안됐습니다.";
           total++;
           wins++;
         }
      break;
    }
    if(total != 0) {
        winningRate = (wins / total) * 100;
        winningRate = winningRate.toFixed(2);
    }
    console.log(total);
    console.log("승" + wins);
    console.log("패" + loses);
    console.log("승률" + winningRate);

    document.getElementById("result").innerHTML = str;
    document.getElementById("mimg").src="images/"+mimg;
    document.getElementById("dimg").src="images/"+dimg;

    document.getElementById("total").innerHTML = total + "회";
    document.getElementById("wins").innerHTML = wins + "회";
    document.getElementById("loses").innerHTML = loses + "회";
    document.getElementById("winningRate").innerHTML = "승률 : " + winningRate + "%";

    if(wins + loses == 5) {
        if(wins > loses) {
            document.getElementById("result").innerHTML = "최종결과: 승리!!";
        }else{
            document.getElementById("result").innerHTML = "최종결과: 패배!!";
        }
        document.getElementById("r").disabled = true;  
        document.getElementById("s").disabled = true; 
        document.getElementById("p").disabled = true; 
        document.getElementById("reload").innerHTML = "<button class='reload' onclick='reload()'>다시도전</button>";
    }
}

function reload(){
    total = 0, wins = 0, loses = 0, winningRate = 0;
    document.getElementById("total").innerHTML = "";
    document.getElementById("wins").innerHTML = "";
    document.getElementById("loses").innerHTML = "";
    document.getElementById("winningRate").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("r").disabled = false;  
    document.getElementById("s").disabled = false; 
    document.getElementById("p").disabled = false; 
}