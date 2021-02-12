# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

#Users
user1 = User.create({email: 'shin1@gmail.com', password: "123456"})
user2 = User.create({email: 'Lena@gmail.com', password: "123456"})
user3 = User.create({email: 'helloWorld@gmail.com', password: "123456"})