class Notebook < ApplicationRecord
  validates :notebook_name, presence: true, uniqueness: true
  validates :author_id, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
