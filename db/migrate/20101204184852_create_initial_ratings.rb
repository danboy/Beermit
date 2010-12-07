class CreateInitialRatings < ActiveRecord::Migration
  def self.up
    create_table :characteristics do |t|
      t.string :name
      t.timestamps
    end
    create_table :categories_characteristics, :id => false do |t|
      t.integer :category_id
      t.integer :characteristic_id
    end
    create_table :reviews do |t|
      t.integer :user_id
      t.text :editorial
      t.integer :item_id
    end
    create_table :ratings do |t|
      t.integer :review_id
      t.integer :characteristic_id
      t.integer :value
    end
  end

  def self.down
    drop_table :characteristics
    drop_table :categories_characteristics
    drop_table :reviews
    drop_table :ratings
  end
end
