import { motion } from "framer-motion"
import { PieChart, Pie , Cell , Tooltip , ResponsiveContainer , Legend } from "recharts"


const categoryData =[
    {name: "Electronics", value: 4500},
    {name: "Clothing", value: 3500},
    {name: "Home & Garden", value: 5500},
    {name: "Books", value: 6500},
    {name: "Sports & Outdoors", value: 7500},
]

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#E5E7EB"]

const CategoryDistributionChart = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20}}
    animate={{ opacity: 1, y: 0}}
    transition={{ duration: 0.3}}
    >
        <h1 className="text-lg font-medium mb-4 text-gray-100">Category Distribution</h1>
        <div className="h-80">
            <ResponsiveContainer
            width={"100%"}
            height={"100%"}
            >
                <PieChart>
                    <Pie 
                    data={categoryData}
                    cx={"50%"}
                    cy={"50%"}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    > 
                        {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                    content={{
                        backgroundColor: "rgba(51, 41, 55, 0.8)",
                        borderColor: '#4b5563',
                    }}
                    itemStyle={{color: '#1ABC9C'}}
                    />
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default CategoryDistributionChart