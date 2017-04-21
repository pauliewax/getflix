json.id @genre.id
json.name @genre.name

json.series @genre.series do |show|
  json.id show.id
  # json.extract! show, :id, :title, :year, :mpaa_rating, :description, :thumbnail_url
  #
  # json.episodes show.videos do |episode|
  #   json.extract! episode, :id, :title, :year, :description, :length, :thumbnail_url
  # end
end
