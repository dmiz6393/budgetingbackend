class Api::V1::ExpensesController < ApplicationController

    def index
        render json: Expense.all, each_serializer: ExpenseSerializer
    end 

    def create
        @expense = Expense.create(expense_params)
        render json: @expense, each_serializer: ExpenseSerializer
    end 


    private    
    def expense_params
        params.require(:expense).permit(:amount, :category_id)
    end
end
