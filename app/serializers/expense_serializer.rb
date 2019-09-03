class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :amount , :created_at
end
