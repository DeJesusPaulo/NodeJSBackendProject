const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/list',async (req,res) => {
    const students = await Student.find();
    res.json(students);
});

router.get('/:id',async (req,res) => {
    const student = await Student.findById(req.params.id);
    res.json(student);
});

router.post('/create', async (req,res) => {
    const {id, name, surname, email, dni} = req.body;
    const student = new Student ({id, name, surname, email, dni});
    await student.save();
    res.json({status: 'Student Saved'});
});

router.get('/update/:id', async (req,res) => {
    const {id, name, surname, email, dni} = req.body;
    const  newStudent = ({id, name, surname, email, dni});
    await Student.findByIdAndUpdate(req.params.id, newStudent);
    res.json({status: 'Student Updated'});
});

router.delete('/delete/:id',async (req,res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({status: 'Student Deleted'});
});

module.exports = router;