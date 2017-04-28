class Follow < ActiveRecord::Base
  validates :user_id, :serie_id, presence: true

  belongs_to :series
  belongs_to :user
end
