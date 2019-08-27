class Api::V1::UserSerializer 
  include FastJsonapi::ObjectSerializer
  attributes :email, :id, :first_name, :last_name, :income 
end