json.array! @series do |serie|
  json.extract! serie, :id, :title, :thumbnail_url
  json.genre @genre.name
end
