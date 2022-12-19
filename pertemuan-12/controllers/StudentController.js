// Import student model
const Student = require('../models/Student')

class StudentController {

    async index(req, res) {
        // Call static method all()
        const students = await Student.all()

        // Response format
        const data = {
            message: "Get All Students",
            data: students
        }
        // Set response to JSON
        res.json(data)
    }

    async store(req, res) {
        // Get data post
        const { nama, nim, email, jurusan } = req.body

        // Set value
        const value = {
            nama,
            nim,
            email,
            jurusan
        }

        // Call static method create()
        const create = await Student.create(value)

        // // Response format
        const data = {
            message: "Add new student data",
            data: { id: create.insertId, ...value }
        }
        // // Set response to JSON
        res.json(data)
    }

    // update(req, res) {
    //     // Get params
    //     const { id } = req.params
    //     // Get data post
    //     const { nama } = req.body

    //     // Update student with id (index)
    //     students[id] = nama

    //     // Response format
    //     const data = {
    //         message: `Edit student with id ${id}: ${nama}`,
    //         data: [...students]
    //     }
    //     // Set response to JSON
    //     res.json(data)
    // }

    // destroy(req, res) {
    //     // Get params
    //     const { id } = req.params

    //     // Splice student with id (index)
    //     students.splice(id, 1)

    //     // Response format
    //     const data = {
    //         message: `Delete student with id ${id}`,
    //         data: [...students]
    //     }
    //     // Set response to JSON
    //     res.json(data)
    // }

}

module.exports = new StudentController()