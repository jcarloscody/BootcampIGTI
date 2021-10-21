import winston from "winston";


const {label, timestamp, printf, combine} = winston.format;

const format = printf(({level, timestamp, label, message})=>{
    return `${level} ${label} ${timestamp}: ${message}`;
});


const Logger = winston.createLogger({
    level: "info",
    transports: [
        new (winston.transports.File)({filename: "logs.log"})
    ],
    format: combine(
        label({label: "test"}),
        timestamp(),
        format
    )
})

export {Logger};