class User < ApplicationRecord
    has_secure_password
    has_many :categories , dependent: :destroy
    has_many :expenses, through: :categories, dependent: :destroy

    validates :email, uniqueness: { case_sensitive: false }
    validates :password_digest, length: { minimum: 3 }
end
