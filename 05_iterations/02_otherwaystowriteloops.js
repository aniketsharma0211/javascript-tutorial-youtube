//for of

const arr = [10,13,15,16]
for (const element of arr) {
    console.log(element)
}

// Maps: maintain order. has unique keys

const newMap = new Map()
newMap.set("in", "india")
newMap.set("us", "UnitedStatesOfAmerica")
newMap.set("fr", "france")
newMap.set("india", "india")

console.log(newMap)

for (const entry of newMap){
    console.log(entry)//returns array.
}

for (const [key, value] of newMap){
    console.log(key + ": "+value) //prints key value
}


const myObj = {
    game1: "nfs",
    game2: "counterstrike"
}

// for (const [key,value] of myObj){
//     console.log(key) //TypeError: myObj is not iterable
// }


const languages = {
    js : "javascript",
    cpp : "c++",
    java :"java",
    rb : "rb"
}

for (const key in languages) {
    console.log(languages[key])
}

const arrr = [10,20,30,49]

for (const key in arrr) {
    console.log(key) //prints indexes
    console.log(arrr[key])
}

for (const key in newMap){
    console.log(key)//prints nothing. map is not iteratable
}

//foreach

const arrrr = [10,20,30,40,50]
arrr.forEach((element)=> {
     console.log("tessttttt"+element)
})

// Output: 
// tessttttt10
// tessttttt20
// tessttttt30
// tessttttt49


function looparray(item){
    console.log(item)
}

arrrr.forEach(looparray)



arrr.forEach((element, index, arrr)=> {
    console.log(element , index ,arrr)
})

const myCoding = [
    {
        ln: "en",
        lf: "j"
    },
    {
        ln: "es",
        lf: "ja"
    },
    {
        ln: "ei",
        lf: "jp"
    },
    {
        ln: "el",
        lf: "jll"
    }
]

myCoding.forEach((obj)=>{
    console.log(obj)
}
)

const testObj = {
    name: "test",
    school: {
        name: "abc",
        class: "X"
    }
}

// testObj.map((obj)=>{
//     console.log(obj)
//     console.log(obj.name)
//     console.log(obj.school.name)
// })

for (const key in testObj){
    console.log(testObj[key] )
}