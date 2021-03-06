class Notebook < ApplicationRecord
  validates :author_id, presence: true
  validates :notebook_name, presence: true, uniqueness: {scope: :author_id}

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :notes,
    primary_key: :id,
    foreign_key: :notebook_id,
    class_name: :Note
end
