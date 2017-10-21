import { connect } from 'redux-zero/react';

import List from '../components/List';

const mapToProps = ({ todos }) => ({
    todos
});

const ConList = connect(mapToProps)(List);

export default ConList;