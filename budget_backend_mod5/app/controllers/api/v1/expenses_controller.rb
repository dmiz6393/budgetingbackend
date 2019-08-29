class Api::V1::ExpensesController < ApplicationController

    def index
        render( { json: Api::V1::ExpenseSerializer.new(Expense.all) } )
    end 

    def create
        @expense = Expense.create(expense_params)
        render json: { user: Api::V1::ExpenseSerializer.new(@expense)}
    end 


    private    
    def expense_params
        params.require(:expense).permit(:amount, :category_id)
    end
end
