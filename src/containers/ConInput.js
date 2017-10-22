import { connect } from 'redux-zero/react';

import Input from '../components/Input';

const mapToProps = ({ text }) => ({
    value: text
});

const ConInput = connect(mapToProps)(Input);

export default ConInput;