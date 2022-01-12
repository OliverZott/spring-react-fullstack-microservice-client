import React from 'react';
import UserService from '../../services/user.service';
import CourseService from '../../services/course.service';
import userService from '../../services/user.service';
import courseService from '../../services/course.service';
import { isEmptyObject } from 'jquery';

export default class ProfilePage extends React.Component {

    constructor (props) {
        super(props);

        if (!UserService.currentUserValue) {
            this.props.history.push('/');
            return;
        }

        this.state = {
            user: userService.currentUserValue,
            transactions: []
        };
    }


    componentDidMount () {
        this.setState({
            transactions: { loading: true }
        });
        const user = this.state.user;
        courseService.filterTransactions(user.id).then(transactions => {
            this.setState({ transactions: transactions.data });
        });
    }

    render () {
        const { transactions } = this.state;
        return (
            <div className='col-md-12'>
                <div className='jumbotron'>
                    <h1 className='display-4'>Hello, { this.state.user.name }</h1>
                </div>
                { transactions.loading && <em>Loading transactions...</em> }
                { transactions.length &&
                    <table>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Course</th>
                                <th scope='col'>Author</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Enroll Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            { transactions.map((transaction, index) => {
                                <tr key={ transaction.id }>
                                    <th scope='row'>{ index + 1 }</th>
                                    <td>{ transaction.course.title }</td>
                                    <td>{ transaction.course.author }</td>
                                    <td>{ transaction.course.category }</td>
                                    <td>{ transaction.dateOfIssue.toLocalDateString() }</td>
                                </tr>
                            }) }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}