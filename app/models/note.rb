class Note < ApplicationRecord
  validates :title, presence: true
  validates :notebook_id, presence: true
  
  belongs_to :notebook,
    primary_key: :id, 
    foreign_key: :notebook_id,
    class_name: :Notebook
  
end
