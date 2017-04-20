class AddIndexToVideos < ActiveRecord::Migration
  def change
    add_index :videos, :series_id, unique: true
  end
end
