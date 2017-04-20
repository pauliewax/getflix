class Series < ActiveRecord::Base
  validates :title, :year, :mpaa_rating, :description, :thumbnail_url,
            presence: true
end
