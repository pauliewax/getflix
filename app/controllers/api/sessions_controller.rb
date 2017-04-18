class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      log_in(@user)
      render :show
    else
      render json: "Invalid crendentials", status: 422
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: "User not signed in", status: 404
    end
  end
end
