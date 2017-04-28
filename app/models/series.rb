class Series < ActiveRecord::Base
  validates :title, :year, :mpaa_rating, :description, :thumbnail_url,
            presence: true

  has_many :categorizations, :as => :media
  has_many :genres, :through => :categorizations, :as => :media

  has_many :videos

  has_many :follows
  has_many :users, :through => :follows, :source => :user
end
