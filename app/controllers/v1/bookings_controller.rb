class V1::BookingsController < ApplicationController
  def create
    Booking.create(
      name: params[:name],
      identification_card: params[:identification_card],
      email: params[:email],
      phone: params[:phone],
      movie_id: params[:movie_id]
    )
  end
end
