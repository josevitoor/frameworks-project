import PropTypes from 'prop-types';
import './style.css';

export default function Booth(props) {
    const options = props.options.map((option, index) => (
        <button key={option} className={'m5'} onClick={() => props.onVote(index)}>
            {option}
        </button>
    ))

    return (
        <div>
            {options}
        </div>
    )
}

Booth.propTypes = {
    onVote: PropTypes.func,
    options: PropTypes.array,
};