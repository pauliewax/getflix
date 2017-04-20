class Genre < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :categorizations
  has_many :medias, :through => :categorization
end
