const pa = document.getElementById("p")
pa.innerText = "Currently, we have 250 countries"
const mid_pa = document.getElementById("mid-p")
var graph = document.getElementById("graph")
const data = countries_data.sort(function(a,b){
    return b.population-a.population
})

var totalp = 0
for(var l = 0;l<countries_data.length;l++){
    totalp+=countries_data[l].population
}

function popullation(){
    mid_pa.innerText = "10 Most populated countries in the world"
    graph.innerHTML = ""
    var world_div = document.createElement("div")
    graph.appendChild(world_div)
    world_div.classList.add("details")
    var worldp = document.createElement("div")
    worldp.innerText ="World"
    worldp.classList.add("div_name")
    world_div.appendChild(worldp)   

    var grap = document.createElement("div")
        grap.classList.add("width")
        // grap.style.backgroundColor ="green"
        world_div.appendChild(grap)
    var col = document.createElement("div")
        col.style.width = "100%"
        col.style.height = "25px"
        col.style.backgroundColor ="#FFA500"
        grap.appendChild(col)

    var world = document.createElement("div")
    world.innerText = `${totalp}`
    world.classList.add("div_name")
    world_div.appendChild(world)

    for(var i=0;i<10;i++){
        console.log(data[i].name)
        console.log(data[i].population)
        var detail = document.createElement("div")
        detail.classList.add("details")
        graph.appendChild(detail)
        var cname = document.createElement("div")
        cname.innerText = data[i].name
        cname.classList.add("div_name")
        detail.appendChild(cname)

        var percent = (data[i].population/totalp)*100
        console.log(percent)
        var grap = document.createElement("div")
        grap.style.width = "60%"
        grap.style.height = "25px"
        // grap.style.backgroundColor ="green"
        detail.appendChild(grap)
        var col = document.createElement("div")
        col.style.width = `${percent}%`
        col.style.height = "25px"
        col.style.backgroundColor ="#FFA500"
        grap.appendChild(col)

        var num = document.createElement("div")
        num.innerText = data[i].population
        num.classList.add("div_name")
        detail.appendChild(num)
    }
}
popullation()
var lang =[]

for(var i=0;i<countries_data.length;i++){
    lang.push(countries_data[i].languages)
}

console.log(lang)

const lanflat = lang.flat()
console.log(lanflat)

const langcount = {}

lanflat.map(e=>{
    langcount[e] = (langcount[e] || 0) +1
})

console.log(langcount)

const obj = Object.entries(langcount)
console.log(obj)

const sortarraylang = obj.sort(function(a,b){
    return b[1]-a[1]
})

console.log(sortarraylang)

var totallang = 0
for(var i=0;i<sortarraylang.length;i++)
{
    totallang+=sortarraylang[i][1];
}
console.log(totallang)

function languages(){
    mid_pa.innerText = "10 Most Spoken languages in the world"
    graph.innerHTML = ""

    var world_div = document.createElement("div")
    graph.appendChild(world_div)
    world_div.classList.add("details")
    var worldp = document.createElement("div")
    worldp.innerText ="World"
    worldp.classList.add("div_name")
    world_div.appendChild(worldp)   

    var grap = document.createElement("div")
        grap.classList.add("width")
        // grap.style.backgroundColor ="green"
        world_div.appendChild(grap)
    var col = document.createElement("div")
        col.style.width = "100%"
        col.style.height = "25px"
        col.style.backgroundColor ="#FFA500"
        grap.appendChild(col)

    var world = document.createElement("div")
    world.innerText = `${totallang}`
    world.classList.add("div_name")
    world_div.appendChild(world)

    for(var i=0;i<10;i++){
        console.log(sortarraylang[i][0])
        console.log(sortarraylang[i][1])
        var detail = document.createElement("div")
        detail.classList.add("details")
        graph.appendChild(detail)
        var cname = document.createElement("div")
        cname.innerText = sortarraylang[i][0]
        cname.style.width = "15%"
        detail.appendChild(cname)

        var percent = (sortarraylang[i][1]/totallang)*100
        console.log(percent)
        var grap = document.createElement("div")
        grap.classList.add("width")
        // grap.style.backgroundColor ="green"
        detail.appendChild(grap)
        var col = document.createElement("div")
        col.style.width = `${percent}%`
        col.style.height = "25px"
        col.style.backgroundColor ="#FFA500"
        grap.appendChild(col)

        var num = document.createElement("div")
        num.innerText = sortarraylang[i][1]
        num.style.width ="15%"
        detail.appendChild(num)
    }
}

console.log(totalp)