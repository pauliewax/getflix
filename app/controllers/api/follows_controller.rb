class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.where(user_id: current_user.id)

    render :index
  end

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find(params[:id])

    if @follow.destroy
      render :show
    else
      render json: @follow.errors.full_message, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:user_id, :series_id)
  end
end
