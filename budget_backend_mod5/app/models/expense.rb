class Expense < ApplicationRecord
    belongs_to :category, dependent: :destroy
    has_one :user, through: :category
end
