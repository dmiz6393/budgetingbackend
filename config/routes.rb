Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get '/validate', to: 'auth#validate_token'
      post "/login", to: "auth#create"
      get '/profile', to: 'users#profile'
      patch '/profile', to: 'users#update'
      # delete '/profile', to: 'users#destroy'
      resources :users, only: [:create, :destroy ]
      resources :categories
      resources :expenses
    end
  end
end
