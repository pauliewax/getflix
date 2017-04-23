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
Categorization.destroy_all

guest = User.create(email: 'Guest', password: 'password')

series1 = Series.create(
  title: 'NBA Basketball',
  year: '1949',
  mpaa_rating: 'TV-14',
  description: 'Where amazing happens.',
  thumbnail_url: 'http://4.bp.blogspot.com/-2783XaHJsv8/VimVvHzcklI/AAAAAAAAC24/dgTum7-w-H4/s1600/nba-basketball-houston-houston-rockets-rockets-los-angeles-los-angeles-lakers-hakeem-olajuwon-kareem-abdul-jabbar.jpg'
)

series2 = Series.create(
title: 'TV Party',
year: '1978',
mpaa_rating: 'TV-PG',
description: "Glenn O' Brien hosts a public-access television variety show.",
thumbnail_url: 'http://nightflight.com/wp-content/uploads/TV-PARTY-7.png.jpg'
)

series3 = Series.create(
title: 'Curb Your Enthusiasm',
year: '2000',
mpaa_rating: 'TV-MA',
description: '"Seinfeld" co-creator Larry David plays a version of himself on the improvised series.',
thumbnail_url: 'http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/03/Larry-David-Curb-Your-Enthusiasm-season-eight.jpg'
)

series4 = Series.create(
title: 'The Twilight Zone',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.',
thumbnail_url: 'http://i.onionstatic.com/avclub/4242/02/16x9/960.jpg'
)

series5 = Series.create(
title: 'Trigun',
year: '1998',
mpaa_rating: 'TV-14',
description: 'Vash the Stampede is the most infamous outlaw on the planet Gunsmoke, and with a 60 billion double dollar price on his, head the most sought after!',
thumbnail_url: 'http://www.thegeekgirlproject.com/wp-content/uploads/2013/04/Trigun-anime-Vash.jpg'
)

series6 = Series.create(
title: 'Ash vs Evil  Dead',
year: '2015',
mpaa_rating: 'TV-MA',
description: "Ash has spent the last 30 years avoiding responsibility, maturity and the terrors of the Evil Dead until a Deadite plague threatens to destroy all of mankind and Ash becomes mankind's only hope.",
thumbnail_url: 'https://i.kinja-img.com/gawker-media/image/upload/s--KKYangpI--/c_scale,f_auto,fl_progressive,q_80,w_800/1470758880757767973.png'
)

series7 = Series.create(
title: 'The Simpsons',
year: '1989',
mpaa_rating: 'TV-14',
description: 'The satiric adventures of a working-class family in the misfit city of Springfield.',
thumbnail_url: 'http://i1.kym-cdn.com/entries/icons/facebook/000/019/304/old.jpg'
)

vid1 = Video.create(
  title: '2016 Dunk Contest Highlights',
  description: 'Aaron Gordon and Zach LaVine face off in one of the most ridiculous dunk competitions in recent memory.',
  length: '5m 43s',
  year: 2016,
  series_id: series1.id,
  episode_num: 1,
  video_url: 'https://www.youtube.com/embed/K0p7lQVkI1U',
  thumbnail_url: 'http://cbssports.com/images/visual/whatshot/USATSI_9114927.jpg'
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

vid3 = Video.create(
  title: 'Allen Iverson vs. Michael Jordan',
  description: 'In his rookie season, Iverson puts his signature move to the test.',
  length: '59s',
  year: 1996,
  series_id: series1.id,
  episode_num: 1,
  video_url: 'https://www.youtube.com/embed/zJMi5lvQqq8',
  thumbnail_url: 'http://cdn.ambrosiaforheads.com/wp-content/uploads/2017/03/Iverson-Jordan.jpg'
)

vid4 = Video.create(
  title: 'The Pants Tent',
  description: "Larry's baggy new pants create awkward misunderstandings among Larry, Cheryl, and her friend.",
  length: '30m',
  year: 2000,
  series_id: series3.id,
  episode_num: 1,
  video_url: 'https://www.youtube.com/watch?v=XYV4btxlfBc',
  thumbnail_url: 'http://i.lv3.hbo.com/assets/images/series/curb-your-enthusiasm/episodes/8/73/palestinian-chicken-05-1920.jpg'
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

cat1 = Categorization.create(
  genre_id: genres.first.id,
  media_id: vid2.id,
  media_type: 'Video'
)

cat2 = Categorization.create(
  genre_id: genres[14].id,
  media_id: vid1.id,
  media_type: 'Video'
)

cat3 = Categorization.create(
  genre_id: genres[14].id,
  media_id: vid3.id,
  media_type: 'Video'
)

cat4 = Categorization.create(
  genre_id: genres[14].id,
  media_id: series1.id,
  media_type: 'Series'
)

cat5 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series2.id,
  media_type: 'Series'
)

cat6 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series3.id,
  media_type: 'Series'
)

cat7 = Categorization.create(
  genre_id: genres.first.id,
  media_id: vid4.id,
  media_type: 'Video'
)

cat8 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series4.id,
  media_type: 'Series'
)

cat9 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series5.id,
  media_type: 'Series'
)

cat10 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series6.id,
  media_type: 'Series'
)

cat11 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series7.id,
  media_type: 'Series'
)
