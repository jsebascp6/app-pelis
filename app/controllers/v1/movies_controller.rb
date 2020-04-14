class V1::MoviesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    Movie.create(
      name: permit_params[:name],
      description: permit_params[:description],
      image_url: permit_params[:image_url],
      start_function: permit_params[:start_function],
      end_function: permit_params[:end_function]
    )
  end

  def index
    movies = Movie.all
    respond_to do |format|
      format.json { render json: {data: movies}, status: 200 }
    end
  end

  private

  def permit_params
    params.require(:movie).permit(:name, :description, :image_url)
  end
end
