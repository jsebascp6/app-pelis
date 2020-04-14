class V1::BookingsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    Booking.create(
      name: permit_params[:name],
      identification_card: permit_params[:cedula],
      email: permit_params[:email],
      phone: permit_params[:phone],
      movie_id: permit_params[:id_movie]
    )
  end

  def index
    bookings = Booking.response_with_name_movie
    respond_to do |format|
      format.json { render json: {data: bookings}, status: 200 }
    end
  end

  private

  def permit_params
    params.require(:user).permit(:name, :cedula, :email, :phone, :id_movie)
  end
end
