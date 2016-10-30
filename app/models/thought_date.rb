class ThoughtDate < ActiveRecord::Base
  belongs_to :recipient
  # belongs_to :card

  validates_presence_of :name, :recipient_id, :event_date
end
