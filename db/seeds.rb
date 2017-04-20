# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Video.destroy_all

guest = User.create(email: 'guest', password: 'password')

vid1 = Video.create(
  title: 'NBA 2016 Dunk Contest Highlights',
  description: 'Aaron Gordon and Zach LaVine face off in one of the most ridiculous dunk competitions in recent memory.',
  length: '5m 43s',
  year: 2016,
  series_id: 0,
  episode_num: 1,
  video_url: 'https://www.youtube.com/embed/K0p7lQVkI1U',
  thumbnail_url: 'http://cbssports.com/images/visual/whatshot/USATSI_9114927.jpg'
  )

  vid2 = Video.create(
    title: 'TV Party: Basquiat',
    description: "Glenn O' Brien interviews a young Basquiat on public access television.",
    length: '9m 43s',
    year: 1978,
    series_id: 1,
    episode_num: 1,
    video_url: 'https://www.youtube.com/embed/EHrZbS1yjmc',
    thumbnail_url: 'http://nightflight.com/wp-content/uploads/TV-PARTY-4.jpg'
    )
