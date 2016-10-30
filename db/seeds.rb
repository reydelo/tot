# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
10.times { ThoughtDate.create!(name: 'My Thoughtful Date', event_date: DateTime.strptime("09/14/2009 8:00", "%m/%d/%Y %H:%M"))}
