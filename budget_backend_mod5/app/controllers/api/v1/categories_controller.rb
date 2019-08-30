class Api::V1::CategoriesController < ApplicationController

    def index
        render json: Category.all, each_serializer: CategorySerializer
    end 

    def create
        @category = Category.create(category_params)
        render json: @category, each_serializer: CategorySerializer
    end 


    private    
    def category_params
        params.require(:category).permit(:name, :user_id)
    end
end
