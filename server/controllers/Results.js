const moment = require('moment')

let id = 1
let blood = []

let calculateA1c =(bloodGlucose) => {
    let a1C = (46.7 + +bloodGlucose)/28.7
    return (+a1C.toFixed(1))

}
let sortBlood = () => {
    blood.sort((a,b)=> {
     if(a.rawDate.isAfter(b.rawDate)){
         return -1
     } 
     else if(a.rawDate.isBefore(b.rawDate)){
         return 1
     }
     else {
         return 0
     } 
    })
}
module.exports = {
    get: (req, res) => {
        sortBlood()
        res.send(blood)
    },

    create: (req, res) => {
        let {time, date, bloodGlucose} = req.body
        let bg = {
            id: id++,
            time,
            date,
            rawDate: moment(`${date} ${time}`, "M-DD-YY h:mm A"),
            bloodGlucose: +bloodGlucose,
            a1C: calculateA1c(bloodGlucose)
        }
            blood.push(bg)
            sortBlood()
            res.send(blood)
    },

    update: (req, res) => {
        let {time, date, bloodGlucose, a1C} = req.body
        
        let updateBG = {
            id: +req.params.id,
            time,
            date,
            rawDate: moment(`${date} ${time}`, "M-DD-YY h:mm A"),
            bloodGlucose: +(bloodGlucose),
            a1C: calculateA1c(bloodGlucose)
        }
        let index=blood.findIndex(bg => +bg.id === +req.params.id)
        blood.splice(index, 1, updateBG)
        sortBlood()
        res.send(blood)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = blood.findIndex(bg => +bg.id === +id)
        blood.splice(index, 1)
        sortBlood()
        res.send(blood)
    }
}