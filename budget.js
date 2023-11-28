
function calc() {
    let salary = document.getElementById("salary").value;
    let rent = document.getElementById("rent").value;
    
    
    let total = salary - rent - savings;
    
    
    document.getElementById("total").innerHTML = `total: ${total}`;
     
    if (total <= 0) {
        Document.getElementById("first-tip").style.visabilty = "visible";
        }
    
    
    if (savings <= 0) {
    document.getElementById("second-tip").style.visibility = "visible"
    }
    
    
    if (salary < 5000) {
        document.getElementById("third-tip").style.visibility = "visible"
    }
    }
    