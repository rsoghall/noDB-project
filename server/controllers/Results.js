let id = 1
let blood = []

let calculateA1c =(bloodGlucose) => {
    let a1C = (46.7 + +bloodGlucose)/28.7
    return (+a1C.toFixed(1))

}

module.exports = {
    get: (req, res) => {
        res.send(blood)
    },

    create: (req, res) => {
        let {time, date, bloodGlucose} = req.body
        let bg = {
            id: id++,
            time,
            date,
            bloodGlucose: +bloodGlucose,
            a1C: calculateA1c(bloodGlucose)
        }
            blood.push(bg)
            res.send(blood)
    },

    update: (req, res) => {
        let {time, date, bloodGlucose, a1C} = req.body

        let updateBG = {
            id: +req.params.id,
            time,
            date,
            bloodGlucose: +(bloodGlucose),
            a1C: calculateA1c(bloodGlucose)
        }
        let index=blood.findIndex(bg => +bg.id === +req.params.id)
        blood.splice(index, 1, updateBG)
        res.send(blood)
    },
    delete: (req, res) => {
        let {id} = req.params
        let index = blood.findIndex(bg => +bg.id === +id)
        blood.splice(index, 1)
        res.send(blood)
    }
}