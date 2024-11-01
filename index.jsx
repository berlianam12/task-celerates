import PropTypes from 'prop-types';
const Button = (props) => {
    const { children, className = "bg-black", onClick, link} = props; 
    return (
      <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-10 px-6 font-semibold rounded-md ${className} text-white flex items-center justify-center`}
      onClick={onClick}
    >
      {children}
    </a>
    );
  }

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  link: PropTypes.string
}

export default Button;