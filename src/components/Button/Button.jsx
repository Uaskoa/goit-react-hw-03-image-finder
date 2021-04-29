import './Button.scss'
import PropTypes from 'prop-types'

const Button =({onClick}) => {
    return (
      <div>
        <button type="button" className="Button" onClick={() => onClick()}>
          Load more
        </button>
      </div>
    );
}

export default Button

Button.propTypes = {
  onClick:PropTypes.func.isRequired
};