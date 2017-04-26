class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
    render :index
  end

  def show
    @video = Video.find(params[:id])
    render :show
  end

  def series
    @videos = Video.joins(:series).where('series.id = ?', params[:seriesId])

    render :series
  end
end
