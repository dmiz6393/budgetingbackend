class User < ApplicationRecord
    has_secure_password
    has_many :categories 
    has_many :expenses, through: :categories 

  validates :email, uniqueness: { case_sensitive: false }
  validates :password_digest, length: { minimum: 3 }
end
