const connection = require('./connection')

const QuestionMarks = (num) => {
  const arr = []
  for (var i = 0; i < num; i++) {
    arr.push('?')
  }
  return arr.toString();
}

const ObjToSql = (ob) => {
  const arr = []

  for (let key in ob) {
    const value = ob[key]

    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === 'string' && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value)

    }
  }
}

const orm = {
  all: (tableInput, cb) => {
    const query = `SELECT * FROM ${tableInput};`
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result)
    })
  },
  create: (table, cols, vals, cb) => {
    const query =   `INSERT INTO ${table} (${cols.toString()})
                    VALUES (${QuestionMarks(vals.length)});`;
  
    connection.query(query, vals, (err, result) => {
      if (err) throw err;
      cb(result);
    })

  }
}

module.exports = orm;