class RemoveYearFromVideos < ActiveRecord::Migration
  def change
    remove_column :videos, :year
  end
end
