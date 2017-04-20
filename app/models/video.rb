class Video < ActiveRecord::Base
  validates :title, :description, :length, :series_id, :video_url, :thumbnail_url,
            presence: true

  has_many :genres, :through => :categorization, :as => :media

  belongs_to :series
end
