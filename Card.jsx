import Button from '../Elements'
import PropTypes from 'prop-types'

const Card = (props) => {
  const { children } = props
  return (
    <div className="w-full max-w-sm bg-slate-50 border border-gray-50 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  )
}

const Header = (props) => {
  const { img } = props
  return (
    <a href="#">
      <img
        src={img}
        alt="product"
        className="p-8 rounded-t-lg"
      />
    </a>
  )
}

const Body = (props) => {
  const { title, children } = props
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-rose-400">
          {title}
        </h5>
        <p className="text-m text-rose-300">{children}</p>
      </a>
    </div>
  )
}

const Footer = (props) => {
  const {info, link} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <div className="text-xl font-bold text-rose-300">{info}</div>
      <Button className="bg-rose-300" link={link}>Watch More!</Button>
    </div>
  )
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

Body.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
}
Header.propTypes = {
  img: PropTypes.string.isRequired,
}
Footer.propTypes = {
  info: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default Card
