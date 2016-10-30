class Recipient < ActiveRecord::Base
  belongs_to :user
  has_many :thought_dates, dependent: :destroy

  validates_presence_of :first_name, :last_name, :user_id

end
