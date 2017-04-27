json.array! @series do |serie|
  json.extract! serie, :id, :title, :thumbnail_url, :description
  json.firstEp serie.videos.where('episode_num = 1 ')
  json.genre @genre.name
end
