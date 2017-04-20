class Genre < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :categorizations
  has_many :videos, :through => :categorizations, :source => :media, :source_type => 'Video'
  has_many :series, :through => :categorizations, :source => :media, :source_type => 'Series'
end
