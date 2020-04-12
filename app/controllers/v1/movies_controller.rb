class V1::MoviesController < ApplicationController
  def create
    Movie.create(
      name: params[:name],
      description: params[:description],
      url_image: params[:url_image],
      start_function: params[:start_function],
      end_function: params[:end_function]
    )
  end
end
