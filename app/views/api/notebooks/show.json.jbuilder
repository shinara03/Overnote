json.extract! @notebook, :id, :notebook_name, :author_id, :created_at, :updated_at
json.noteIds @notebook.notes.pluck(:id)
