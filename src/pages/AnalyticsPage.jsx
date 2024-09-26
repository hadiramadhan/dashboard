import Header from "../components/common/Header"
import ChannelPerformance from "../components/analytics/ChannelPerformance"
import CustomerSegmentation from "../components/analytics/CustomerSegmentation"
import OverviewCards from "../components/analytics/OverviewCards"
import ProductPerformance from "../components/analytics/ProductPerformance"
import RevenueChart from "../components/analytics/RevenueChart"
import UserRetention from "../components/analytics/UserRetention"
import AiPoweredInsights from "../components/analytics/AiPoweredInsights"

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-800">
    <Header title={"Analytics Dashboard"}/>
    <main className="max-w-7xl mx-auto p-6 px-4 lg:px-8">
        <OverviewCards/>
        <RevenueChart/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <ChannelPerformance/>
            <ProductPerformance/>
            <UserRetention/>
            <CustomerSegmentation/>
        </div>
        <div>
            <AiPoweredInsights/>
        </div>
    </main>
    </div>
  )
}

export default AnalyticsPage