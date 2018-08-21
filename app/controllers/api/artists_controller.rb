class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.find_by_id(params[:id])
    @trackings = @artist.trackings
    @events = @artist.events.order("events.event_on ASC")
    @venues = @artist.venues
    @rsvps = @artist.rsvps
    @comments = @artist.comments.order("comments.created_at DESC")

    user_ids = @comments.map do |comment|
      comment.user_id
    end

    @users = User.find(user_ids)

    if @artist
      render :show
    else
      render json: ["No artist found"], status: 404
    end
  end

  def index
    @artists = Artist.all.includes(:events, :venues, :trackings)
  end

end
