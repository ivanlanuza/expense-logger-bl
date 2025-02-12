"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockExpenses = [
  {
    id: 1,
    date: "2023-05-01",
    amount: 100,
    tenderType: "cash",
    category: "food",
    comments: "Lunch",
  },
  {
    id: 2,
    date: "2023-05-02",
    amount: 500,
    tenderType: "gcash",
    category: "transportation",
    comments: "Taxi",
  },
  {
    id: 3,
    date: "2023-05-03",
    amount: 1000,
    tenderType: "maya",
    category: "grocery",
    comments: "Weekly groceries",
  },
];

export default function ExpenseList() {
  const [expenses, setExpenses] = useState(mockExpenses);
  const [filters, setFilters] = useState({
    category: "",
    tenderType: "",
    startDate: "",
    endDate: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => (value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    return expenses.filter((expense) => {
      return (
        (filters.category === "" || expense.category === filters.category) &&
        (filters.tenderType === "" ||
          expense.tenderType === filters.tenderType) &&
        (filters.startDate === "" || expense.date >= filters.startDate) &&
        (filters.endDate === "" || expense.date <= filters.endDate)
      );
    });
  };

  const filteredExpenses = applyFilters();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Select
              name="category"
              value={filters.category}
              onValueChange={handleSelectChange("category")}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="transportation">Transportation</SelectItem>
                <SelectItem value="grocery">Grocery</SelectItem>
                <SelectItem value="give">Give</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="tenderType">Tender Type</Label>
            <Select
              name="tenderType"
              value={filters.tenderType}
              onValueChange={handleSelectChange("tenderType")}
            >
              <SelectTrigger>
                <SelectValue placeholder="All Tender Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tender Types</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="gcash">GCash</SelectItem>
                <SelectItem value="maya">Maya</SelectItem>
                <SelectItem value="bank">Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleFilterChange}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleFilterChange}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount (PHP)</TableHead>
                <TableHead>Tender Type</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Comments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredExpenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.amount.toFixed(2)}</TableCell>
                  <TableCell>{expense.tenderType}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>{expense.comments}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
