class UsersController < ApplicationController
  def index
  end
  
  def new
    @user = User.new
  end
  
  def show
    @user = User.find(params[:id])
    @user = false if @user.blank?
    render json: @user
  end
  
  def create
    p params
    @user = User.new params[:user]
    
    if @user.save
      redirect_to root_path
    else
      render action: 'new'
    end
  end
end