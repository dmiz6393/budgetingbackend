class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.integer :amount
      t.date :date
      t.references :category, foreign_key: true
      t.timestamps
    end
  end
end
