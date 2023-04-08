import Logo from "../images/pre-logos/icons8-dollar-coin.svg";

export default function MainLogo() {
  return (
    <div className="home_logo_container">
      <span>
        <img src={Logo} alt="logo" className="main_logo" />
      </span>
      <h1>
        <span>W</span>CHEAPER
      </h1>
    </div>
  );
}
