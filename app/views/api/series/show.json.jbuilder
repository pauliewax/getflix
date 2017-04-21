json.id @series.id
json.title @series.title
json.url @series.thumbnail_url

json.episodes @series.videos do |episode|
  json.id episode.id
end
