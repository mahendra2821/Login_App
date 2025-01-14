import './index.css'
const Message = props => {
  const {isLoggedIn} = props
  const message = isLoggedIn ? 'welcome User' : 'Please Login'
  return <h1 className="message">{message}</h1>
}

export default Message
