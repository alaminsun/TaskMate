import Logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header>
        <img className="logo" src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
}
