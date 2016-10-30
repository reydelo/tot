class CreateThoughtDates < ActiveRecord::Migration
  def change
    create_table :thought_dates do |t|
      t.string :name
      t.datetime :event_date

      t.timestamps null: false
    end
  end
end
