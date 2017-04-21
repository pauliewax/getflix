class ChangeIndexOnVideos < ActiveRecord::Migration
  def change
    remove_index :videos, :series_id
    add_index :videos, :series_id
  end
end
