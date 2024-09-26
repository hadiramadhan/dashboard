import { LineChart , Line , XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const salesData = [
	{ name: "Jan", sales: 4000 },
	{ name: "Feb", sales: 3000 },
	{ name: "Mar", sales: 5000 },
	{ name: "Apr", sales: 4500 },
	{ name: "May", sales: 6000 },
	{ name: "Jun", sales: 5500 },
	{ name: "Jul", sales: 7000 },
	{ name: "Aug", sales: 8000 },
	{ name: "Sep", sales: 9000 },
	{ name: "Oct", sales: 4000 },
	{ name: "Nov", sales: 10000 },
	{ name: "Dec", sales: 2000 },
];



const SalesOverviewChart = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.2}}
    >
        <h1 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h1>
        <div className="h-80">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"/>
                    <XAxis dataKey={'name'} stroke="#9ca3af"/>
                    <YAxis stroke="#9ca3af"/>
                    <Tooltip
                    content={{
                        backgroundColor: "rgba(31, 41, 55, 0.8)",
                        borderColor: "#4b5563",
                    }}
                    itemStyle={{ color: "#000000" }}
                   />
                        <Line
                        type='monotone'
                        dataKey='sales'
                        stroke="#6366F1"
                        strokeWidth={3}
                        dot={{ fill : "#6366F1", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8 , strokeWidth: 2 }}
                        />

                  
                </LineChart>
            </ResponsiveContainer>

        </div>
      
    </motion.div>
  )
}

export default SalesOverviewChart
