import Header from "../components/common/Header"
import ConnectedAccounts from "../components/settings/ConnectedAccounts"
import DangerZone from "../components/settings/DangerZone"
import Notification from "../components/settings/Notification"
import Profile from "../components/settings/Profile"
import Security from "../components/settings/Security"

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-800">
        <Header title="Settings" />
        <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
        <Profile/>
        <Notification/>
        <Security/>
        <ConnectedAccounts/>
        <DangerZone/>
        </main>
    </div>
  )
}

export default SettingsPage