json.array! @videos do |video|
  json.partial! '/api/videos/video', video: video
end
