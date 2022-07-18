let nav=()=>{
    return `<a href="index.html"><h2></a>
    <input type="text" id="search_input" >`
}
let listall =async(url,c)=>{
    let data =await fetch(url)
    console.log(data)
    append(data.articles,c)
}

let append=(data,c)=>{
    data.map((el)=>{
        let div=document.createElement("div")
        let div1=document.createElement("div")
        let img=document.createElementL("img")
        let h3=document.createElement("h3")
        let p=document.createElement("p")
        div.setAttribute("class",news)
        img.src=el.urlToImage
        h3.innerText=el.title
        p.innerText=el.description
        div1.append(img,div1)
        div.append(img,div1)
        div.addEventListener("click",function(){
            c.append(el)
        })
    })
}

function newspage(el){
    let arr=[]
    arr.push(el)
    localStorage.setItem("news",JSON.stringify(arr))
    window.location.href="news.html"
}
export { nav,listall ,append, newspage}