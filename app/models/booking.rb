class Booking < ApplicationRecord
  belongs_to :movie

  def self.response_with_name_movie
    self
      .all
      .map do |booking|
        {
          name:   booking.name,
          cedula: booking.identification_card,
          email:  booking.email,
          phone:  booking.phone,
          movie:  booking.movie.name
        }
      end
  end
end
