import { User } from "lucide-react"
import SettingSection from "./SettingSection"

const Profile = () => {
  return (
    <SettingSection icon={User} title={"Profile"}>
    <div className="flex flex-col sm:flex-row items-center mb-6">
        <img src="https://i.pinimg.com/474x/fb/22/76/fb22761b030787d3521805488a254ea5.jpg" alt="Profile" className="rounded-full w-20 h-20 object-cover mr-4" />
    <div>
        <h3 className="text-lg font-semibold text-gray-100">Hadi Ramadhan</h3>
        <p className="text-gray-200">hadiramadhan566@gmail.com</p>
    </div>
    </div>
    <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
    </SettingSection>
  )
}

export default Profile