json.id @serie.id
json.title @serie.title
json.url @serie.thumbnail_url

json.episodes @serie.videos do |episode|
  json.id episode.id
end
