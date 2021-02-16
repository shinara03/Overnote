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
note1 = Note.create({title: 'note1', body: 'note 1 body', notebook_id: notebook1.id})
note2 = Note.create({title: 'note2', body: 'note 2 body', notebook_id: notebook1.id})
note3 = Note.create({title: 'note3', body: 'note 3 body', notebook_id: notebook1.id})

# Notes under notebook2
note4 = Note.create({title: 'Hello', body: 'note4 body', notebook_id: notebook2.id})
note5 = Note.create({title: 'World', body: 'note5 body', notebook_id: notebook2.id})
note6 = Note.create({title: 'Javascript', body: 'note 6 body', notebook_id: notebook2.id})
