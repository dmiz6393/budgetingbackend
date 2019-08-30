class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :last_name, :income, :budget
  has_many :categories
  # has_many :expenses, through: :categories
end
