json.array! @series do |serie|
  json.extract! serie, :id, :title, :thumbnail_url, :description
  json.firstEp serie.videos.where('episode_num = 1 ')
  json.genres do
    json.array! serie.genres do |genre|
      json.extract! genre, :name
    end
  end
end
