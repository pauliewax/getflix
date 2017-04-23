json.array! @series do |serie|
  json.extract! serie, :id, :title, :thumbnail_url, :description
  json.genre @genre.name
end
