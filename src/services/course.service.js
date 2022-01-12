import axios from 'axios';


// not working --> Zuul error
// const API_URL = "http://localhost:8765/api/user/service/";
const API_URL = "http://localhost:8001/service/";

const currentUserSubject = new BehaviorSubject(
    JSON.parse(localStorage.getItem("currentUser"),)
);


class CourseService {
    createTransaction (transaction) {
        return axios.post(API_URL + 'enroll', JSON.stringify(transaction),
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
    };

    filterTransactions (userId) {
        return axios.get(API_URL + 'user/' + userId,
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
    };

    filterStudents (courseId) {
        return axios.get(API_URL + 'course/' + courseId,
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
    };

    findAlCourses () {
        return axios.get(API_URL + 'all',
            { headers: { 'Content-Type': 'application/json; charset=UTF-8' } })
    };
}



export default new CourseService();