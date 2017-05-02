@follows.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :series_id, :user_id
    json.series do
      json.id follow.series.id
      json.title follow.series.title
      json.description follow.series.description
      json.thumbnail_url follow.series.thumbnail_url
      json.year follow.series.year
      json.rating follow.series.mpaa_rating
      json.firstEp follow.series.videos.where('episode_num = 1 ')
    end
  end
end
