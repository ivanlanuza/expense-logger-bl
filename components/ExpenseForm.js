"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExpenseForm() {
  const [expense, setExpense] = useState({
    date: "",
    amount: "",
    tenderType: "",
    category: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name) => (value) => {
    setExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense submitted:", expense);
    setExpense({
      date: "",
      amount: "",
      tenderType: "",
      category: "",
      comments: "",
    });
  };

  return (
    <Card className="lg:w-1/2 w-full">
      <CardHeader>
        <CardTitle>Log Expense</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="amount">Amount (PHP)</Label>
            <Input
              id="amount"
              type="number"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              placeholder="0.00"
              step="0.01"
              min="0"
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="tenderType">Tender Type</Label>
            <Select
              name="tenderType"
              value={expense.tenderType}
              onValueChange={handleSelectChange("tenderType")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Tender Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="gcash">GCash</SelectItem>
                <SelectItem value="maya">Maya</SelectItem>
                <SelectItem value="bank">Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="category">Category</Label>
            <Select
              name="category"
              value={expense.category}
              onValueChange={handleSelectChange("category")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
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
            <Label htmlFor="comments">Comments (Optional)</Label>
            <Textarea
              id="comments"
              name="comments"
              value={expense.comments}
              onChange={handleChange}
              rows="2"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Log Expense</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
