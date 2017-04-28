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

series25 = Series.create(
title: 'Redbone',
year: '1973',
mpaa_rating: 'TV-PG',
description: 'Redbone is a Native American rock group originating in the 1970s with brothers Pat and Lolly Vegas. They reached the Top 5 on the U.S. Billboard Hot 100 chart in 1974 with their No. 5 hit single, "Come and Get Your Love".',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/music_redbone.jpg'
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

series27 = Series.create(
title: 'I Am Ali',
year: '2014',
mpaa_rating: 'TV-14',
description: "Muhammad Ali's own audio journals, friends, family and fellow boxers provide insight into the extraordinary life and legendary career of the pugilist.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_ali.jpg'
)

series27 = Series.create(
title: 'Red Bull BC One',
year: '2013',
mpaa_rating: 'TV-PG',
description: "Muhammad Ali's own audio journals, friends, family and fellow boxers provide insight into the extraordinary life and legendary career of the pugilist.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_breaking.jpg'
)

series28 = Series.create(
title: 'Rule Yourself',
year: '2016',
mpaa_rating: 'TV-PG',
description: "This summer, Michael Phelps is swimming for his last time at the Olympics and collecting a few more gold medals along the way.",
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_phelps.jpg'
)

series29 = Series.create(
title: 'NBA Dunk Competition',
year: '2016',
mpaa_rating: 'TV-14',
description: 'Where amazing happens.',
thumbnail_url: 'http://www.pauliewax.com/wp-content/uploads/2017/04/sports_dunk.jpg'
)
