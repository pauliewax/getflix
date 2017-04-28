@follows.each do |follow|
  json.set! follow.id do
    json.extract! follow, :id, :series_id, :user_id
  end
end
