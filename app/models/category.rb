class Category < ActiveRecord::Base
  has_and_belongs_to_many :characteristics
  accepts_nested_attributes_for :characteristics
  has_many :items
end
