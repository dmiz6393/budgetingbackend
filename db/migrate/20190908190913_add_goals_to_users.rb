class AddGoalsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :goals, :integer
  end
end
