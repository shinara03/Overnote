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
notebook1 = Notebook.create({notebook_name: 'First Notebook', author_id: user1.id})
notebook2 = Notebook.create({notebook_name: 'Second Notebook', author_id: user1.id})
notebook3 = Notebook.create({notebook_name: 'Third Notebook', author_id: user1.id})
notebook4 = Notebook.create({notebook_name: 'Fourth Notebook', author_id: user1.id})
notebook5 = Notebook.create({notebook_name: 'Fifth Notebook', author_id: user1.id})

#Notes 
# Notes under notebook1 
note1 = Note.create({title: 'Lorem Ipsum', 
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", notebook_id: notebook1.id})

note2 = Note.create({title: 'Note 2',
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Id venenatis a condimentum vitae sapien pellentesque. Cum sociis natoque penatibus et.  
  Auctor elit sed vulputate mi sit amet mauris commodo quis. Diam phasellus vestibulum lorem sed risus ultricies. 
  Enim diam vulputate ut pharetra sit. Vulputate odio ut enim blandit volutpat. 
  Interdum consectetur libero id faucibus nisl tincidunt eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna.", notebook_id: notebook1.id})

note3 = Note.create({title: 'Note 3', body: "Feugiat nisl pretium fusce id velit. Et netus et malesuada fames ac. 
  Luctus accumsan tortor posuere ac. Lacinia quis vel eros donec ac odio tempor orci. 
  Nisl condimentum id venenatis a condimentum vitae sapien. 
  Condimentum vitae sapien pellentesque habitant morbi tristique senectus et.
  Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
  Nunc faucibus a pellentesque sit amet porttitor eget dolor.
  Magna etiam tempor orci eu lobortis elementum. Dictum fusce ut placerat orci. 
  Facilisi cras fermentum odio eu feugiat pretium. 
  In ante metus dictum at tempor commodo. 
  Massa vitae tortor condimentum lacinia quis vel eros donec.", notebook_id: notebook1.id})

note4 = Note.create({title: 'Note4', body: "Adipiscing diam donec adipiscing tristique. 
  Sollicitudin aliquam ultrices sagittis orci a scelerisque.
  Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. 
  Amet massa vitae tortor condimentum. Fringilla urna porttitor rhoncus dolor purus. 
  Fusce id velit ut tortor pretium viverra suspendisse potenti. 
  Aliquet bibendum enim facilisis gravida neque. 
  In fermentum posuere urna nec tincidunt praesent semper feugiat nibh.Mi proin sed libero enim sed faucibus.
  Lectus nulla at volutpat diam ut venenatis tellus.
  Ante in nibh mauris cursus. Nunc sed augue lacus viverra vitae congue eu consequat.
  Auctor urna nunc id cursus metus aliquam eleifend.", notebook_id: notebook1.id})

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
note20 = Note.create({title: 'Note 11', body: "In ante metus dictum at tempor commodo ullamcorper. 
  Tristique senectus et netus et malesuada.
  Neque egestas congue quisque egestas diam in arcu.
  Nec dui nunc mattis enim ut tellus elementum sagittis. 
  Sem et tortor consequat id porta nibh venenatis cras sed. 
  Turpis in eu mi bibendum neque egestas. 
  Proin nibh nisl condimentum id venenatis a. 
  Est lorem ipsum dolor sit amet consectetur.
  Tristique senectus et netus et malesuada. 
  Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. 
  Feugiat in ante metus dictum at tempor commodo ullamcorper.
  Mi bibendum neque egestas congue quisque. ", notebook_id: notebook2.id})
  
note21 = Note.create({title: 'Note 12', body: "Donec ultrices tincidunt arcu non sodales neque.
  Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. 
  Nunc aliquet bibendum enim facilisis gravida neque convallis. 
  Vitae et leo duis ut diam quam. Nullam non nisi est sit. 
  Convallis a cras semper auctor neque vitae tempus quam pellentesque. 
  Lorem ipsum dolor sit amet consectetur. Hendrerit dolor magna eget est lorem ipsum.", notebook_id: notebook2.id})

# Notes under notebook3

note22 = Note.create({title: 'Note 13', body: "Dui id ornare arcu odio ut sem nulla. 
  Ipsum suspendisse ultrices gravida dictum fusce ut.
  Non sodales neque sodales ut etiam sit amet nisl purus. 
  Nunc sed augue lacus viverra vitae congue eu. 
  Elementum pulvinar etiam non quam lacus suspendisse. 
  Mi eget mauris pharetra et ultrices neque. 
  Nunc sed velit dignissim sodales ut eu sem integer vitae", notebook_id: notebook3.id})
