import ExpenseCharts from "@/components/ExpenseCharts";
import RootLayout from "@/components/core/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <h2 className="text-2xl font-semibold mb-4">Log Expense</h2>
      <ExpenseCharts />
    </RootLayout>
  );
}
