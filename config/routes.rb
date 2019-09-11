Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get '/validate', to: 'auth#validate_token'
      post "/login", to: "auth#create"
      get '/profile', to: 'users#profile'
      resources :users, only: [:create, :update, :destroy ]
      resources :categories
      resources :expenses
    end
  end
end
