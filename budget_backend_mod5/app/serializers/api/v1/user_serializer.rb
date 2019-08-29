class Api::V1::UserSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :email, :id, :first_name, :last_name, :income, :budget
  has_many :categories 
  has_many :expenses, through: :categories
end