class Api::V1::UsersController < ApplicationController
    skip_before_action :set_current_user, only: [:create]

    def index 
        render json: User.all, each_serializer: UserSerializer, include: '*.*.*'
    end

    def profile
        user = set_current_user
        if user
            render json: user, include: '*.*.*'
        else
            render json: { error: 'You need a token.' }, status: 401
        end
    end 

    def edit 
        @user=User.find params[:id]
        render json: user 
    end 

    def update
        user = set_current_user
        if user
            if user.update(budget: params[:budget].to_i, income: params[:income], goals:params[:goals] )
                render json: user
            else
                render json: { errors: user.errors.full_messages }, status: 400
            end
        else
            render json: { error: 'You need a token.' }, status: 401
        end        
    end 

    
    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token({ user_id: @user.id })
            # needed to correctly namespace serializer ...
            render json: { user: UserSerializer.new(@user), jwt: @token}, status: :created
        else
            render json: { error: 'Failed to create user', messages: @user.errors.full_messages }
        end
    end


    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: { message: "This user has been deleted." }
    end
    
    private    
    def user_params
        params.require(:user).permit(:email, :password, :first_name,:last_name, :income, :budget)
    end
end

