class CreateRecipients < ActiveRecord::Migration
  def change
    create_table :recipients do |t|
      t.string :first_name
      t.string :last_name
      t.integer :user_id
      t.string :relationship
      t.string :address
      t.string :city
      t.string :state
      t.string :zip_code

      t.timestamps null: false
    end

    add_index :recipients, :user_id
  end
end
