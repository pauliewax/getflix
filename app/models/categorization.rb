class Categorization < ActiveRecord::Base
  validates :genre_id, :media_id, :media_type, presence: true

  belongs_to :genre
  belongs_to :media, :polymorphic => true
end
