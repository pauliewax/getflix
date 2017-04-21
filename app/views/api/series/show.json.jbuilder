json.id @series.id
json.name @series.title

json.episodes @series.videos do |episode|
  json.id episode.id
end
