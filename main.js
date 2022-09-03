let myLeads = []


let inputEmali = document.getElementById("input-email")
let inputBtn = document.getElementById("btn")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEmali.value)
    inputEmali.value = ""


    localStorage.setItem("myLeads", JSON.stringify(myLeads))
})

