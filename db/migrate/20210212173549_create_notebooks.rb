class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
       t.string :notebook_name, null: false 
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :notebooks, :notebook_name, unique: true
    add_index :notebooks, :author_id
  end
end
