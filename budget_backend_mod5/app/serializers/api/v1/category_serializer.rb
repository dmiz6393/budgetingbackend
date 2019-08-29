class Api::V1::CategorySerializer 
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_one :user
  has_many :expenses
end
