import { client } from "../db.js"
///////////////////MENTOR//////////////////////////////////
// get all mentors
export function getAllmentor(req) {
    return client
        .db("B42TW")
        .collection("mentor")
        .find(req.qurey)
        .toArray()
}

export function getMentorsCount() {
    return client
        .db("B42TW")
        .collection("mentor")
        .estimatedDocumentCount();
}

export function getMentorById(id) {
    return client
        .db("B42TW")
        .collection("mentor")
        .findOne({ mentorID: id });
}


export function editMentor(id, data) {
    return client
        .db("B42TW")
        .collection("mentor")
        .findOneAndUpdate({ mentorID: id }, { $set: data });
}

export function postNewMentor(data) {
    return client
        .db("B42TW")
        .collection("mentor")
        .insertOne(data)
}

//////////////////////////////////STUDENT/////////////////////////
//get all students

export function getAllstudents(req) {
    return client
        .db("B42TW")
        .collection("students")
        .find(req.qurey)
        .toArray()
}


export function getStudentsCount() {
    return client
        .db("B42TW")
        .collection("students")
        .estimatedDocumentCount();
}

export function getStudentById(id) {
    return client
        .db("B42TW")
        .collection("students")
        .findOne({ studentID: id });
}

export function editStudent(id, data) {
    return client
        .db("B42TW")
        .collection("students")
        .findOneAndUpdate({ studentID: id }, { $set: data });
}

export function getUnassignedStudents() {
    return client
        .db("B42TW")
        .collection("students")
        .find({ hasMentor: "true" })
        .toArray();
}
export function updateStudentsMany(target, data) {
    return client
        .db("B42TW")
        .collection("students")
        .updateMany({ studentID: { $in: target } }, { $set: { assigned_Mentor: data, hasMentor: "true" } });
}

export function postNewStudent(data) {
    return client
        .db("B42TW")
        .collection("students")
        .insertOne(data)
}