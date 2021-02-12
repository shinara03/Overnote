@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :notebook_name, :author_id, :created_at, :updated_at
  end
end