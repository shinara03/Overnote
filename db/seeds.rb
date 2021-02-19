# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all

#Users
user1 = User.create({email: 'shin1@gmail.com', password: "123456"})
user2 = User.create({email: 'Lena@gmail.com', password: "123456"})
user3 = User.create({email: 'helloWorld@gmail.com', password: "123456"})

#Notebooks
notebook1 = Notebook.create({notebook_name: 'first notebook', author_id: user1.id})
notebook2 = Notebook.create({notebook_name: 'second notebook', author_id: user1.id})
notebook3 = Notebook.create({notebook_name: 'third notebook', author_id: user1.id})

#Notes 
# Notes under notebook1 
note1 = Note.create({title: 'Lorem Ipsum', 
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", notebook_id: notebook1.id})
note2 = Note.create({title: 'Note2',
   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Id venenatis a condimentum vitae sapien pellentesque. Cum sociis natoque penatibus et.  
    Auctor elit sed vulputate mi sit amet mauris commodo quis. Diam phasellus vestibulum lorem sed risus ultricies. 
    Enim diam vulputate ut pharetra sit. Vulputate odio ut enim blandit volutpat. 
    Interdum consectetur libero id faucibus nisl tincidunt eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna.", notebook_id: notebook1.id})
note3 = Note.create({title: 'Note3', body: 'note 3 body', notebook_id: notebook1.id})
note4 = Note.create({title: 'Note4', body: 'note 4 body', notebook_id: notebook1.id})
note5 = Note.create({title: 'Note5', body: 'note 5 body', notebook_id: notebook1.id})
note6 = Note.create({title: 'Note6', body: 'note 6 body', notebook_id: notebook1.id})
note7 = Note.create({title: 'Note7', body: 'note 7 body', notebook_id: notebook1.id})
note8 = Note.create({title: 'Note8', body: 'note 8 body', notebook_id: notebook1.id})
note9 = Note.create({title: 'Note9', body: 'note 9 body', notebook_id: notebook1.id})
note10 = Note.create({title: 'Note10', 
  body: "Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience.
   As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for. 
   It wasn't often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.", notebook_id: notebook1.id})



# Notes under notebook2
note20 = Note.create({title: 'Hello', body: 'note4 body', notebook_id: notebook2.id})
note21 = Note.create({title: 'World', body: 'note5 body', notebook_id: notebook2.id})
note22 = Note.create({title: 'Javascript', body: 'note 6 body', notebook_id: notebook2.id})
