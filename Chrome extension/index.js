let arr=[]
let inputEl = document.getElementById("input-el")
let listEl = document.getElementById("list-el")
let saveBtn=document.getElementById("save-btn")
let deleteBtn=document.getElementById("delete-btn")
let tabBtn=document.getElementById("tab-btn")
localStoragearr = JSON.parse(localStorage.getItem("array"))

if(localStoragearr){
    arr = localStoragearr
    render(arr)
}

function render(arr){
    let list =""
    for (let i = 0 ; i < arr.length ; i++){
        list += `
           <li> 
                <a target=_blank href="${arr[i]}">
                    ${arr[i]}
                </a>
           </li>
           `
    }
    listEl.innerHTML = list
}
tabBtn.addEventListener("click" , function(){
    chrome.tabs.query({active : true , currentWindow : true} , function(tabs){
         arr.push(tabs[0].url)
         localStorage.setItem("array", JSON.stringify(arr))
         render(arr)
    })
})




saveBtn.addEventListener("click" , function(){
    arr.push(inputEl.value)
    inputEl.value= ""
    localStorage.setItem("array", JSON.stringify(arr))
    render(arr)

})
deleteBtn.addEventListener("click" , function(){
    localStorage.clear()
    arr=[]
    render(arr)    
})


