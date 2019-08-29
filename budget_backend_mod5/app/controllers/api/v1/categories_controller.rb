class Api::V1::CategoriesController < ApplicationController

    def index
        render( { json: Api::V1::CategorySerializer.new(Category.all) } )
    end 

    def create
        @category = Category.create(category_params)
        render json: { user: Api::V1::CategorySerializer.new(@category)}
    end 


    private    
    def category_params
        params.require(:category).permit(:name, :user_id)
    end
end
