import eventEmitter from "./moduloEvent.js"
//https://www.youtube.com/watch?list=PLliVpcscu0l5knbl572pzTYxFdj6Zw5ro&v=I1-k9xCH0V0

console.log(" ")
console.log(" ")

eventEmitter.emit("nomeQualquer", "adsanosdioas")
console.log(" ")
console.log(" ")

eventEmitter.on("nomeQualquer", a => {
    console.log(`ouviu tbm: `, a)
})

eventEmitter.emit("nomeQualquer", "tavendo ")