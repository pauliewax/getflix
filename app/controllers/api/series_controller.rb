class Api::SeriesController < ApplicationController
  def index
    @series = Series.all

    render :index
  end

  def show
    @serie = Series.find_by_id(params[:id])
    render :show
  end

  def genre
    @series = Series.joins(:genres).where('genres.id = ?', params[:genreId])
    @genre = Genre.find(params[:genreId])
    render :genre
  end

  def search
    @series = Series.where("lower(title) like ?", "%#{params[:searchQuery].downcase}%")
    render :search
  end

end
