import ExpenseList from "@/components/ExpenseList";
import RootLayout from "@/components/core/RootLayout";

export default function Home() {
  return (
    <RootLayout>
      <h2 className="text-2xl font-semibold mb-4">Expenses List</h2>
      <ExpenseList />
    </RootLayout>
  );
}
