const orm = require('../config/orm');

const burger = {
  all: (cb) => {
    orm.all('burgers', (res) => {
      cb(res)
    })
  },
  create: (cols, vals, cb) => {
    orm.create('burgers', cols, vals, (res) => {

    })
  },
  update: (objColVals, condition, cb) => {
    orm.update('burgers', objColVals, condition, (res) => {
      cb(res)
    })
  },
  delete: (condition, cb) => {
    orm.delete('burgers', condition, (res) => {

    })
  }
}

module.exports = burger