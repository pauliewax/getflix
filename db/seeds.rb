
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
  {name:'Sports'},
  {name:'Classics'}
])

series1 = Series.create(
  title: 'An Idiot Abroad',
  year: '2010',
  mpaa_rating: 'TV-14',
  description: 'Brit Karl Pilkington has led a sheltered life. Not having done any traveling, he enjoys living within the comforts of what he knows, basically that being what is purely British. As such, his friends, Ricky Gervais and Stephen Merchant, decide to send Karl to various parts of the world to experience unfamiliar cultures.',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_idiot.jpg'
)

series2 = Series.create(
title: 'TV Party',
year: '1978',
mpaa_rating: 'TV-PG',
description: "Glenn O' Brien hosts a public-access television variety show.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_tvparty.jpg'
)

series3 = Series.create(
title: 'Curb Your Enthusiasm',
year: '2000',
mpaa_rating: 'TV-MA',
description: '"Seinfeld" co-creator Larry David plays a version of himself on the improvised series.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_curb.jpg'
)

series4 = Series.create(
title: 'The Twilight Zone',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'Ordinary people find themselves in extraordinarily astounding situations, which they each try to solve in a remarkable manner.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_twilight.jpg'
)

series5 = Series.create(
title: 'MTV Cribs',
year: '2000',
mpaa_rating: 'TV-14',
description: "MTV's Cribs take you on exclusive tours through the domestic sanctuaries that some of today's most favorite stars call home.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_cribs.jpg'
)

series6 = Series.create(
title: 'Ash vs Evil  Dead',
year: '2015',
mpaa_rating: 'TV-MA',
description: "Ash has spent the last 30 years avoiding responsibility, maturity and the terrors of the Evil Dead until a Deadite plague threatens to destroy all of mankind and Ash becomes mankind's only hope.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_evildead.jpg'
)

series7 = Series.create(
title: 'The Simpsons',
year: '1989',
mpaa_rating: 'TV-14',
description: 'The satiric adventures of a working-class family in the misfit city of Springfield.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_simpsons.jpg'
)

series8 = Series.create(
title: 'Taxi',
year: '1978',
mpaa_rating: 'TV-PG',
description: 'The staff of a New York City taxicab company go about their job while they dream of greater things.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_taxi.jpg'
)

series9 = Series.create(
title: 'Louie',
year: '2010',
mpaa_rating: 'TV-MA',
description: 'The life of Louis CK, a divorced comedian with two kids living in New York.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_louie.jpg'
)

series10 = Series.create(
title: "It's Always Sunny in Philadelphia",
year: '2005',
mpaa_rating: 'TV-MA',
description: "Five friends with big egos and slightly arrogant attitudes are the proprietors of an Irish bar in Philadelphia.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_sunny.jpg'
)

series11 = Series.create(
title: 'Trigun',
year: '1998',
mpaa_rating: 'TV-14',
description: 'Vash the Stampede is the most infamous outlaw on the planet Gunsmoke, and with a 60 billion double dollar price on his, head the most sought after!',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_trigun.jpg'
)

series12 = Series.create(
title: 'Queen',
year: '1970',
mpaa_rating: 'TV-PG',
description: 'Queen are a British rock band that formed in London in 1970. Their classic line-up was Freddie Mercury, Brian May, Roger Taylor, and John Deacon.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_queen.jpg'
)

series13 = Series.create(
title: 'The Ronettes',
year: '1959',
mpaa_rating: 'TV-PG',
description: 'The Ronettes were an American girl group from New York City. One of the most popular groups from the 1960s, they placed nine songs on the Billboard Hot 100, five of which became Top 40 hits.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_ronettes.jpg'
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
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_loureed.jpg'
)

series16 = Series.create(
title: 'Patti Smith',
year: '1975',
mpaa_rating: 'TV-PG',
description: 'Patricia Lee "Patti" Smith is an American singer-songwriter, poet, and visual artist who became an influential component of the New York City punk rock movement with her 1975 debut album Horses.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_pattismith.jpg'
)

series17 = Series.create(
title: 'Black Flag',
year: '1976',
mpaa_rating: 'TV-MA',
description: 'Black Flag was an American punk rock band formed in 1976 in Hermosa Beach, California.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_blackflag.jpg'
)

series18 = Series.create(
title: 'Chet Baker',
year: '1956',
mpaa_rating: 'TV-PG',
description: 'Chesney Henry "Chet" Baker, Jr. was an American jazz trumpeter, flugelhornist, and vocalist.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_chetbaker.jpg'
)

series19 = Series.create(
title: 'David Bowie',
year: '1969',
mpaa_rating: 'TV-PG',
description: 'David Robert Jones, known professionally as David Bowie, was an English singer, songwriter and actor.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_bowie.jpg'
)

series20 = Series.create(
title: 'Aaliyah',
year: '1998',
mpaa_rating: 'TV-PG',
description: 'Aaliyah Dana Haughton was an American singer, dancer, actress, and model.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_aaliyah.jpg'
)

series21 = Series.create(
title: 'Richard Hell & The Voidoids',
year: '1975',
mpaa_rating: 'TV-MA',
description: 'Richard Hell is an American singer, songwriter, bass guitarist and writer. Richard Hell was an innovator of punk music and fashion.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_richardhell.jpg'
)

series22 = Series.create(
title: 'Marvin Gaye',
year: '1967',
mpaa_rating: 'TV-PG',
description: 'Marvin Gaye was an American singer, songwriter, session drummer and record producer.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_marvingaye.jpg'
)

series23 = Series.create(
title: 'Talking Heads',
year: '1977',
mpaa_rating: 'TV-14',
description: 'Talking Heads were an American rock band formed in 1975 in New York City and active until 1991. ',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_talkingheads.jpg'
)

series24 = Series.create(
title: 'Jackson 5',
year: '1964',
mpaa_rating: 'TV-PG',
description: 'The Jackson 5, or Jackson Five, also known as the Jacksons in later years, are an American popular music group.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_jackson5.jpg'
)

series25 = Series.create(
title: 'Nas',
year: '1994',
mpaa_rating: 'TV-MA',
description: 'Nasir Bin Olu Dara Jones, better known by his stage name Nas, is an American rapper, record producer, actor and entrepreneur. ',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_nas.jpg'
)

series26 = Series.create(
title: 'Redbone',
year: '1973',
mpaa_rating: 'TV-PG',
description: 'Redbone is a Native American rock group originating in the 1970s with brothers Pat and Lolly Vegas. They reached the Top 5 on the U.S. Billboard Hot 100 chart in 1974 with their No. 5 hit single, "Come and Get Your Love".',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_redbone.jpg'
)

series27 = Series.create(
title: 'Senna',
year: '2011',
mpaa_rating: 'TV-14',
description: "Ayrton Senna becomes a three-time Formula One racing champion and Brazil's national hero before his untimely death at age 34.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_senna.jpg'
)

series28 = Series.create(
title: 'I Am Ali',
year: '2014',
mpaa_rating: 'TV-14',
description: "Muhammad Ali's own audio journals, friends, family and fellow boxers provide insight into the extraordinary life and legendary career of the pugilist.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_ali.jpg'
)

series29 = Series.create(
title: 'Red Bull BC One',
year: '2013',
mpaa_rating: 'TV-PG',
description: "Red Bull BC One is the biggest one-on- one breakdancing competition in the world. Every year, thousands of dancers across the globe vie for a chance to represent at the World Final.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_breaking.jpg'
)

series30 = Series.create(
title: 'Rule Yourself',
year: '2016',
mpaa_rating: 'TV-PG',
description: "This summer, Michael Phelps is swimming for his last time at the Olympics and collecting a few more gold medals along the way.",
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_phelps.jpg'
)

series31 = Series.create(
title: 'NBA Dunk Competition',
year: '2016',
mpaa_rating: 'TV-14',
description: 'Where amazing happens.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_dunk.jpg'
)

series32 = Series.create(
title: 'Undefeated',
year: '2011',
mpaa_rating: 'PG-13',
description: 'Chronicles three underprivileged students from inner-city Memphis and their volunteer coach who tries to help them beat the odds on and off the field.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_undefeated.jpg'
)

series33 = Series.create(
title: 'The Good, the Bad and the Ugly',
year: '1966',
mpaa_rating: 'TV-14',
description: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_goodbadugly.jpg'
)

series34 = Series.create(
title: 'A Streetcar Named Desire',
year: '1951',
mpaa_rating: 'PG',
description: 'Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_streetcar.jpg'
)

series35 = Series.create(
title: 'West Side Story',
year: '1961',
mpaa_rating: 'PG',
description: 'Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_westside.jpg'
)

series36 = Series.create(
title: 'Enter the Dragon',
year: '1973',
mpaa_rating: 'R',
description: 'A martial artist agrees to spy on a reclusive crime lord using his invitation to a tournament there as cover.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_enterdragon.jpg'
)

series37 = Series.create(
title: 'Breathless',
year: '1960',
mpaa_rating: 'PG-13',
description: 'A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he reunites with a hip American journalism student and attempts to persuade her to run away with him to Italy.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_breathless.jpg'
)

series38 = Series.create(
title: 'Annie Hall',
year: '1977',
mpaa_rating: 'PG',
description: 'Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.',
thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_anniehall.jpg'
)

vid1 = Video.create(
  title: 'NBA Dunk Competition',
  description: 'N/A',
  length: 'N/A',
  series_id: series31.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/nba_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_dunk.jpg'
)

vid2 = Video.create(
  title: 'Krazee-Eyez Killa',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb1.jpg'
)

vid3 = Video.create(
  title: 'The Doll',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 2,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb2.jpg'
)

vid4 = Video.create(
  title: 'Seinfeld',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 3,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb3.jpg'
)

vid5 = Video.create(
  title: 'The Table Read',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 4,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb4.jpg'
)

vid6 = Video.create(
  title: 'The Car Pool Lane',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 5,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb5.jpg'
)

vid7 = Video.create(
  title: 'Mister Softee',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 6,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb6.jpg'
)

vid8 = Video.create(
  title: 'The Therapists',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 7,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb7.jpg'
)

vid9 = Video.create(
  title: 'The Grand Opening',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 8,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb8.jpg'
)

vid10 = Video.create(
  title: 'The End',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 9,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb9.jpg'
)

vid11 = Video.create(
  title: 'Officer Krupke',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '28m',
  series_id: series3.id,
  episode_num: 10,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/curb10.jpg'
)

vid12 = Video.create(
  title: 'Walking Distance',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight1.jpg'
)

vid12 = Video.create(
  title: 'Eye of the Beholder',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 2,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight2.jpg'
)

vid12 = Video.create(
  title: 'Time Enough At Last',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 3,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight3.jpg'
)

vid12 = Video.create(
  title: 'To Serve Man',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 4,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight4.jpg'
)

vid12 = Video.create(
  title: "The Bewitchin' Pool",
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 5,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight5.jpg'
)

vid12 = Video.create(
  title: 'The Hitch-Hiker',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 6,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight6.jpg'
)

vid12 = Video.create(
  title: 'The After Hours',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 7,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight7.jpg'
)

vid12 = Video.create(
  title: 'Where is Everybody',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 8,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight8.jpg'
)

vid12 = Video.create(
  title: 'A World of Difference',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 9,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight9.jpg'
)

vid12 = Video.create(
  title: 'Living Doll',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies bibendum tellus, dapibus pellentesque tortor vulputate id.',
  length: '24m',
  series_id: series4.id,
  episode_num: 10,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/twilight10.jpg'
)

vid13 = Video.create(
  title: 'An Idiot Abroad',
  description: 'N/A',
  length: 'N/A',
  series_id: series1.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/idiot_abroad_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_idiot.jpg'
)

vid14 = Video.create(
  title: 'TV Party',
  description: 'N/A',
  length: 'N/A',
  series_id: series2.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_party_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_tvparty.jpg'
)

vid15 = Video.create(
  title: 'MTV Cribs',
  description: 'N/A',
  length: 'N/A',
  series_id: series5.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/cribs_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_cribs.jpg'
)

vid16 = Video.create(
  title: 'Ash vs Evil Dead',
  description: 'N/A',
  length: 'N/A',
  series_id: series6.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/evil_dead_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_evildead.jpg'
)

vid17 = Video.create(
  title: 'The Simpsons',
  description: 'N/A',
  length: 'N/A',
  series_id: series7.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/simpsons_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_simpsons.jpg'
)

vid18 = Video.create(
  title: 'Taxi',
  description: 'N/A',
  length: 'N/A',
  series_id: series8.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/taxi_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_taxi.jpg'
)

vid19 = Video.create(
  title: 'Louie',
  description: 'N/A',
  length: 'N/A',
  series_id: series9.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/louie_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_louie.jpg'
)

vid20 = Video.create(
  title: "It's Always Sunny in Philadelphia",
  description: 'N/A',
  length: 'N/A',
  series_id: series10.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sunny_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_sunny.jpg'
)

vid21 = Video.create(
  title: 'Trigun',
  description: 'N/A',
  length: 'N/A',
  series_id: series11.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/trigun_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/tv_trigun.jpg'
)

vid22 = Video.create(
  title: 'Queen',
  description: 'N/A',
  length: 'N/A',
  series_id: series12.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/queen_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_queen.jpg'
)

vid23 = Video.create(
  title: 'The Ronettes',
  description: 'N/A',
  length: 'N/A',
  series_id: series13.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/ronettes_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_ronettes.jpg'
)

vid24 = Video.create(
  title: 'The Beach Boys',
  description: 'N/A',
  length: 'N/A',
  series_id: series14.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/beachboys_video.mp4',
  thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/beachboys.jpg'
)

vid25 = Video.create(
  title: 'Lou Reed',
  description: 'N/A',
  length: 'N/A',
  series_id: series15.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/loureed_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_loureed.jpg'
)

vid26 = Video.create(
  title: 'Patti Smith',
  description: 'N/A',
  length: 'N/A',
  series_id: series16.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/pattismith_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_pattismith.jpg'
)

vid27 = Video.create(
  title: 'Black Flag',
  description: 'N/A',
  length: 'N/A',
  series_id: series17.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/blackflag_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_blackflag.jpg'
)

vid28 = Video.create(
  title: 'Chet Baker',
  description: 'N/A',
  length: 'N/A',
  series_id: series18.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/chetbaker_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_chetbaker.jpg'
)

vid29 = Video.create(
  title: 'David Bowie',
  description: 'N/A',
  length: 'N/A',
  series_id: series19.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/bowie_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_bowie.jpg'
)

vid30 = Video.create(
  title: 'Aaliyah',
  description: 'N/A',
  length: 'N/A',
  series_id: series20.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/aaliyah_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_aaliyah.jpg'
)

vid31 = Video.create(
  title: 'Richard Hell & The Voidoids',
  description: 'N/A',
  length: 'N/A',
  series_id: series21.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/richardhell_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_richardhell.jpg'
)

vid32 = Video.create(
  title: 'Marvin Gaye',
  description: 'N/A',
  length: 'N/A',
  series_id: series22.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/marvingaye_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_marvingaye.jpg'
)

vid33 = Video.create(
  title: 'Talking Heads',
  description: 'N/A',
  length: 'N/A',
  series_id: series23.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/talkingheads_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_talkingheads.jpg'
)

vid34 = Video.create(
  title: 'Jackson 5',
  description: 'N/A',
  length: 'N/A',
  series_id: series24.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/jackson5_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_jackson5.jpg'
)

vid35 = Video.create(
  title: 'Nas',
  description: 'N/A',
  length: 'N/A',
  series_id: series25.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/nas_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_nas.jpg'
)

vid36 = Video.create(
  title: 'Redbone',
  description: 'N/A',
  length: 'N/A',
  series_id: series26.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/redbone_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/music_redbone.jpg'
)

vid37 = Video.create(
  title: 'Senna',
  description: 'N/A',
  length: 'N/A',
  series_id: series27.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/senna_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_senna.jpg'
)

vid38 = Video.create(
  title: 'I Am Ali',
  description: 'N/A',
  length: 'N/A',
  series_id: series28.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/ali_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_ali.jpg'
)

vid39 = Video.create(
  title: 'Red Bull BC One',
  description: 'N/A',
  length: 'N/A',
  series_id: series29.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/bcone_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_breaking.jpg'
)

vid40 = Video.create(
  title: 'Rule Yourself',
  description: 'N/A',
  length: 'N/A',
  series_id: series30.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/phelps_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_phelps.jpg'
)

vid41 = Video.create(
  title: 'Undefeated',
  description: 'N/A',
  length: 'N/A',
  series_id: series32.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/undefeated_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/sports_undefeated.jpg'
)

vid42 = Video.create(
  title: 'The Good, the Bad and the Ugly',
  description: 'N/A',
  length: 'N/A',
  series_id: series33.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/goodbadugly_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_goodbadugly.jpg'
)

vid43 = Video.create(
  title: 'A Streetcar Named Desire',
  description: 'N/A',
  length: 'N/A',
  series_id: series34.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/streetcar_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_streetcar.jpg'
)

vid44 = Video.create(
  title: 'West Side Story',
  description: 'N/A',
  length: 'N/A',
  series_id: series35.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/westside_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_westside.jpg'
)

vid45 = Video.create(
  title: 'Enter the Dragon',
  description: 'N/A',
  length: 'N/A',
  series_id: series36.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/enterdragon_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_enterdragon.jpg'
)

vid46 = Video.create(
  title: 'Breathless',
  description: 'N/A',
  length: 'N/A',
  series_id: series37.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/breathless_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_breathless.jpg'
)

vid47 = Video.create(
  title: 'Annie Hall',
  description: 'N/A',
  length: 'N/A',
  series_id: series38.id,
  episode_num: 1,
  video_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/anniehall_video.mp4',
  thumbnail_url: 'https://s3.us-east-2.amazonaws.com/getflix-pro/classics_anniehall.jpg'
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

cat32 = Categorization.create(
  genre_id: genres[2].id,
  media_id: series32.id,
  media_type: 'Series'
)

cat33 = Categorization.create(
  genre_id: genres[3].id,
  media_id: series33.id,
  media_type: 'Series'
)

cat34 = Categorization.create(
  genre_id: genres[3].id,
  media_id: series34.id,
  media_type: 'Series'
)

cat35 = Categorization.create(
  genre_id: genres[3].id,
  media_id: series35.id,
  media_type: 'Series'
)

cat36 = Categorization.create(
  genre_id: genres[3].id,
  media_id: series36.id,
  media_type: 'Series'
)

cat37 = Categorization.create(
  genre_id: genres[3].id,
  media_id: series37.id,
  media_type: 'Series'
)

cat38 = Categorization.create(
  genre_id: genres[3].id,
  media_id: series38.id,
  media_type: 'Series'
)
