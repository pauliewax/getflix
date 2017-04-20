class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      log_in(@user)
      render :show
    else
      render json: ["Sorry, we can't find an account with this email address and password combination."], status: 422
    end
  end

  def destroy
    if current_user
      log_out!
      render json: {}
    else
      render json: ["Unable to sign out, not currently logged in"], status: 404
    end
  end
end
