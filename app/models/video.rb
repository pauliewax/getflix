class Video < ActiveRecord::Base
  validates :title, :description, :length, :series_id, :video_url, :thumbnail_url,
            presence: true
end
