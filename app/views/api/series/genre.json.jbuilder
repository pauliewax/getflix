json.array! @series do |serie|
  json.extract! serie, :id, :title, :year, :thumbnail_url
end
