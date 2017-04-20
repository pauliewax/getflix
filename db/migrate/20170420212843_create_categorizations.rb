class CreateCategorizations < ActiveRecord::Migration
  def change
    create_table :categorizations do |t|
      t.integer :genre_id
      t.integer :media_id
      t.string :media_type
    end
  end
end
