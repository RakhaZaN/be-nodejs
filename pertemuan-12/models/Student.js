// Import database connection
const db = require('../config/database')

// Creating student class model
class Student {

    /**
     * @static all()
     * 
     * @callback callback
     */
    // static all(callback) {
    //     const query = "SELECT * FROM students"

    //     db.query(query, (err, results) => {
    //         callback(results)
    //     })
    // }

    /**
     * Get all student
     * @static
     * 
     * @returns Data Students
     */
    static all() {
        // Return Promise as asyncronus solution
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM students"

            db.query(query, (err, results) => {
                resolve(results)
            })
        })
    }

    /**
     * Insert new student
     * @static
     * 
     * @param {object} data
     * @returns Statistics
     */
    static create(data) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO students SET ?`;

            db.query(query, data, (err, result) => {
                resolve(result)
            })
        });
    }
}

module.exports = Student