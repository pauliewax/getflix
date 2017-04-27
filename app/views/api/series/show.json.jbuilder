json.id @serie.id
json.title @serie.title
json.description @serie.description
json.url @serie.thumbnail_url
json.year @serie.year
json.rating @serie.mpaa_rating
json.firstEp @serie.videos.where('episode_num = 1 ')
json.episodes @serie.videos do |episode|
  json.id episode.id
end
