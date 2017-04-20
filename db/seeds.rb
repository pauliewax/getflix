# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Video.destroy_all
Genre.destroy_all
Series.destroy_all

guest = User.create(email: 'guest', password: 'password')

series1 = Series.create(
  title: 'NBA Basketball',
  year: '1949',
  mpaa_rating: 'TV-14',
  description: 'Where amazing happens.',
  thumbnail_url: 'http://4.bp.blogspot.com/-2783XaHJsv8/VimVvHzcklI/AAAAAAAAC24/dgTum7-w-H4/s1600/nba-basketball-houston-houston-rockets-rockets-los-angeles-los-angeles-lakers-hakeem-olajuwon-kareem-abdul-jabbar.jpg'
)

vid1 = Video.create(
  title: 'NBA 2016 Dunk Contest Highlights',
  description: 'Aaron Gordon and Zach LaVine face off in one of the most ridiculous dunk competitions in recent memory.',
  length: '5m 43s',
  year: 2016,
  series_id: series1.id,
  episode_num: 1,
  video_url: 'https://www.youtube.com/embed/K0p7lQVkI1U',
  thumbnail_url: 'http://cbssports.com/images/visual/whatshot/USATSI_9114927.jpg'
)

series2 = Series.create(
  title: 'TV Party',
  year: '1978',
  mpaa_rating: 'TV-PG',
  description: "Glenn O' Brien hosts a public-access television variety show.",
  thumbnail_url: 'http://nightflight.com/wp-content/uploads/TV-PARTY-7.png.jpg'
)

vid2 = Video.create(
  title: 'Jean-Michel Basquiat',
  description: "A young Basquiat talks life and art in downtown New York",
  length: '9m 43s',
  year: 1978,
  series_id: series2.id,
  episode_num: 1,
  video_url: 'https://www.youtube.com/embed/EHrZbS1yjmc',
  thumbnail_url: 'http://nightflight.com/wp-content/uploads/TV-PARTY-4.jpg'
)

genres = Genre.create([
  {name:'TV Shows'},
  {name:'Action'},
  {name:'Anime'},
  {name:'Children & Family'},
  {name:'Classics'},
  {name:'Comedies'},
  {name:'Documentaries'},
  {name:'Dramas'},
  {name:'Horror'},
  {name:'Independent'},
  {name:'International'},
  {name:'Music'},
  {name:'Romance'},
  {name:'Sci-Fi & Fantasy'},
  {name:'Sports'},
  {name:'Thrillers'}
])
