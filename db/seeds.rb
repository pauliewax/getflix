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
Follow.destroy_all

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
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/TV-PARTY-7.png.jpg'
)

series3 = Series.create(
title: 'Curb Your Enthusiasm',
year: '2000',
mpaa_rating: 'TV-MA',
description: '"Seinfeld" co-creator Larry David plays a version of himself on the improvised series.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/Larry-David-Curb-Your-Enthusiasm-season-eight.jpg'
)

series4 = Series.create(
title: 'The Twilight Zone',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/47195850.cached.jpg'
)

series5 = Series.create(
title: 'Trigun',
year: '1998',
mpaa_rating: 'TV-14',
description: 'Vash the Stampede is the most infamous outlaw on the planet Gunsmoke, and with a 60 billion double dollar price on his, head the most sought after!',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/1280x720-JON.jpg'
)

series6 = Series.create(
title: 'Ash vs Evil  Dead',
year: '2015',
mpaa_rating: 'TV-MA',
description: "Ash has spent the last 30 years avoiding responsibility, maturity and the terrors of the Evil Dead until a Deadite plague threatens to destroy all of mankind and Ash becomes mankind's only hope.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/151023-news-ash-vs-evil-dead.jpg'
)

series7 = Series.create(
title: 'The Simpsons',
year: '1989',
mpaa_rating: 'TV-14',
description: 'The satiric adventures of a working-class family in the misfit city of Springfield.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/the-latest-nfl-stadium-mess-or-old-man-yells-at-cloud-1424186090.jpg'
)

series8 = Series.create(
title: 'Taxi',
year: '1978',
mpaa_rating: 'TV-PG',
description: 'The staff of a New York City taxicab company go about their job while they dream of greater things.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/Taxi-Cast.jpg'
)

series9 = Series.create(
title: 'Louie',
year: '2010',
mpaa_rating: 'TV-MA',
description: 'The life of Louis CK, a divorced comedian with two kids living in New York.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/louieheader2_0.jpg'
)

series10 = Series.create(
title: 'MTV Cribs',
year: '2000',
mpaa_rating: 'TV-14',
description: "MTV's Cribs take you on exclusive tours through the domestic sanctuaries that some of today's most favorite stars call home.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/asset.jpg'
)

series11 = Series.create(
title: "It's Always Sunny in Philadelphia ",
year: '2005',
mpaa_rating: 'TV-MA',
description: "Five friends with big egos and slightly arrogant attitudes are the proprietors of an Irish bar in Philadelphia.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/679613.jpg'
)

series12 = Series.create(
title: 'The Beach Boys',
year: '1961',
mpaa_rating: 'TV-14',
description: 'The Beach Boys are an American rock band formed in Hawthorne, California in 1961.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/beachboys.jpg'
)

series13 = Series.create(
title: 'Lou Reed',
year: '1972',
mpaa_rating: 'TV-MA',
description: 'Lewis Allan "Lou" Reed was an American musician, singer and songwriter. He was the guitarist, vocalist, and principal songwriter of the Velvet Underground, and his solo career spanned five decades.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/Untitled-1.jpg'
)

series14 = Series.create(
title: 'Queen',
year: '1970',
mpaa_rating: 'TV-PG',
description: 'Queen are a British rock band that formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor, and John Deacon.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/Queen.jpg'
)

series15 = Series.create(
title: 'Chet Baker',
year: '1956',
mpaa_rating: 'TV-PG',
description: 'Chesney Henry "Chet" Baker, Jr. was an American jazz trumpeter, flugelhornist, and vocalist.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/pg5x3otbejjx.jpg'
)

series16 = Series.create(
title: 'Patti Smith',
year: '1975',
mpaa_rating: 'TV-PG',
description: 'Patricia Lee "Patti" Smith is an American singer-songwriter, poet, and visual artist who became an influential component of the New York City punk rock movement with her 1975 debut album Horses.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/patti.jpg'
)

series17 = Series.create(
title: 'Black Flag',
year: '1976',
mpaa_rating: 'TV-MA',
description: 'Black Flag was an American punk rock band formed in 1976 in Hermosa Beach, California.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/monster-children-henry-rollins-2.jpg'
)

series18 = Series.create(
title: 'David Bowie',
year: '1969',
mpaa_rating: 'TV-PG',
description: 'David Robert Jones, known professionally as David Bowie, was an English singer, songwriter and actor.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/maxresdefault3.jpg'
)

series19 = Series.create(
title: 'The Ronettes',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'The Ronettes were an American girl group from New York City. One of the most popular groups from the 1960s, they placed nine songs on the Billboard Hot 100, five of which became Top 40 hits.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/maxresdefault.jpg'
)

series20 = Series.create(
title: 'Aaliyah',
year: '1998',
mpaa_rating: 'TV-PG',
description: 'Aaliyah Dana Haughton was an American singer, dancer, actress, and model.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/aaliyah.jpg'
)

series21 = Series.create(
title: 'Richard Hell & The Voidoids',
year: '1975',
mpaa_rating: 'TV-MA',
description: 'Richard Hell is an American singer, songwriter, bass guitarist and writer. Richard Hell was an innovator of punk music and fashion.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/1363615654753.cached.jpg'
)

series22 = Series.create(
title: 'Marvin Gaye',
year: '1967',
mpaa_rating: 'TV-PG',
description: 'Marvin Gaye was an American singer, songwriter, session drummer and record producer.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/298017.jpg'
)

series23 = Series.create(
title: 'Talking Heads',
year: '1977',
mpaa_rating: 'TV-14',
description: 'Talking Heads were an American rock band formed in 1975 in New York City and active until 1991. ',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/1076b985e0ec4ff096e04bfb4f93bc47.jpg'
)

vid1 = Video.create(
  title: '2016 Dunk Contest Highlights',
  description: 'Aaron Gordon and Zach LaVine face off in one of the most ridiculous dunk competitions in recent memory.',
  length: '5m 43s',
  series_id: series1.id,
  episode_num: 1,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/nbadunks.mp4',
  thumbnail_url: 'http://cbssports.com/images/visual/whatshot/USATSI_9114927.jpg'
)

vid2 = Video.create(
title: 'Jean-Michel Basquiat',
description: "A young Basquiat talks life and art in downtown New York",
length: '9m 43s',
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
  episode_num: 2,
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

cat12 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series8.id,
  media_type: 'Series'
)

cat13 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series9.id,
  media_type: 'Series'
)

cat14 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series10.id,
  media_type: 'Series'
)

cat15 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series11.id,
  media_type: 'Series'
)

cat16 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series12.id,
  media_type: 'Series'
)

cat17 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series13.id,
  media_type: 'Series'
)

cat18 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series14.id,
  media_type: 'Series'
)

cat19 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series15.id,
  media_type: 'Series'
)

cat20 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series16.id,
  media_type: 'Series'
)

cat21 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series17.id,
  media_type: 'Series'
)

cat22 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series18.id,
  media_type: 'Series'
)

cat23 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series19.id,
  media_type: 'Series'
)

cat24 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series20.id,
  media_type: 'Series'
)

cat25 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series21.id,
  media_type: 'Series'
)

cat26 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series22.id,
  media_type: 'Series'
)

cat27 = Categorization.create(
  genre_id: genres[11].id,
  media_id: series23.id,
  media_type: 'Series'
)
