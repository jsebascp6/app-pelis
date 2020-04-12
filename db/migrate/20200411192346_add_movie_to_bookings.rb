class AddMovieToBookings < ActiveRecord::Migration[6.0]
  def up 
    add_reference :bookings, :movie, foreign_key: true
  end

  def down
    remove_reference :bookings, :movie, foreign_key: true
  end
end
