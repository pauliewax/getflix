json.id @genre.id
json.name @genre.name

json.series @genre.series do |show|
  json.extract! show, :id, :title, :year, :mpaa_rating, :description, :thumbnail_url
end
