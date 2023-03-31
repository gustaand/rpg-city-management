import Coins from "./head/Coins"
// import CityLevel from "./head/CityLevel"
// import Discount from "./head/Discount"
import logoText from '../assets/bg-images/logo-text.png'

const Header = () => {
  return (
    <div className='pb-8'>

      <div className="flex justify-center flex-col items-center pb-12 box-border">
        <img
          className="p-2 box-border max-w-xs sm:max-w-lg"
          src={logoText} alt="logo text"
        />
      </div>

      <div className="flex justify-between sm:justify-around m-2 flex-wrap">
        {/* <CityLevel /> */}
        <Coins />
        {/* <Discount /> */}
      </div>
    </div>
  )
}

export default Header