class Api::ArtistsController < ApplicationController

  def show
    @artist = Artist.with_attached_photo.includes(:events, :venues, :trackings, :rsvps, comments: [:user]).order("comments.created_at DESC").order("events.event_on ASC").find_by_id(params[:id])

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
