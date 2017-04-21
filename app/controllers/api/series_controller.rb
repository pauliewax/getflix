class Api::SeriesController < ApplicationController
  def show
    @series = Series.find_by_id(params[:id])

    render :show
  end
end
