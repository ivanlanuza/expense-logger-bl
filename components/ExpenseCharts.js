"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const mockExpenses = [
  {
    id: 1,
    date: "2023-05-01",
    amount: 100,
    tenderType: "cash",
    category: "food",
  },
  {
    id: 2,
    date: "2023-05-02",
    amount: 500,
    tenderType: "gcash",
    category: "transportation",
  },
  {
    id: 3,
    date: "2023-05-03",
    amount: 1000,
    tenderType: "maya",
    category: "grocery",
  },
  {
    id: 4,
    date: "2023-05-04",
    amount: 200,
    tenderType: "bank",
    category: "food",
  },
  {
    id: 5,
    date: "2023-05-05",
    amount: 300,
    tenderType: "cash",
    category: "medical",
  },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82ca9d",
];

export default function ExpenseCharts() {
  const [expenses] = useState(mockExpenses);

  const categoryData = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  const categoryChartData = Object.entries(categoryData).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  );

  const tenderTypeData = expenses.reduce((acc, expense) => {
    if (!acc[expense.tenderType]) {
      acc[expense.tenderType] = 0;
    }
    acc[expense.tenderType] += expense.amount;
    return acc;
  }, {});

  const tenderTypeChartData = Object.entries(tenderTypeData).map(
    ([tenderType, amount]) => ({
      tenderType,
      amount,
    })
  );

  return (
    <div className="flex gap-x-8">
      <Card className="w-1/2 float-left">
        <CardHeader>
          <CardTitle>Expenses by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              category: {
                label: "Category",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[300px]"
          >
            <BarChart
              data={categoryChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent indicator="line" />} />
              <Legend />
              <Bar dataKey="amount" fill="var(--color-category)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="w-1/2 float-left">
        <CardHeader>
          <CardTitle>Expenses by Tender Type</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              tenderType: {
                label: "Tender Type",
                color: "hsl(var(--chart-2))",
              },
            }}
            className="h-[300px]"
          >
            <PieChart>
              <Pie
                data={tenderTypeChartData}
                dataKey="amount"
                nameKey="tenderType"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {tenderTypeChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltipContent indicator="line" />} />
              <Legend />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
