class Api::SeriesController < ApplicationController
  def show
    @series = Series.find_by_id(params[:id])

    render :show
  end

  def genre
    @series = Series.joins(:genres).where('genres.id = ?', params[:genreId])
    render :genre
  end
end
