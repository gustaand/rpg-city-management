import Coins from "./head/Coins"
import CityLevel from "./head/CityLevel"
import Discount from "./head/Discount"

const Header = () => {
  return (
    <div className='pb-8'>

      <div className="flex justify-center flex-col items-center pb-12">
        <h1 className="text-center text-5xl">Tales of arret</h1>
        <h2 className="text-center text-xl">City Management</h2>
      </div>

      <div className="flex justify-between m-2">
        <Coins />
        <CityLevel />
        <Discount />
      </div>
    </div>
  )
}

export default Header