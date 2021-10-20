//modulo que permite escutar/emitir eventos

import {EventEmitter} from "events";

let eventEmitter = new EventEmitter()

//vamos escutar um evento
eventEmitter.on("nomeQualquer", objeto => {
    console.log("emitindo o event nomeQualquer -> ", typeof objeto, ` ${ objeto}`);
})


eventEmitter.on("nomeQualquer", objeto => {
    console.log("Se repetir o nome do event, vai repertir quando chamar -> ", typeof objeto, ` ${ objeto}`);
})

//vamos emitir o event
//eventEmitter.emit("nomeQualquer", [12,23]);

export default eventEmitter;