class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :mpaa_rating, null:false
      t.text :description, null: false
      t.string :thumbnail_url, null:false
      t.timestamps null: false
    end

    add_index :series, :title, unique: true
  end
end
