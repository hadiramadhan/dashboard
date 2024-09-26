import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const orderStatusData = [
    { name: "Pending" , value: 30},
    { name: "Processing" , value: 45},
    { name: "Shipped" , value: 50},
    { name: "Delivered" , value: 100},
]
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "32AB7CA"]

const OrderDistribution = () => {
  return (
    <motion.div
    className="bg-gray-700 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20}}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.3}}
    >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Order Distribution</h2>
        <div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={orderStatusData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{orderStatusData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
    </motion.div>
  )
}

export default OrderDistribution