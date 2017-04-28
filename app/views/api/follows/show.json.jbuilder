json.extract! @follow, :id, :user_id, :series_id
  json.series do
    json.id @follow.series.id
    json.title @follow.series.title
    json.description @follow.series.description
    json.url @follow.series.thumbnail_url
    json.year @follow.series.year
    json.rating @follow.series.mpaa_rating
    json.firstEp @follow.series.videos.where('episode_num = 1 ')
    json.episodes @follow.series.videos do |episode|
      json.id episode.id
    end
  end
