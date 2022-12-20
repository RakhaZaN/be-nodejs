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

    async show(req, res) {
        // Get params
        const { id } = req.params

        // Call static method find()
        const student = await Student.find(id)

        const data = {
            message: `Get student with id: ${id}`,
            data: student
        }
        // // Set response to JSON
        res.json(data)
    }

    async update(req, res) {
        // Get params
        const { id } = req.params
        // Get data post
        const { nama, nim, email, jurusan } = req.body

        // Set value
        const value = {
            nama,
            nim,
            email,
            jurusan
        }

        // Call static method update()
        const update = await Student.update(value, id)

        // Response format
        const data = {
            message: `Edit student with id: ${id}`,
            data: { id, ...value }
        }
        // Set response to JSON
        res.json(data)
    }

    async destroy(req, res) {
        // Get params
        const { id } = req.params

        // Call static method delete()
        const del = await Student.delete(id)

        // Response format
        const data = {
            message: `Delete student with id ${id}`
        }
        // Set response to JSON
        res.json(data)
    }

}

module.exports = new StudentController()