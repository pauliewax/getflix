class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :length, null: false
      t.integer :year, null: false
      t.integer :series_id, null: false
      t.integer :episode_num
      t.string :video_url, null: false
      t.string :thumbnail_url, null: false
      t.timestamps
    end
  end
end
