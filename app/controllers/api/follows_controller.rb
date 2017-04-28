class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :series_id)
  end
end
