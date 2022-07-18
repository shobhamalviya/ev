// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{nav,listall,append,newspage} from  `../components/navbar.js`
document.querySelector("#navbar").innerHTML=nav()

let url=`https://masai-api.herokuapp.com/news/top-headlines?country=in`
let c=document.querySelector("#results")

listall(url,c) 
document.querySelector("#ch").addEventListener("click",function(){
    chainan(this.id)
})
document.querySelector("#in").addEventListener("click",function(){
    indian(this.id)
})
document.querySelector("#us").addEventListener("click",function(){
    usn(this.id)
})
document.querySelector("#uk").addEventListener("click",function(){
    ukn(this.id)
})

let indian =(id)=>{
    url =`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`
    c.innerHTML=null;
    listall(url,c)
}

document.querySelector("#nz").addEventListener("click",function(){
    nzn(this.id)
})
let chainan =(id)=>{
    url =`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`
    c.innerHTML=null;
    listall(url,c)
}
let usn =(id) =>{
    url =`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`
    c.innerHTML=null;
    listall(url,c)
}
let ukn =(id) =>{
    url =`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`
    c.innerHTML=null;
    listall(url,c)
}
let nzn =(id) =>{
    url =`https://masai-api.herokuapp.com/news/top-headlines?country=${id}`
    c.innerHTML=null;
    listall(url,c)
}

document.querySelector("#search_input").addEventListener("click",function(){
    searchfun()
})

function searchfun(){
    window.location.href="search.html"
}