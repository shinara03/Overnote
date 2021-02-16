class ChangeNotebooks < ActiveRecord::Migration[5.2]
  def change
    drop_table :notebooks
    drop_table :notes
  end
end
