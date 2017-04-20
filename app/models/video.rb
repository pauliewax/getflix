class Video < ActiveRecord::Base
  validates :title, :description, :length, :series_id, :video_url, :thumbnail_url,
            presence: true

  has_many :categorizations, :as => :media
  has_many :genres, :through => :categorizations, :as => :media

  belongs_to :series
end
