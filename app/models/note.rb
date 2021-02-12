class Note < ApplicationRecord
  validates :title, presence: true
  validates :notebook_id, presence: true, uniqueness: true
  
  
end
