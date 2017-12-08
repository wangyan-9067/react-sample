import React from 'react';
import ToDoList from './ToDoList'
import AddForm from './AddForm'
import Footer from './Footer'

const App = ({ match: { params }}) => (
    <div>
        <ToDoList filter={params.filter || 'SHOW_ALL'}/>
        <AddForm />
        <Footer />
    </div>
);

export default App;
