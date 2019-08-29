class Api::V1::ExpenseSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :id, :amount, :date
  has_one :category
end
