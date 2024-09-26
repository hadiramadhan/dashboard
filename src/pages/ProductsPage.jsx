import Header from "../components/common/Header"
import { motion } from "framer-motion"
import StatCard from "../components/common/StatCard"
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react"
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart"
import SalesTrendChart from "../components/products/SalesTrendChart"
import ProductsTable from "../components/products/ProductsTable"
const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
        <Header title="Products"/>
        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div 
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 200}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: 1}}
        >
            <StatCard name="Total Products" icon={Package} value={550} color='#6366F1'/>
            <StatCard name='Top Selling' icon={TrendingUp} value={100} color='#8B5CF6' />
            <StatCard name='Low Stock' icon={AlertTriangle} value={25} color='#EC4899' />
            <StatCard name='Total Revenue' icon={DollarSign} value={"Rp50.000.000"} color='#10B981' />
        </motion.div>
        <ProductsTable/>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
            <SalesTrendChart/>
            <CategoryDistributionChart/>
        </div>
        </main>
    </div>
  )
}

export default ProductsPage