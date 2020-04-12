class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.string :identification_card
      t.string :name
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
