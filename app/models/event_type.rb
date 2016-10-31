class EventType < ActiveRecord::Base
  # has_many :card_events, :dependent => :destroy
  # has_many :cards, through: :card_events
  validates_presence_of :name

  def self.all_names
    EventType.all.order(:name)
  end

end
