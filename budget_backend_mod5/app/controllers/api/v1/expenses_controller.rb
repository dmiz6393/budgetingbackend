class Api::V1::ExpensesController < ApplicationController

    def index
        render json: Expense.all, each_serializer: ExpenseSerializer
    end 

    def show
        expense=Expense.find params[:id]
        render json: expense 
    end 

    def update 
        @expense= Expense.find params[:id]
        if @expense.update(amount: params[:amount], category_id: params[:category_id] )
            render json: @expense
        end
    end 

    def create
        @expense = Expense.create(expense_params)
        render json: @expense, each_serializer: ExpenseSerializer
    end 

    def destroy
        @expense = Expense.find(params[:id])
        @expense.destroy
    end


    private    
    def expense_params
        params.require(:expense).permit(:amount, :category_id)
    end
end
