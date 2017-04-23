class Api::SeriesController < ApplicationController
  def show
    @serie = Series.find_by_id(params[:id])

    render :show
  end

  def genre
    @series = Series.joins(:genres).where('genres.id = ?', params[:genreId])
    @genre = Genre.find(params[:genreId])
    render :genre
  end
end
