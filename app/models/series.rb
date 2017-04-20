class Series < ActiveRecord::Base
  validates :title, :year, :mpaa_rating, :description, :thumbnail_url,
            presence: true

  has_many :genres, :through => :categorization, :as => :media
  
  has_many :videos
end
