import PropTypes from 'prop-types';
import './style.css';
import Button from '@material-ui/core/Button';

export default function Booth(props) {
    const options = props.options.map((option, index) => (
        <span className={'m5'}>
            <Button size="small" variant="contained" color="primary" onClick={() => props.onVote(index)}>
                {option}
            </Button>
        </span>

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