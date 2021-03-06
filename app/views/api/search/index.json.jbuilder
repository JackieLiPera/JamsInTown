@artists.each do |artist|
  json.set! artist.id do
    json.partial! '/api/artists/artist', artist: artist
    json.image url_for(artist.photo)
  end
end

@venues.each do |venue|
  json.set! venue.id do
    json.partial! '/api/venues/venue', venue: venue
  end
end
