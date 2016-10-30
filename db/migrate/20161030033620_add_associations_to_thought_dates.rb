class AddAssociationsToThoughtDates < ActiveRecord::Migration
  def change
    add_column :thought_dates, :recipient_id, :integer
    add_column :thought_dates, :card_id, :integer
  end
end
