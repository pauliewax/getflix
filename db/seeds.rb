
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

genres = Genre.create([
  {name:'TV Shows'},
  {name:'Music'},
  {name:'Sports'}
])

series1 = Series.create(
  title: 'An Idiot Abroad',
  year: '2010',
  mpaa_rating: 'TV-14',
  description: 'Brit Karl Pilkington has led a sheltered life. Not having done any traveling, he enjoys living within the comforts of what he knows, basically that being what is purely British. As such, his friends, Ricky Gervais and Stephen Merchant, decide to send Karl to various parts of the world to experience unfamiliar cultures.',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/tv_idiot.jpg'
)

series2 = Series.create(
title: 'TV Party',
year: '1978',
mpaa_rating: 'TV-PG',
description: "Glenn O' Brien hosts a public-access television variety show.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/tv_tvparty.jpg'
)

series3 = Series.create(
title: 'Curb Your Enthusiasm',
year: '2000',
mpaa_rating: 'TV-MA',
description: '"Seinfeld" co-creator Larry David plays a version of himself on the improvised series.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/tv_curb.jpg'
)

series4 = Series.create(
title: 'The Twilight Zone',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/tv_twilight.jpg'
)

series5 = Series.create(
title: 'MTV Cribs',
year: '2000',
mpaa_rating: 'TV-14',
description: "MTV's Cribs take you on exclusive tours through the domestic sanctuaries that some of today's most favorite stars call home.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/tv_cribs.jpg'
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
title: "It's Always Sunny in Philadelphia ",
year: '2005',
mpaa_rating: 'TV-MA',
description: "Five friends with big egos and slightly arrogant attitudes are the proprietors of an Irish bar in Philadelphia.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/679613.jpg'
)

series11 = Series.create(
title: 'Trigun',
year: '1998',
mpaa_rating: 'TV-14',
description: 'Vash the Stampede is the most infamous outlaw on the planet Gunsmoke, and with a 60 billion double dollar price on his, head the most sought after!',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/1280x720-JON.jpg'
)

series12 = Series.create(
title: 'Queen',
year: '1970',
mpaa_rating: 'TV-PG',
description: 'Queen are a British rock band that formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor, and John Deacon.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/music_queen.jpg'
)

series13 = Series.create(
title: 'The Ronettes',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'The Ronettes were an American girl group from New York City. One of the most popular groups from the 1960s, they placed nine songs on the Billboard Hot 100, five of which became Top 40 hits.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/music_ronettes.jpg'
)

series14 = Series.create(
title: 'The Beach Boys',
year: '1961',
mpaa_rating: 'TV-14',
description: 'The Beach Boys are an American rock band formed in Hawthorne, California in 1961.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/beachboys.jpg'
)

series15 = Series.create(
title: 'Lou Reed',
year: '1972',
mpaa_rating: 'TV-MA',
description: 'Lewis Allan "Lou" Reed was an American musician, singer and songwriter. He was the guitarist, vocalist, and principal songwriter of the Velvet Underground, and his solo career spanned five decades.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/Untitled-1.jpg'
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
title: 'Chet Baker',
year: '1956',
mpaa_rating: 'TV-PG',
description: 'Chesney Henry "Chet" Baker, Jr. was an American jazz trumpeter, flugelhornist, and vocalist.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/pg5x3otbejjx.jpg'
)

series19 = Series.create(
title: 'David Bowie',
year: '1969',
mpaa_rating: 'TV-PG',
description: 'David Robert Jones, known professionally as David Bowie, was an English singer, songwriter and actor.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/maxresdefault3.jpg'
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

series24 = Series.create(
title: 'Jackson 5',
year: '1964',
mpaa_rating: 'TV-PG',
description: 'The Jackson 5, or Jackson Five, also known as the Jacksons in later years, are an American popular music group.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/music_jackson5.jpg'
)

series25 = Series.create(
title: 'Nas',
year: '1994',
mpaa_rating: 'TV-MA',
description: 'Nasir Bin Olu Dara Jones, better known by his stage name Nas, is an American rapper, record producer, actor and entrepreneur. ',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/music_nas.jpg'
)

series26 = Series.create(
title: 'Redbone',
year: '1973',
mpaa_rating: 'TV-PG',
description: 'Redbone is a Native American rock group originating in the 1970s with brothers Pat and Lolly Vegas. They reached the Top 5 on the U.S. Billboard Hot 100 chart in 1974 with their No. 5 hit single, "Come and Get Your Love".',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/music_redbone.jpg'
)

series27 = Series.create(
title: 'Senna',
year: '2011',
mpaa_rating: 'TV-14',
description: "Ayrton Senna becomes a three-time Formula One racing champion and Brazil's national hero before his untimely death at age 34.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_senna.jpg'
)

series28 = Series.create(
title: 'I Am Ali',
year: '2014',
mpaa_rating: 'TV-14',
description: "Muhammad Ali's own audio journals, friends, family and fellow boxers provide insight into the extraordinary life and legendary career of the pugilist.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_ali.jpg'
)

series29 = Series.create(
title: 'Red Bull BC One',
year: '2013',
mpaa_rating: 'TV-PG',
description: "Red Bull BC One is the biggest one-on- one breakdancing competition in the world. Every year, thousands of dancers across the globe vie for a chance to represent at the World Final.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_breaking.jpg'
)

series30 = Series.create(
title: 'Rule Yourself',
year: '2016',
mpaa_rating: 'TV-PG',
description: "This summer, Michael Phelps is swimming for his last time at the Olympics and collecting a few more gold medals along the way.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_phelps.jpg'
)

series31 = Series.create(
title: 'NBA Dunk Competition',
year: '2016',
mpaa_rating: 'TV-14',
description: 'Where amazing happens.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_dunk.jpg'
)

vid1 = Video.create(
  title: 'NBA Dunk Competition',
  description: 'Aaron Gordon and Zach LaVine face off in one of the most ridiculous dunk competitions in recent memory.',
  length: '5m 43s',
  series_id: series31.id,
  episode_num: 1,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/nbadunks.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_dunk.jpg'
)

vid2 = Video.create(
  title: 'Krazee-Eyez Killa',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 1,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb1.jpg'
)

vid3 = Video.create(
  title: 'The Doll',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 2,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb2.jpg'
)

vid4 = Video.create(
  title: 'Seinfeld',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 3,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb3.jpg'
)

vid5 = Video.create(
  title: 'The Table Read',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 4,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb4.jpg'
)

vid6 = Video.create(
  title: 'The Car Pool Lane',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 5,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb5.jpg'
)

vid7 = Video.create(
  title: 'Mister Softee',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 6,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb6.jpg'
)

vid8 = Video.create(
  title: 'The Therapists',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 7,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb7.jpg'
)

vid9 = Video.create(
  title: 'The Grand Opening',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 8,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb8.jpg'
)

vid10 = Video.create(
  title: 'The End',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 9,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb9.jpg'
)

vid11 = Video.create(
  title: 'Officer Krupke',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 10,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/curb10.jpg'
)

vid12 = Video.create(
  title: 'Walking Distance',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 1,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight1.jpg'
)

vid12 = Video.create(
  title: 'Eye of the Beholder',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 2,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight2.jpg'
)

vid12 = Video.create(
  title: 'Time Enough At Last',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 3,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight3.jpg'
)

vid12 = Video.create(
  title: 'To Serve Man',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 4,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight4.jpg'
)

vid12 = Video.create(
  title: "The Bewitchin' Pool",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 5,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight5.jpg'
)

vid12 = Video.create(
  title: 'The Hitch-Hiker',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 6,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight6.jpg'
)

vid12 = Video.create(
  title: 'The After Hours',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 7,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight7.jpg'
)

vid12 = Video.create(
  title: 'Where is Everybody',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 8,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight8.jpg'
)

vid12 = Video.create(
  title: 'A World of Difference',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 9,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight9.jpg'
)

vid12 = Video.create(
  title: 'Living Doll',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 10,
  video_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/rickroll.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/twilight10.jpg'
)

cat1 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series1.id,
  media_type: 'Series'
)

cat2 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series2.id,
  media_type: 'Series'
)

cat3 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series3.id,
  media_type: 'Series'
)

cat4 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series4.id,
  media_type: 'Series'
)

cat5 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series5.id,
  media_type: 'Series'
)

cat6 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series6.id,
  media_type: 'Series'
)

cat7 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series7.id,
  media_type: 'Series'
)

cat8 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series8.id,
  media_type: 'Series'
)

cat9 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series9.id,
  media_type: 'Series'
)

cat10 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series10.id,
  media_type: 'Series'
)

cat11 = Categorization.create(
  genre_id: genres.first.id,
  media_id: series11.id,
  media_type: 'Series'
)

cat12 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series12.id,
  media_type: 'Series'
)

cat13 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series13.id,
  media_type: 'Series'
)

cat14 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series14.id,
  media_type: 'Series'
)

cat15 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series15.id,
  media_type: 'Series'
)

cat16 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series16.id,
  media_type: 'Series'
)

cat17 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series17.id,
  media_type: 'Series'
)

cat18 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series18.id,
  media_type: 'Series'
)

cat19 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series19.id,
  media_type: 'Series'
)

cat20 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series20.id,
  media_type: 'Series'
)

cat21 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series21.id,
  media_type: 'Series'
)

cat22 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series22.id,
  media_type: 'Series'
)

cat23 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series23.id,
  media_type: 'Series'
)

cat24 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series24.id,
  media_type: 'Series'
)

cat25 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series25.id,
  media_type: 'Series'
)

cat26 = Categorization.create(
  genre_id: genres[1].id,
  media_id: series26.id,
  media_type: 'Series'
)

cat27 = Categorization.create(
  genre_id: genres[2].id,
  media_id: series27.id,
  media_type: 'Series'
)

cat28 = Categorization.create(
  genre_id: genres[2].id,
  media_id: series28.id,
  media_type: 'Series'
)

cat29 = Categorization.create(
  genre_id: genres[2].id,
  media_id: series29.id,
  media_type: 'Series'
)

cat30 = Categorization.create(
  genre_id: genres[2].id,
  media_id: series30.id,
  media_type: 'Series'
)

cat31 = Categorization.create(
  genre_id: genres[2].id,
  media_id: series31.id,
  media_type: 'Series'
)
